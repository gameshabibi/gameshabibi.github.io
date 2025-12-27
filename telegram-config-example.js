// ============================================
// TELEGRAM BOT CONFIGURATION EXAMPLE
// ============================================
// Copy this content and paste it into BOTH:
// 1. payment.js (replace the config section)
// 2. telegram-forms.js (replace the config section)

// STEP 1: Get your bot token from @BotFather on Telegram
// Send /newbot to @BotFather and follow instructions
const TELEGRAM_BOT_TOKEN = "1234567890:ABCdefGHIjklMNOpqrsTUVwxyz-12345678"; 

// STEP 2: Get your chat ID
// Method 1: Send /start to your bot, then visit:
// https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
// Look for "chat":{"id":123456789}
// 
// Method 2: Search for @userinfobot on Telegram and send /start
const TELEGRAM_CHAT_ID = "123456789"; 

// ============================================
// REPLACE THE VALUES ABOVE WITH YOUR OWN!
// ============================================
// After updating:
// 1. Copy the TELEGRAM_BOT_TOKEN value (with quotes)
// 2. Copy the TELEGRAM_CHAT_ID value (with quotes)
// 3. Paste them in payment.js
// 4. Paste them in telegram-forms.js
// 5. Save all files
// 6. Push to GitHub
// 7. Test your forms!

// ============================================
// QUICK TEST
// ============================================
// You can test if your bot token works by opening this URL:
// https://api.telegram.org/bot<YOUR_TOKEN>/getMe
// 
// If it works, you'll see your bot information!
// If it fails, your token is incorrect.

// ============================================
// EXAMPLE URLS FOR TESTING
// ============================================
// Replace <YOUR_TOKEN> with your actual token (without < >)
//
// Get Bot Info:
// https://api.telegram.org/bot<YOUR_TOKEN>/getMe
//
// Get Updates (to find your chat ID):
// https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
//
// Send Test Message:
// https://api.telegram.org/bot<YOUR_TOKEN>/sendMessage?chat_id=<YOUR_CHAT_ID>&text=Test

// ============================================
// NOTES
// ============================================
// - Bot token is sensitive! Don't share it publicly
// - Chat ID can be your personal ID or a group ID
// - For groups: Add bot to group, send a message, then check getUpdates
// - If leaked, revoke token via @BotFather: /revoke
