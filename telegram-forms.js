// ============================================
// TELEGRAM BOT CONFIGURATION FOR ALL FORMS
// ============================================
// Replace these with your own bot credentials
const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"; // Get from @BotFather
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID_HERE"; // Your Telegram chat ID

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
    
    if (!data.ok) {
      console.error("Telegram API Error:", data);
    }
    
    return data.ok;
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return false;
  }
}

// ============================================
// CONTACT FORM HANDLER
// ============================================

/**
 * Handle contact form submissions
 * @param {Event} e - Form submit event
 */
async function handleContactForm(e) {
  e.preventDefault();

  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject") || "General Inquiry";
    const message = formData.get("message");

    const telegramMessage = `📧 <b>NEW CONTACT FORM SUBMISSION</b> 📧

👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
📋 <b>Subject:</b> ${subject}

💬 <b>Message:</b>
${message}

📅 <b>Submitted:</b> ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })}`;

    const sent = await sendToTelegram(telegramMessage);

    if (sent) {
      alert("✅ Message sent successfully! We'll get back to you soon.");
      e.target.reset();
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    console.error("Error:", error);
    alert(
      "❌ Error sending message. Please try again or email us directly at mr.bgmi9098@gmail.com"
    );
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}

// ============================================
// REFUND/CANCELLATION FORM HANDLER
// ============================================

/**
 * Handle refund/cancellation form submissions
 * @param {Event} e - Form submit event
 */
async function handleRefundForm(e) {
  e.preventDefault();

  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Submitting...";
  submitBtn.disabled = true;

  try {
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const orderId = formData.get("orderId");
    const reason = formData.get("reason");
    const details = formData.get("details");

    const telegramMessage = `⚠️ <b>REFUND/CANCELLATION REQUEST</b> ⚠️

👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
🆔 <b>Order ID:</b> ${orderId}
📋 <b>Reason:</b> ${reason}

📝 <b>Details:</b>
${details}

📅 <b>Requested:</b> ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })}

⏰ <b>Action Required:</b> Process within 7 days`;

    const sent = await sendToTelegram(telegramMessage);

    if (sent) {
      alert(
        "✅ Refund request submitted successfully! We'll review it within 7 business days."
      );
      e.target.reset();
    } else {
      throw new Error("Failed to send request");
    }
  } catch (error) {
    console.error("Error:", error);
    alert(
      "❌ Error submitting request. Please try again or email us at mr.bgmi9098@gmail.com"
    );
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}

// ============================================
// SUPPORT TICKET FORM HANDLER
// ============================================

/**
 * Handle support ticket form submissions
 * @param {Event} e - Form submit event
 */
async function handleSupportForm(e) {
  e.preventDefault();

  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const orderId = formData.get("orderId") || "N/A";
    const issueType = formData.get("issueType");
    const description = formData.get("description");

    const telegramMessage = `🎫 <b>NEW SUPPORT TICKET</b> 🎫

👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
🆔 <b>Order ID:</b> ${orderId}
🔧 <b>Issue Type:</b> ${issueType}

📝 <b>Description:</b>
${description}

📅 <b>Created:</b> ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })}

⏰ <b>Response Time:</b> Within 5 business days`;

    const sent = await sendToTelegram(telegramMessage);

    if (sent) {
      alert(
        "✅ Support ticket created successfully! We'll respond within 5 business days."
      );
      e.target.reset();
    } else {
      throw new Error("Failed to create ticket");
    }
  } catch (error) {
    console.error("Error:", error);
    alert(
      "❌ Error creating ticket. Please try again or contact us via Instagram @games_habibi"
    );
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}

// ============================================
// INITIALIZE FORM HANDLERS
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // Contact Form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactForm);
  }

  // Refund Form
  const refundForm = document.getElementById("refundForm");
  if (refundForm) {
    refundForm.addEventListener("submit", handleRefundForm);
  }

  // Support Form
  const supportForm = document.getElementById("supportForm");
  if (supportForm) {
    supportForm.addEventListener("submit", handleSupportForm);
  }

  console.log("✅ Telegram form handlers initialized");
});
