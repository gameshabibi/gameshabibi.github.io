// Your payment UPI ID or wallet address (customize this)
const PAYMENT_ID = "prashantsingh896@ybl";

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
    paymentData
  )}`;

  qrContainer.innerHTML = `<img src="${qrCodeURL}" alt="Payment QR Code">`;
  payButton.innerHTML = `<a href="${paymentData}" class="btn">Pay Now</a>`;
}

//form
function showLoader(text = "Sending order…") {
  const overlay = document.getElementById("loaderOverlay");
  const icon = document.getElementById("loaderIcon");
  const label = document.getElementById("loaderText");
  if (!overlay || !icon || !label) return;

  // 🔄 RESET to spinner every time
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

  setTimeout(hideLoader, 2000);
}

function showError(message = "Order failed. Try again.") {
  const overlay = document.getElementById("loaderOverlay");
  const icon = document.getElementById("loaderIcon");
  const label = document.getElementById("loaderText");
  if (!overlay || !icon || !label) return;

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
  const overlay = document.getElementById("loaderOverlay");
  if (overlay) overlay.style.display = "none";
}

function completeSuccessfulOrder(form, orderId) {
  const loaderText = document.getElementById("loaderText");

  if (loaderText) {
    loaderText.innerHTML = `
      <strong>Order received!</strong><br>
      <div class="order-id">
        Order ID: <b>${orderId}</b>
      </div>
      <button id="copyOrderIdBtn" class="btn copy-order-btn" type="button">
        Copy Order ID
      </button>
    `;
  }

  window.setTimeout(() => {
    const copyBtn = document.getElementById("copyOrderIdBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(orderId);
        copyBtn.textContent = "Copied";
      });
    }
  }, 100);

  playSuccessFeedback();
  localStorage.setItem("lastOrderId", orderId);

  window.setTimeout(() => {
    hideLoader();
    hideCartModal();
    form.reset();
    clearCart();
    enableSubmit();
    window.location.reload();
  }, 3000);
}

function submitOrderWithIframeFallback(form, endpoint, chatId, caption, paymentInput) {
  return new Promise((resolve, reject) => {
    if (!(paymentInput instanceof HTMLInputElement)) {
      reject(new Error("Payment screenshot field is missing"));
      return;
    }

    const iframe = document.createElement("iframe");
    const frameName = `telegramUploadFrame-${Date.now()}`;
    const hiddenChatId = document.createElement("input");
    const hiddenCaption = document.createElement("input");
    const originalAction = form.getAttribute("action");
    const originalMethod = form.getAttribute("method");
    const originalTarget = form.getAttribute("target");
    const originalPaymentName = paymentInput.name;
    let settled = false;

    iframe.name = frameName;
    iframe.hidden = true;
    iframe.style.display = "none";

    hiddenChatId.type = "hidden";
    hiddenChatId.name = "chat_id";
    hiddenChatId.value = chatId;

    hiddenCaption.type = "hidden";
    hiddenCaption.name = "caption";
    hiddenCaption.value = caption;

    const cleanup = () => {
      paymentInput.name = originalPaymentName;
      if (originalAction === null) {
        form.removeAttribute("action");
      } else {
        form.setAttribute("action", originalAction);
      }

      if (originalMethod === null) {
        form.removeAttribute("method");
      } else {
        form.setAttribute("method", originalMethod);
      }

      if (originalTarget === null) {
        form.removeAttribute("target");
      } else {
        form.setAttribute("target", originalTarget);
      }

      hiddenChatId.remove();
      hiddenCaption.remove();
      iframe.remove();
    };

    const finish = (ok, errorMessage) => {
      if (settled) return;
      settled = true;
      cleanup();

      if (ok) {
        resolve();
      } else {
        reject(new Error(errorMessage || "Fallback order submission failed"));
      }
    };

    iframe.addEventListener(
      "load",
      () => {
        window.setTimeout(() => finish(true), 250);
      },
      { once: true }
    );

    document.body.appendChild(iframe);
    form.append(hiddenChatId, hiddenCaption);

    paymentInput.name = "photo";
    form.setAttribute("action", endpoint);
    form.setAttribute("method", "POST");
    form.setAttribute("target", frameName);

    window.setTimeout(() => finish(true), 2500);

    try {
      HTMLFormElement.prototype.submit.call(form);
    } catch (error) {
      finish(false, error.message);
    }
  });
}

const orderForm = document.getElementById("orderForm");

if (orderForm) {
  orderForm.addEventListener("submit", async (e) => {
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
    const paymentInput = form.querySelector('input[name="payment"]');

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
    showLoader("Sending order...");

    const games = cart.map((item) => `${item.game} x ${item.qty}`).join(", ");

    const BOT_TOKEN = "8246672302:AAFP8NvVADdAuJPQKGXtvhUP5d65Hl51a0U";
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
      completeSuccessfulOrder(form, orderId);
    } catch (err) {
      console.error("Telegram error:", err);

      const shouldUseFallback =
        err instanceof TypeError ||
        String(err?.message || "").toLowerCase().includes("failed to fetch");

      if (shouldUseFallback) {
        try {
          await submitOrderWithIframeFallback(
            form,
            `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
            CHAT_ID,
            caption,
            paymentInput
          );
          completeSuccessfulOrder(form, orderId);
          return;
        } catch (fallbackError) {
          console.error("Telegram fallback error:", fallbackError);
        }
      }

      playErrorFeedback();
      showError(err.message || "Order failed");
    }
  });
}

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
