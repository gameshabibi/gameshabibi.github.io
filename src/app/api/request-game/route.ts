import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { gameTitle, platform, contact, budget, notes } = body;

    if (!gameTitle || !contact) {
      return NextResponse.json(
        { ok: false, error: "Please provide the game title and your contact info." },
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
      "🎯 <b>NEW UNLISTED GAME REQUEST</b>",
      "",
      `🎮 <b>Requested Title:</b> <code>${gameTitle}</code>`,
      `💻 <b>Preferred Platform:</b> ${platform || "Steam / PC"}`,
      `📱 <b>Customer Contact:</b> <code>${contact}</code>`,
      `💰 <b>Expected Budget:</b> ${budget ? `₹${budget}` : "Standard"}`,
      notes ? `📝 <b>Notes:</b> ${notes}` : null,
      "",
      `⏰ <i>Submitted at: ${timestamp}</i>`,
    ]
      .filter(Boolean)
      .join("\n");

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
      message: "Game request submitted! We will check availability and message you shortly.",
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ ok: false, error: errorMsg }, { status: 500 });
  }
}
