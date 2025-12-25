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

  const name = e.target.name.value;
  const email = e.target.email.value;
  const games = e.target.games.value;

  const message = `🎮 New Order
👤 Name: ${name}
📧 Email: ${email}
🕹️ Games: ${games}`;

  await fetch(
    "https://api.telegram.org/bot8246672302:AAG8ClWyKHeDi-_VxsIBpowYfzxCTNYt-e0/sendMessage",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "5822439843",
        text: message,
      }),
    }
  );

  alert("Order sent!");
  e.target.reset();
});
