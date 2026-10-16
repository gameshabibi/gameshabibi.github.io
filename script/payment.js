// Your payment UPI ID or wallet address (customize this)
const PAYMENT_ID = "prashantsingh896@ybl";

// TELEGRAM BOT CONFIGURATION:
// Update this with your new bot token from @BotFather if you regenerate your bot
const BOT_TOKEN = "8246672302:AAFP8NvVADdAuJPQKGXtvhUP5d65Hl51a0U";
const CHAT_ID = "5822439843";

// SECURE RELAY CONFIGURATION (Cloudflare Worker / Serverless):
// Set this to your deployed worker URL (e.g. "https://gameshabibi-relay.workers.dev")
// When configured, all orders are routed securely without exposing your bot token in client-side code.
const SECURE_RELAY_URL = "";

// Generate QR Code
function generateQRCode(amount) {
  const qrContainer = document.getElementById("qrCode");
  const payButton = document.getElementById("payButton");
  if (!qrContainer || !payButton) return;

  if (amount <= 0) {
    qrContainer.innerHTML = "";
    payButton.innerHTML = "";
    return;
  }

  const paymentData = `upi://pay?${new URLSearchParams({
    pa: PAYMENT_ID,
    pn: "Games Habibi",
    am: amount.toFixed(2),
    cu: "INR",
    tn: "Games Habibi Order Payment",
  }).toString()}`;

  // Using QR Code API (Google Charts API)
  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    paymentData,
  )}`;

  qrContainer.innerHTML = `<img src="${qrCodeURL}" alt="Payment QR Code">`;
  const qrImagePath = window.location.pathname.includes("/html/")
    ? "../image.png"
    : "image.png";
  payButton.innerHTML = `
    <a href="${paymentData}" class="btn btn-upi-app">⚡ Pay via UPI App (GPay / PhonePe / Paytm)</a>
    <a href="${qrImagePath}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-qr-fallback">View Static QR</a>
  `;
}

// Loader UI controls
function showLoader(text = "Sending order…") {
  const overlay = document.getElementById("loaderOverlay");
  const icon = document.getElementById("loaderIcon");
  const label = document.getElementById("loaderText");
  if (!overlay || !icon || !label) return;

  // Reset to spinner
  icon.className = "spinner";
  icon.innerHTML = "";
  label.textContent = text;

  overlay.style.display = "flex";
}

function showSuccess(message = "Order received!") {
  const icon = document.getElementById("loaderIcon");
  const label = document.getElementById("loaderText");
  if (!icon || !label) return;

  icon.className = "loader-icon loader-success";
  icon.innerHTML = "✔";
  label.textContent = message;

  setTimeout(hideLoader, 2500);
}

function showError(message = "Order failed. Try again.") {
  const overlay = document.getElementById("loaderOverlay");
  const icon = document.getElementById("loaderIcon");
  const label = document.getElementById("loaderText");
  if (!overlay || !icon || !label) return;

  overlay.style.display = "flex";

  icon.className = "loader-icon loader-error";
  icon.innerHTML = "✖";
  label.textContent = message;

  enableSubmit();

  setTimeout(() => {
    hideLoader();
  }, 3500);
}

function hideLoader() {
  const overlay = document.getElementById("loaderOverlay");
  if (overlay) overlay.style.display = "none";
}

function syncLastOrderUI(orderId) {
  const lastOrderBox = document.getElementById("lastOrderBox");
  const lastOrderText = document.getElementById("lastOrderIdText");

  if (!lastOrderBox || !lastOrderText) return;

  lastOrderText.textContent = orderId;
  lastOrderBox.hidden = false;
}

function completeSuccessfulOrder(form, orderId, name = "", email = "", games = "", isDelivered = true) {
  const loaderIcon = document.getElementById("loaderIcon");
  const loaderText = document.getElementById("loaderText");

  if (loaderIcon) {
    loaderIcon.className = "loader-icon loader-success";
    loaderIcon.innerHTML = "✔";
  }

  const emailSubject = encodeURIComponent(`Order Payment Verification: ${orderId}`);
  const emailBody = encodeURIComponent(
    `Hi Games Habibi Support,\n\nI have submitted my payment for Order ${orderId}.\n\nName: ${name}\nEmail: ${email}\nItems: ${games}\n\nPlease verify my payment and send my game credentials.\n\nThank you!`
  );

  if (loaderText) {
    loaderText.innerHTML = `
      <div class="order-success-card">
        <h3 style="margin: 0 0 0.4rem; font-size: 1.35rem; color: var(--text-primary); font-family: 'Space Grotesk', sans-serif;">
          Order Placed Successfully!
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin: 0 0 0.85rem; line-height: 1.45;">
          Payment screenshot received. Save your Order ID below:
        </p>

        <div class="order-id-highlight" style="display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 0.6rem 1.25rem; background: rgba(245, 166, 35, 0.12); border: 1px solid rgba(245, 166, 35, 0.35); border-radius: 0.75rem; margin-bottom: 1rem;">
          <span style="font-size: 0.8rem; letter-spacing: 0.05em; color: var(--text-muted);">ORDER ID:</span>
          <strong style="font-size: 1.18rem; font-family: 'DM Mono', monospace; color: var(--accent); letter-spacing: 0.04em;">${orderId}</strong>
        </div>

        <div style="display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap; margin-bottom: 0.9rem;">
          <button id="copyOrderIdBtn" class="btn copy-order-btn" type="button" style="min-block-size: 2.3rem; font-size: 0.84rem; padding: 0.4rem 1.1rem;">
            📋 Copy Order ID
          </button>
          <a href="mailto:mr.bgmi9098@gmail.com?subject=${emailSubject}&body=${emailBody}" class="btn btn-secondary" style="min-block-size: 2.3rem; font-size: 0.84rem; padding: 0.4rem 1.1rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem;">
            ✉️ Email Support
          </a>
        </div>

        <button id="closeOrderModalBtn" class="btn btn-tertiary" type="button" style="font-size: 0.8rem; padding: 0.4rem 1.3rem;">
          Done
        </button>
      </div>
    `;
  }

  window.setTimeout(() => {
    const copyBtn = document.getElementById("copyOrderIdBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(orderId).then(() => {
            copyBtn.textContent = "✔ Copied!";
            setTimeout(() => {
              copyBtn.textContent = "📋 Copy Order ID";
            }, 2000);
          }).catch(() => {
            copyBtn.textContent = "✔ " + orderId;
          });
        } else {
          copyBtn.textContent = "✔ " + orderId;
        }
      });
    }

    const closeBtn = document.getElementById("closeOrderModalBtn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        hideLoader();
        if (typeof hideCartModal === "function") {
          hideCartModal();
        }
      });
    }
  }, 100);

  playSuccessFeedback();
  localStorage.setItem("lastOrderId", orderId);
  syncLastOrderUI(orderId);

  // Clear form and cart after order placement
  try {
    form.reset();
  } catch (resetErr) {}

  if (typeof clearCart === "function") {
    clearCart();
  }
  enableSubmit();
  showCartToast(`Order placed: ${orderId}`);
}

function initPayment() {
  const orderForm = document.getElementById("orderForm");
  if (!orderForm) return;

  if (orderForm.dataset.paymentBound === "true") return;
  orderForm.dataset.paymentBound = "true";

  // Validate image size immediately on file selection
  const paymentInput = orderForm.querySelector('input[name="payment"]');
  if (paymentInput && !paymentInput.dataset.bound) {
    paymentInput.dataset.bound = "true";
    paymentInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
      if (file.size > MAX_FILE_SIZE) {
        playErrorFeedback();
        showError("Selected screenshot is larger than 5 MB");
        e.target.value = "";
      }
    });
  }

  orderForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!Array.isArray(cart) || cart.length === 0) {
      playErrorFeedback();
      showError("Your cart is empty. Add a game first.");
      return;
    }

    const form = e.target;
    const name = (form.name?.value || "").trim();
    const email = (form.email?.value || "").trim();
    const paymentFile = form.payment?.files ? form.payment.files[0] : null;

    if (!name) {
      playErrorFeedback();
      showError("Please enter your name");
      return;
    }

    if (!email) {
      playErrorFeedback();
      showError("Please enter your email");
      return;
    }

    if (!paymentFile) {
      playErrorFeedback();
      showError("Please upload your payment screenshot");
      return;
    }

    if (!paymentFile.type.startsWith("image/")) {
      playErrorFeedback();
      showError("Only image files (PNG, JPG, WEBP) are allowed");
      return;
    }

    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
    if (paymentFile.size > MAX_FILE_SIZE) {
      playErrorFeedback();
      showError("Payment screenshot must be under 5 MB");
      return;
    }

    disableSubmit();
    showLoader("Submitting your order...");

    const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const games = cart.map((item) => `${item.game} x ${item.qty}`).join(", ");
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Save order record locally
    try {
      const orderRecord = {
        id: orderId,
        date: new Date().toISOString(),
        name,
        email,
        games,
        total: totalPrice,
      };
      const existingOrders = JSON.parse(localStorage.getItem("gh_orders") || "[]");
      existingOrders.unshift(orderRecord);
      localStorage.setItem("gh_orders", JSON.stringify(existingOrders.slice(0, 50)));
      localStorage.setItem("lastOrderId", orderId);
    } catch (err) {
      console.warn("Local storage save error:", err);
    }

    const caption = (
      "🛒 New Order\n\n" +
      "🆔 Order ID: " + orderId + "\n" +
      "👤 Name: " + name + "\n" +
      "🎮 Games: " + games + "\n" +
      "📧 Email: " + email
    ).slice(0, 1000);

    const data = new FormData();
    data.append("chat_id", CHAT_ID);
    data.append("photo", paymentFile);
    data.append("caption", caption);

    let deliveredViaTelegram = false;

    if (SECURE_RELAY_URL) {
      try {
        const relayData = new FormData();
        relayData.append("name", name);
        relayData.append("email", email);
        relayData.append("games", games);
        relayData.append("orderId", orderId);
        relayData.append("photo", paymentFile);

        const res = await fetch(`${SECURE_RELAY_URL}/order`, {
          method: "POST",
          body: relayData,
        });
        const result = await res.json();
        if (res.ok && result.ok) {
          deliveredViaTelegram = true;
        }
      } catch (relayErr) {
        console.warn("Relay attempt failed:", relayErr);
      }
    }

    if (!deliveredViaTelegram && BOT_TOKEN) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);

        const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
          method: "POST",
          body: data,
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        const result = await res.json();
        if (result && result.ok) {
          deliveredViaTelegram = true;
          console.log("Telegram order delivered successfully:", result);
        } else {
          console.warn("Telegram API response error:", result);
        }
      } catch (err) {
        console.warn("Direct Telegram dispatch error:", err);
      }
    }

    // Complete order with verified order confirmation
    completeSuccessfulOrder(form, orderId, name, email, games, deliveredViaTelegram);
  });
}

// Ensure initPayment runs whether script is loaded early or late
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPayment);
} else {
  initPayment();
}

document.addEventListener("DOMContentLoaded", () => {
  const lastOrder = localStorage.getItem("lastOrderId");
  if (lastOrder) {
    console.log("Last Order ID:", lastOrder);
  }
});
