import { NextRequest, NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  entry.count += 1;
  return entry.count > 6;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many messages sent. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, orderId, message, website } = body;

    // Honeypot check against automated bots
    if (website) {
      return NextResponse.json({
        ok: true,
        message: "Your message has been sent to support.",
      });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in environment variables.");
      return NextResponse.json(
        { ok: false, error: "Support notification system is currently unavailable. Please reach out directly." },
        { status: 500 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const text = [
      "💬 <b>NEW SUPPORT INQUIRY (Games Habibi)</b>",
      "",
      `👤 <b>Name:</b> ${escapeHtml(String(name).slice(0, 120))}`,
      `📧 <b>Email:</b> ${escapeHtml(String(email).slice(0, 160))}`,
      `🆔 <b>Order ID:</b> <code>${escapeHtml(String(orderId || "Not specified").slice(0, 60))}</code>`,
      "",
      `📝 <b>Message:</b>`,
      `${escapeHtml(String(message).slice(0, 2500))}`,
      "",
      `⏰ <i>Received at: ${escapeHtml(timestamp)}</i>`,
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
