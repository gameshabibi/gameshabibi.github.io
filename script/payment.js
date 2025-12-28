// Your payment UPI ID or wallet address (customize this)
const PAYMENT_ID = "prashantsingh896@ybl";

// Generate QR Code
function generateQRCode(amount) {
  const qrContainer = document.getElementById("qrCode");
  const payButton = document.getElementById("payButton");

  if (amount <= 0) {
    qrContainer.innerHTML = "";
    payButton.innerHTML = "";
    return;
  }

  const paymentData = `upi://pay?pa=${PAYMENT_ID}&pn=MyShop&am=${amount.toFixed(
    2
  )}&cu=INR&tn=Order Payment`;

  // Using QR Code API (Google Charts API)
  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    paymentData
  )}`;

  qrContainer.innerHTML = `<img src="${qrCodeURL}" alt="Payment QR Code" class="w-full h-auto">`;
  payButton.innerHTML = `<a href="${paymentData}" class="btn">Pay Now</a>`;
}

//form
function showLoader(text = "Sending order…") {
  const overlay = document.getElementById("loaderOverlay");
  const icon = document.getElementById("loaderIcon");
  const label = document.getElementById("loaderText");

  // 🔄 RESET to spinner every time
  icon.className = "spinner";
  icon.innerHTML = "";
  label.textContent = text;

  overlay.style.display = "flex";
}

function showSuccess(message = "Order received!") {
  const icon = document.getElementById("loaderIcon");
  const label = document.getElementById("loaderText");

  icon.className = "loader-icon loader-success";
  icon.innerHTML = "✔";
  label.textContent = message;

  setTimeout(hideLoader, 2000);
}

function showError(message = "Order failed. Try again.") {
  const icon = document.getElementById("loaderIcon");
  const label = document.getElementById("loaderText");

  // ❌ REMOVE spinner
  icon.className = "loader-icon loader-error";
  icon.innerHTML = "✖";

  // 🧾 SHOW error message
  label.textContent = message;

  enableSubmit();
  // ⏱ Auto-hide overlay
  setTimeout(() => {
    hideLoader();
  }, 3000);
}

function hideLoader() {
  document.getElementById("loaderOverlay").style.display = "none";
}

document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("Submitting", cart);

  if (cart.length === 0) {
    showError("Cart is empty");
    return;
  }

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const paymentFile = form.payment.files[0];

  if (!paymentFile) {
    playErrorFeedback();
    showError("Upload payment screenshot");
    return;
  }

  if (!paymentFile.type.startsWith("image/")) {
    playErrorFeedback();
    showError("Only image files are allowed");
    return;
  }

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
  if (paymentFile.size > MAX_FILE_SIZE) {
    showError("Payment screenshot must be under 5 MB");
    playErrorFeedback();
    return;
  }

  disableSubmit();
  showLoader("Sending order…");

  const games = cart.map((item) => `${item.game} x ${item.qty}`).join(", ");

  const BOT_TOKEN = "8246672302:AAFHfb4h-MI23-p3OQDAiXvfq29PB_hB6Nw";
  const CHAT_ID = "5822439843";

  const orderId = "ORD-" + Date.now().toString().slice(-6);

  const caption = (
    "🛒 New Order\n\n" +
    "🆔 Order ID: " +
    orderId +
    "\n" +
    "👤 Name: " +
    name +
    "\n" +
    "🎮 Games: " +
    games +
    "\n" +
    "📧 Email: " +
    email
  ).slice(0, 1000);

  const data = new FormData();
  data.append("chat_id", CHAT_ID);
  data.append("photo", paymentFile);
  data.append("caption", caption);

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
      { method: "POST", body: data }
    );

    const result = await res.json();
    console.log(result);

    if (!result.ok) {
      throw new Error(result.description || "Telegram error");
    }

    document.getElementById("loaderText").innerHTML =
      "Order received!<div class='order-id'>ID: " + orderId + "</div>";

    playSuccessFeedback();

    setTimeout(() => {
      hideLoader();
      hideCartModal();
      form.reset();
      clearCart();
      enableSubmit();
    }, 3000);
  } catch (err) {
    console.error("Telegram error:", err);
    playErrorFeedback();
    showError(err.message || "Order failed");
  }
});
