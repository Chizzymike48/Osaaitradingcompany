import http from "node:http";

const port = Number(process.env.PORT ?? 4000);
const frontendUrl = process.env.FRONTEND_URL ?? "http://localhost:3000";
const maxBodySize = 20_000;

function sendJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": frontendUrl,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  response.end(JSON.stringify(payload));
}

function isValidContact(data) {
  return typeof data?.name === "string" && data.name.trim().length >= 2 &&
    typeof data?.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    typeof data?.phone === "string" && data.phone.trim().length >= 10 &&
    typeof data?.subject === "string" && data.subject.trim().length >= 3 &&
    typeof data?.message === "string" && data.message.trim().length >= 10;
}

const server = http.createServer(async (request, response) => {
  if (request.method === "OPTIONS") return sendJson(response, 204, {});
  if (request.method !== "POST" || request.url !== "/api/contact") {
    return sendJson(response, 404, { error: "Not found." });
  }

  let rawBody = "";
  for await (const chunk of request) {
    rawBody += chunk;
    if (rawBody.length > maxBodySize) return sendJson(response, 413, { error: "Request is too large." });
  }

  let data;
  try {
    data = JSON.parse(rawBody);
  } catch {
    return sendJson(response, 400, { error: "Invalid request body." });
  }

  if (!isValidContact(data)) {
    return sendJson(response, 400, { error: "Please check the form details and try again." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@ossaitradingcompany.info";
  if (!apiKey || !from) {
    return sendJson(response, 503, { error: "The contact service is not configured yet. Please call or email us directly." });
  }

  const productLine = data.product ? `\nProduct: ${String(data.product).trim()}` : "";
  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email.trim(),
      subject: `[Website enquiry] ${data.subject.trim()}`,
      text: `Name: ${data.name.trim()}\nEmail: ${data.email.trim()}\nPhone: ${data.phone.trim()}${productLine}\n\nMessage:\n${data.message.trim()}`,
    }),
  }).catch(() => null);

  if (!emailResponse?.ok) {
    return sendJson(response, 502, { error: "We could not send your message right now. Please try again or email us directly." });
  }

  return sendJson(response, 200, { success: true });
});

server.listen(port, () => console.log(`OSSAI backend listening on port ${port}`));
