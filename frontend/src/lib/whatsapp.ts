import { BUSINESS_CONFIG } from "@/config/business";

export const generateWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = BUSINESS_CONFIG.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const WHATSAPP_MESSAGES = {
  general:
    "Hello, I would like to make an enquiry about your furniture collection.",
  product: (productName: string) =>
    `Hello, I'm interested in the ${productName}. Please provide more information.`,
};
