# OSSAI Trading

This repository is split into two applications:

- `frontend/` — Next.js customer website.
- `backend/` — standalone Node.js API that sends contact-form emails through Resend.

## Local development

Copy `frontend/.env.example` to `frontend/.env.local`, and `backend/.env.example` to `backend/.env`. Populate the Resend variables after verifying `ossaitradingcompany.info` in Resend.

Run the frontend with `npm run dev:frontend`, and the backend with `npm run dev:backend`. The frontend runs on port 3000 and the backend on port 4000 by default.
