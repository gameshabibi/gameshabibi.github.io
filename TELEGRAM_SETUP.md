# 📱 Telegram Bot Setup Guide

This guide will help you set up your own Telegram bot to receive all form submissions from your GameStore website.

---

## 🤖 Step 1: Create Your Telegram Bot

1. **Open Telegram** and search for `@BotFather`
2. Send the command: `/newbot`
3. **Choose a name** for your bot (e.g., "GameStore Orders Bot")
4. **Choose a username** (must end with 'bot', e.g., "gamestoreorders_bot")
5. **BotFather will reply with your bot TOKEN** - Copy and save it!
   - Format: `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz-12345678`

---

## 🆔 Step 2: Get Your Chat ID

### Method 1: Using Bot (Recommended)
1. Search for your newly created bot in Telegram
2. Click **Start** or send `/start` to your bot
3. Visit this URL in your browser (replace `<YOUR_TOKEN>`):
   ```
   https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
   ```
4. Look for `"chat":{"id":123456789}` in the response
5. Copy the number after `"id":` - this is your **Chat ID**

### Method 2: Using @userinfobot
1. Search for `@userinfobot` in Telegram
2. Send `/start`
3. The bot will reply with your Chat ID

---

## ⚙️ Step 3: Configure Your Website

You need to update **2 files** with your bot credentials:

### File 1: `payment.js`
Open `payment.js` and replace the following lines (near the top):

```javascript
const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"; // Replace with your token
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE"; // Replace with your chat ID
```

**Example:**
```javascript
const TELEGRAM_BOT_TOKEN = "1234567890:ABCdefGHIjklMNOpqrsTUVwxyz-12345678";
const TELEGRAM_CHAT_ID = "123456789";
```

### File 2: `telegram-forms.js`
Open `telegram-forms.js` and replace the same lines:

```javascript
const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"; // Replace with your token
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE"; // Replace with your chat ID
```

---

## 📋 What Forms Are Connected?

After setup, you'll receive Telegram notifications for:

### ✅ Currently Active:
1. **Order Form** (Cart checkout) - Receives:
   - Customer name & email
   - Games/services purchased
   - Total amount
   - Payment screenshot (as photo)

2. **Contact Form** (Main page) - Receives:
   - Customer name & email
   - Subject
   - Message content

### 🔜 Ready to Add:
3. **Support Ticket Form**
4. **Refund/Cancellation Request Form**

---

## 🎨 Message Format Examples

### Order Notification:
```
🎮 NEW ORDER RECEIVED 🎮

👤 Customer Name: John Doe
📧 Email: john@example.com

🕹️ Games/Services:
The Last of Us x 1, God of War x 2

💰 Total Amount: ₹447.00

📅 Order Time: 27/12/2025, 9:30:45 PM

⚠️ Note: Payment screenshot attached separately
```

### Contact Form:
```
📧 NEW CONTACT FORM SUBMISSION 📧

👤 Name: Jane Smith
📧 Email: jane@example.com
📋 Subject: Game not working

💬 Message:
I purchased GTA V but can't access it...

📅 Submitted: 27/12/2025, 9:45:12 PM
```

---

## 🧪 Step 4: Test Your Setup

1. **Save all changes** to `payment.js` and `telegram-forms.js`
2. **Upload files** to your GitHub repository
3. **Open your website**
4. **Test the contact form**:
   - Fill in name, email, and message
   - Click "Send Message"
   - Check your Telegram bot for the message!

5. **Test the order form**:
   - Add items to cart
   - Fill in order details
   - Upload a test image
   - Submit order
   - Check Telegram for order + photo!

---

## 🔒 Security Notes

⚠️ **IMPORTANT**: Your bot token is sensitive information!

- **Never share** your bot token publicly
- **Don't commit** tokens to public GitHub repositories
- If token is leaked, use BotFather to `/revoke` and create a new one

### Recommended: Use Environment Variables (Advanced)
For better security, consider using GitHub Secrets or environment variables instead of hardcoding tokens.

---

## 🐛 Troubleshooting

### Issue: Not receiving messages
✅ **Check:**
- Bot token is correct (no extra spaces)
- Chat ID is correct (it's a number, not your username)
- You've sent `/start` to your bot
- Browser console for errors (Press F12)

### Issue: "Unauthorized" error
✅ **Fix:** Your bot token is incorrect. Get a new one from @BotFather

### Issue: Photo not sending
✅ **Fix:** 
- Check file size (must be under 10MB)
- Check file format (JPG, PNG supported)
- Ensure internet connection is stable

### Issue: Messages working but photos failing
✅ **Fix:** The photo API requires a valid file. Make sure the payment screenshot field has a file selected.

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console (F12) for error messages
2. Verify bot token and chat ID are correct
3. Test the bot manually: Send messages using the Telegram API URL
4. Contact: mr.bgmi9098@gmail.com or @games_habibi on Instagram

---

## 🚀 Next Steps

Once everything is working:

1. ✅ Update your old bot token (currently in payment.js)
2. ✅ Test all forms thoroughly
3. ✅ Add more forms as needed (support, refund, etc.)
4. ✅ Consider adding a webhook for instant notifications
5. ✅ Set up auto-replies using BotFather

---

## 📚 Additional Features You Can Add

### Auto-Reply to Customers
Use BotFather commands:
- `/setcommands` - Add commands like /help, /status
- `/setdescription` - Set bot description

### Custom Notifications
Edit the message templates in the JavaScript files to customize:
- Emoji usage
- Text formatting (bold, italic)
- Additional information fields

### Multiple Bots
You can create separate bots for:
- Order notifications
- Support tickets
- General contact
- Refund requests

---

**Last Updated:** December 27, 2025
**Version:** 1.0
