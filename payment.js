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

  icon.className = "loader-icon loader-error";
  icon.innerHTML = "✖";
  label.textContent = message;

  setTimeout(hideLoader, 2500);
}

function hideLoader() {
  document.getElementById("loaderOverlay").style.display = "none";
}

document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const games = form.games.value;
  if (!games || games.trim().length === 0) {
    alert("❌ Cart is empty. Please add games before submitting.");
    return;
  }

  const email = form.email.value;
  const paymentFile = form.payment.files[0];

  if (!paymentFile) {
    alert("❌ Upload payment screenshot");
    return;
  }

  const BOT_TOKEN = "8246672302:AAFTjkRfjUbJf8J2eEHvmj03Ep3854lPJI8";
  const CHAT_ID = "5822439843";

  const caption = (
    "🛒 New Order Received\n\n" +
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

  showLoader();

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
      { method: "POST", body: data }
    );

    const result = await res.json();

    // console.log(result);

    if (!result.ok) throw result;
    showSuccess("Order received!");
    form.reset();
    clearCart();
  } catch (err) {
    showError("Order failed. Please retry.");
  }
});
