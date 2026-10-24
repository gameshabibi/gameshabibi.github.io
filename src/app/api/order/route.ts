import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = (formData.get("name") as string) || "Customer";
    const email = (formData.get("email") as string) || "Not provided";
    const utr = (formData.get("utr") as string) || "Not provided";
    const coupon = (formData.get("coupon") as string) || "None";
    const games = (formData.get("games") as string) || "Not specified";
    const total = (formData.get("total") as string) || "0";
    const orderId =
      (formData.get("orderId") as string) ||
      "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const photo = formData.get("photo") as Blob | null;

    if (!photo) {
      return NextResponse.json(
        { ok: false, error: "Payment screenshot required" },
        { status: 400 }
      );
    }

    const botToken =
      process.env.TELEGRAM_BOT_TOKEN || "8959778893:AAH5aQu5Y1oV4SrmiCjljtqCqdv3kXWtG84";
    const chatId = process.env.TELEGRAM_CHAT_ID || "5822439843";

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const caption = [
      "🎮 <b>NEW GAMES HABIBI ORDER</b>",
      "",
      `🆔 <b>Order ID:</b> <code>${orderId}</code>`,
      `👤 <b>Customer:</b> ${name}`,
      `📧 <b>Email:</b> ${email}`,
      `💰 <b>Total Paid:</b> ₹${total}`,
      coupon && coupon !== "None" ? `🏷️ <b>Coupon Applied:</b> <code>${coupon}</code>` : null,
      `🔢 <b>UPI UTR / Ref:</b> <code>${utr}</code>`,
      `📦 <b>Purchased Items:</b>`,
      `${games}`,
      "",
      `⏰ <i>Submitted at: ${timestamp}</i>`,
    ]
      .filter(Boolean)
      .join("\n")
      .slice(0, 1024);

    const telegramFormData = new FormData();
    telegramFormData.append("chat_id", chatId);
    telegramFormData.append("photo", photo, "payment.jpg");
    telegramFormData.append("caption", caption);
    telegramFormData.append("parse_mode", "HTML");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendPhoto`,
      {
        method: "POST",
        body: telegramFormData,
      }
    );

    const tgData = await tgRes.json();

    if (!tgData.ok) {
      console.error("Telegram API Error:", tgData);
      return NextResponse.json(
        {
          ok: false,
          error: tgData.description || "Failed to notify Telegram bot",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      orderId,
      message: "Order placed and verified successfully",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("Order Route Error:", err);
    return NextResponse.json(
      { ok: false, error: message },
      { status: 500 }
    );
  }
}
