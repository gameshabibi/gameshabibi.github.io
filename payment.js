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
  const formData = new FormData();

  formData.append("name", form.name.value);
  formData.append("games", form.games.value);
  formData.append("email", form.email.value);
  formData.append("payment", form.payment.files[0]);

  const response = await fetch(
    "https://app.nocodb.com/api/v1/db/data/v1/Game_Store/Game_requests",
    {
      method: "POST",
      headers: {
        "xc-token": "STbdGsKyVZoYnHWlebxKFPYmW5y_bsugcYTitqjv",
      },
      body: formData,
    }
  );

  if (response.ok) {
    alert("Order submitted successfully!");
    form.reset();
  } else {
    alert("Submission failed");
  }
});
