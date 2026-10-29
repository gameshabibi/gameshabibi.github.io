import { NextRequest, NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Simple in-memory rate limit (per serverless instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQ_PER_WINDOW = 8;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQ_PER_WINDOW;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Too many order attempts. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const formData = await req.formData();
    const name =
      (formData.get("name") as string) ||
      (formData.get("customerName") as string) ||
      "Customer";
    const email =
      (formData.get("email") as string) ||
      (formData.get("customerEmail") as string) ||
      "Not provided";
    const phone =
      (formData.get("phone") as string) ||
      (formData.get("customerPhone") as string) ||
      "";
    const utr =
      (formData.get("utr") as string) ||
      (formData.get("customerUtr") as string) ||
      "Not provided";
    const coupon = (formData.get("coupon") as string) || "None";
    const games =
      (formData.get("games") as string) ||
      (formData.get("items") as string) ||
      "Not specified";
    const total = (formData.get("total") as string) || "0";
    const tip = (formData.get("tip") as string) || "0";
    const orderId =
      (formData.get("orderId") as string) ||
      "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const photo =
      (formData.get("photo") as Blob | null) ||
      (formData.get("paymentProof") as Blob | null);

    if (!photo || !(photo instanceof Blob) || photo.size === 0) {
      return NextResponse.json(
        { ok: false, error: "Payment screenshot is required." },
        { status: 400 }
      );
    }

    // 5 MB maximum size limit
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (photo.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { ok: false, error: "Payment screenshot must be smaller than 5 MB." },
        { status: 400 }
      );
    }

    // Strict image MIME validation
    if (photo.type && !photo.type.startsWith("image/")) {
      return NextResponse.json(
        { ok: false, error: "Only image files (JPG, PNG, WEBP) are accepted." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID in environment variables.");
      return NextResponse.json(
        {
          ok: false,
          error: "Store order notification system is unconfigured. Please contact support.",
        },
        { status: 500 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const caption = [
      "🎮 <b>NEW GAMES HABIBI ORDER</b>",
      "",
      `🆔 <b>Order ID:</b> <code>${escapeHtml(orderId)}</code>`,
      `👤 <b>Customer:</b> ${escapeHtml(name)}`,
      `📧 <b>Email:</b> ${escapeHtml(email)}`,
      phone ? `📱 <b>WhatsApp / Phone:</b> <code>${escapeHtml(phone)}</code>` : null,
      `💰 <b>Total Paid:</b> ₹${escapeHtml(total)}`,
      Number(tip) > 0 ? `💝 <b>Tip Included:</b> ₹${escapeHtml(tip)}` : null,
      coupon && coupon !== "None"
        ? `🏷️ <b>Coupon Applied:</b> <code>${escapeHtml(coupon)}</code>`
        : null,
      `🔢 <b>UPI UTR / Ref:</b> <code>${escapeHtml(utr || "Not provided")}</code>`,
      `📦 <b>Purchased Items:</b>`,
      `${escapeHtml(games)}`,
      "",
      `⏰ <i>Submitted at: ${escapeHtml(timestamp)}</i>`,
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
      success: true,
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
