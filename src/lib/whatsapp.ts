export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918966010035";

export interface WhatsAppOrderDetails {
  orderId: string;
  games?: string;
  total?: number | string;
  utr?: string;
  customerName?: string;
}

/**
 * Builds a direct wa.me link with pre-filled message for an order
 */
export function getOrderWhatsAppUrl(details: WhatsAppOrderDetails): string {
  const lines = [
    "👋 *Hi Games Habibi Team!*",
    "",
    "I just placed an order on gameshabibi.vercel.app and completed payment:",
    `🆔 *Order ID:* ${details.orderId}`,
    details.customerName ? `👤 *Name:* ${details.customerName}` : null,
    details.games ? `📦 *Items:* ${details.games}` : null,
    details.total !== undefined ? `💰 *Total Paid:* ₹${details.total}` : null,
    details.utr && details.utr !== "Not provided"
      ? `🔢 *UPI UTR / Ref:* ${details.utr}`
      : null,
    "",
    "Please verify and dispatch my digital credentials / account access. Thank you! 🎮",
  ].filter(Boolean);

  const text = lines.join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds a generic pre-sale inquiry WhatsApp link
 */
export function getSupportWhatsAppUrl(initialTopic?: string): string {
  const text = initialTopic
    ? `👋 Hi Games Habibi Team! I have a question regarding: ${initialTopic}`
    : "👋 Hi Games Habibi Team! I have a question about your games & subscriptions.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
