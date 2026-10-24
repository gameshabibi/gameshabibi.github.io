# 🛡️ Games Habibi — Secure Telegram Order Relay (Cloudflare Worker)

This Cloudflare Worker keeps your Telegram **Bot Token** and **Chat ID** 100% hidden on the server, completely eliminating token leakage and browser CORS restrictions.

---

## 🚀 Quick Setup (2 Minutes, Free Forever)

### Option A: Using the Cloudflare Dashboard (No Install Needed)

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com/) and create a free account (if you don't have one).
2. Go to **Workers & Pages** → **Create application** → **Create Worker**.
3. Name it `gameshabibi-order-relay` and click **Deploy**.
4. Click **Quick Edit** in the top right.
5. Paste the entire contents of [`worker.js`](worker.js) into the editor.
6. Under **Settings** → **Variables and Secrets**, add two encrypted secrets:
   - `BOT_TOKEN`: Your Telegram Bot Token
   - `CHAT_ID`: Your Telegram Chat ID
7. Click **Save and Deploy**.
8. Copy your Worker URL (e.g. `https://gameshabibi-order-relay.<your-subdomain>.workers.dev`).
9. In `script/payment.js`, set:
   ```javascript
   const SECURE_RELAY_URL = "https://gameshabibi-order-relay.<your-subdomain>.workers.dev";
   ```

---

### Option B: Deploying with Wrangler CLI

```bash
cd cloudflare-worker
npx wrangler secret put BOT_TOKEN
npx wrangler secret put CHAT_ID
npx wrangler deploy
```

Then copy the deployed URL into `script/payment.js`!
