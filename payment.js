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

document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const games = form.games.value;
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

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
      { method: "POST", body: data }
    );

    const result = await res.json();

    console.log(result);

    if (!result.ok) throw result;

    alert("✅ Order Recieved");
    form.reset();
    clearCart();
  } catch (err) {
    alert("❌ Failed to send order");
  }
});
