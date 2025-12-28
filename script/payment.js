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
  const overlay = document.getElementById("loaderOverlay");
  const icon = document.getElementById("loaderIcon");
  const label = document.getElementById("loaderText");

  overlay.style.display = "flex"; // ✅ MAKE IT VISIBLE

  icon.className = "loader-icon loader-error";
  icon.innerHTML = "✖";
  label.textContent = message;

  enableSubmit(); // keep button alive

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
    playErrorFeedback();
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
    playErrorFeedback();
    showError("Payment screenshot must be under 5 MB");
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

    document.getElementById("loaderText").innerHTML = `
  <strong>Order received!</strong><br>
  <div class="order-id">
    Order ID: <b>${orderId}</b>
  </div>
  <button id="copyOrderIdBtn" class="btn" style="margin-top:10px;">
    Copy Order ID
  </button>
`;

    setTimeout(() => {
      const copyBtn = document.getElementById("copyOrderIdBtn");
      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(orderId);
          copyBtn.textContent = "Copied ✔";
        });
      }
    }, 100);

    playSuccessFeedback();

    localStorage.setItem("lastOrderId", orderId);

    setTimeout(() => {
      hideLoader();
      hideCartModal();
      form.reset();
      clearCart();
      enableSubmit();
      window.location.reload();
    }, 3000);
  } catch (err) {
    console.error("Telegram error:", err);
    playErrorFeedback();
    showError(err.message || "Order failed");
  }
});

// OPTIONAL: validate image size immediately on file select
const paymentInput = document.querySelector('input[name="payment"]');

if (paymentInput) {
  paymentInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

    if (file.size > MAX_FILE_SIZE) {
      playErrorFeedback();
      showError("Selected image is larger than 5 MB");
      e.target.value = ""; // reset file input
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lastOrder = localStorage.getItem("lastOrderId");
  if (lastOrder) {
    console.log("Last Order ID:", lastOrder);
  }
});
