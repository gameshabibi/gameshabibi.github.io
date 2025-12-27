# 🚀 Quick Start Guide - Telegram Bot Setup

## ⚡ 3-Minute Setup

### 1️⃣ Create Bot (30 seconds)
1. Open Telegram → Search `@BotFather`
2. Send `/newbot`
3. Name: `GameStore Orders Bot`
4. Username: `gamestoreorders_bot`
5. **Copy the TOKEN** (long string with numbers and letters)

### 2️⃣ Get Chat ID (30 seconds)
1. Start your bot (click Start button)
2. Open in browser: `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates`
3. Find: `"chat":{"id":123456789}`
4. **Copy the number after "id":**

### 3️⃣ Update Files (2 minutes)
Open **`payment.js`** and replace lines 6-7:
```javascript
const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"; // Paste your token
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE"; // Paste your chat ID
```

Open **`telegram-forms.js`** and replace lines 6-7:
```javascript
const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"; // Paste your token  
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE"; // Paste your chat ID
```

### 4️⃣ Save & Test
1. Save both files
2. Push to GitHub: `git add . && git commit -m "Update bot config" && git push`
3. Wait 1-2 minutes for GitHub Pages to update
4. Test the contact form on your website!

---

## 📱 What You'll Receive

✅ **Order Notifications** - Every purchase with payment screenshot  
✅ **Contact Messages** - All contact form submissions  
✅ **Customer Details** - Name, email, order info  
✅ **Timestamps** - When each action occurred

---

## ⚠️ Troubleshooting

**Not working?**
- Check TOKEN and CHAT_ID have no extra spaces
- Make sure you sent `/start` to your bot
- Wait 2 minutes after pushing to GitHub
- Check browser console (F12) for errors

**Still stuck?**  
📧 mr.bgmi9098@gmail.com  
📸 @games_habibi on Instagram

---

## 📚 Full Documentation
See `TELEGRAM_SETUP.md` for detailed instructions.
