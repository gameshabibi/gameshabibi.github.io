# 🎮 Games Habibi — Next.js Digital Game Store

> Your one-stop storefront for the latest PC games, Steam account access, and digital subscriptions with fast UPI payments. Built on **Next.js 16 (App Router)**, **React 19**, and **TypeScript** for seamless **Vercel** deployment.

---

## 🌟 Key Features

- 🎮 **Curated PC Game Catalog** — 40+ titles with real-time personal vs. shared Steam account switching.
- 📺 **Streaming Memberships** — Netflix Premium 4K, YouTube Premium, and digital passes.
- 💰 **Instant UPI QR Payments** — Fast client-side QR generation and direct UPI deep linking for GPay, PhonePe, and Paytm.
- 🔢 **12-Digit UPI UTR Tracking** — Direct reference ID entry to speed up manual bank verification.
- 💬 **Zero-Leak Telegram Order Relay** — Server-side API route (`/api/order`) dispatches payment receipts directly to your private Telegram bot without exposing tokens to the browser.
- 📱 **Mobile-First App Bar & Slide-Over Drawer** — Sticky thumb navigation bar, quick search, live cart calculations, and bundle discounts.
- 📦 **Order History & Draft Auto-Save** — Customer name and email persist across mobile app switches, and past order IDs are saved for easy retrieval.
- 🎫 **Integrated Help Desk** — Interactive support form (`/contact`) that delivers customer inquiries straight to Telegram.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables (local)
cp .env.example .env.local

# 3. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deploying to Vercel (1-Click)

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"** → Import your GitHub repository.
3. Under **Environment Variables**, add:
   - `PAYMENT_ID` = `prashantsingh896@ybl` (your UPI VPA)
   - `TELEGRAM_BOT_TOKEN` = `your_telegram_bot_token`
   - `TELEGRAM_CHAT_ID` = `your_telegram_chat_id`
4. Click **Deploy**. Vercel will automatically build and deploy your Next.js application!

---

## 📂 Project Structure

```
├── public/                 # Static assets (game covers, icons, audio)
│   ├── png/games/          # Game covers
│   ├── audio/              # Sound feedback
│   └── site.webmanifest    # Web manifest
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── order/      # Secure serverless Telegram order relay
│   │   │   └── contact/    # Secure support ticket relay
│   │   ├── contact/        # Support Ticket & Help Desk page
│   │   ├── privacy/        # Privacy policy
│   │   ├── terms/          # Terms of service
│   │   ├── shipping/       # Shipping & digital delivery policy
│   │   ├── cancellation/   # Refund policy
│   │   ├── layout.tsx      # Root layout with Google Fonts & CartProvider
│   │   └── page.tsx        # Storefront home page
│   ├── components/         # Reusable React components (Header, Catalog, Drawer, Hero, etc.)
│   ├── context/            # React CartContext (cart, quantities, discounts, persistence)
│   ├── data/               # Catalog datasets (games, services, variants, badges)
│   ├── lib/                # Pure client-side QR generator
│   └── styles/             # Cyber Arcade Bazaar design system styles
├── legacy/                 # Archived original static HTML/JS files
├── .env.example            # Example environment variables
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```