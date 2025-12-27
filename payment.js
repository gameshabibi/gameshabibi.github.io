// ============================================
// TELEGRAM BOT CONFIGURATION
// ============================================
// Replace these with your own bot credentials
const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"; // Get from @BotFather
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE"; // Your Telegram chat ID

// Your payment UPI ID or wallet address (customize this)
const PAYMENT_ID = "prashantsingh896@ybl";

// ============================================
// TELEGRAM HELPER FUNCTIONS
// ============================================

/**
 * Send a message to Telegram
 * @param {string} message - The message to send
 * @returns {Promise<boolean>} - Success status
 */
async function sendToTelegram(message) {
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML", // Supports HTML formatting
        }),
      }
    );

    const data = await response.json();
    return data.ok;
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return false;
  }
}

/**
 * Send a photo to Telegram
 * @param {File} file - The image file to send
 * @param {string} caption - Caption for the image
 * @returns {Promise<boolean>} - Success status
 */
async function sendPhotoToTelegram(file, caption) {
  try {
    const formData = new FormData();
    formData.append("chat_id", TELEGRAM_CHAT_ID);
    formData.append("photo", file);
    formData.append("caption", caption);
    formData.append("parse_mode", "HTML");

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.ok;
  } catch (error) {
    console.error("Error sending photo to Telegram:", error);
    return false;
  }
}

// ============================================
// PAYMENT QR CODE GENERATION
// ============================================

/**
 * Generate QR Code for UPI payment
 * @param {number} amount - Payment amount
 */
function generateQRCode(amount) {
  const qrContainer = document.getElementById("qrCode");
  const payButton = document.getElementById("payButton");

  if (amount <= 0) {
    qrContainer.innerHTML = "";
    payButton.innerHTML = "";
    return;
  }

  const paymentData = `upi://pay?pa=${PAYMENT_ID}&pn=GameStore&am=${amount.toFixed(
    2
  )}&cu=INR&tn=Order Payment`;

  // Using QR Code API
  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    paymentData
  )}`;

  qrContainer.innerHTML = `<img src="${qrCodeURL}" alt="Payment QR Code" class="w-full h-auto">`;
  payButton.innerHTML = `<a href="${paymentData}" class="btn">Pay Now</a>`;
}

//form
