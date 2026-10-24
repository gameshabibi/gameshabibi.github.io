import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, orderId, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const botToken =
      process.env.TELEGRAM_BOT_TOKEN || "8959778893:AAH5aQu5Y1oV4SrmiCjljtqCqdv3kXWtG84";
    const chatId = process.env.TELEGRAM_CHAT_ID || "5822439843";

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const text = [
      "💬 <b>NEW SUPPORT INQUIRY (Games Habibi)</b>",
      "",
      `👤 <b>Name:</b> ${name}`,
      `📧 <b>Email:</b> ${email}`,
      `🆔 <b>Order ID:</b> ${orderId || "Not specified"}`,
      "",
      `📝 <b>Message:</b>`,
      `${message}`,
      "",
      `⏰ <i>Received at: ${timestamp}</i>`,
    ].join("\n");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    const tgData = await tgRes.json();
    if (!tgData.ok) {
      return NextResponse.json(
        { ok: false, error: tgData.description || "Failed to notify support." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Your message has been sent to support. We will get back to you shortly!",
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ ok: false, error: errorMsg }, { status: 500 });
  }
}
