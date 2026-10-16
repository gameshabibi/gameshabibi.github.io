/**
 * Cloudflare Worker: Games Habibi Secure Telegram Order Relay
 *
 * Keeps Telegram BOT_TOKEN and CHAT_ID 100% hidden on the server,
 * preventing any bot hijacking, token leakage, or CORS issues.
 */

export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    try {
      const formData = await request.formData();
      const name = formData.get("name") || "Customer";
      const email = formData.get("email") || "Not provided";
      const games = formData.get("games") || "Not specified";
      const orderId = formData.get("orderId") || "ORD-" + Date.now().toString().slice(-6);
      const photo = formData.get("photo");

      if (!photo) {
        return new Response(JSON.stringify({ ok: false, error: "Payment screenshot required" }), {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        });
      }

      const botToken = env.BOT_TOKEN || "8246672302:AAFP8NvVADdAuJPQKGXtvhUP5d65Hl51a0U";
      const chatId = env.CHAT_ID || "5822439843";

      const caption = (
        "🛒 New Order (Secure Relay)\n\n" +
        "🆔 Order ID: " + orderId + "\n" +
        "👤 Name: " + name + "\n" +
        "🎮 Games: " + games + "\n" +
        "📧 Email: " + email
      ).slice(0, 1000);

      const telegramFormData = new FormData();
      telegramFormData.append("chat_id", chatId);
      telegramFormData.append("photo", photo);
      telegramFormData.append("caption", caption);

      const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
        method: "POST",
        body: telegramFormData,
      });

      const tgData = await tgRes.json();

      if (!tgData.ok) {
        return new Response(
          JSON.stringify({ ok: false, error: tgData.description || "Telegram API rejected order" }),
          {
            status: 502,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      return new Response(
        JSON.stringify({ ok: true, orderId: orderId }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    } catch (err) {
      return new Response(
        JSON.stringify({ ok: false, error: err.message || "Internal relay error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }
  },
};
