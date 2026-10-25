"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { getSupportWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, orderId, message }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatusMsg({
        type: "success",
        text: "Thank you! Your message has been routed to our Telegram support team. We will get back to your email shortly.",
      });
      setName("");
      setEmail("");
      setOrderId("");
      setMessage("");
    } catch (err: unknown) {
      const text = err instanceof Error ? err.message : "Error sending message";
      setStatusMsg({ type: "error", text });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Header />
      <main className="container" style={{ padding: "3rem 0 5rem" }}>
        <div style={{ maxWidth: "42rem", margin: "0 auto" }}>
          <p className="eyebrow">Support & Help Desk</p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              margin: "0 0 0.8rem",
            }}
          >
            How can we help you today?
          </h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
            Whether you have questions about personal vs. shared Steam access, need help
            verifying an order, or want to request an unlisted game title, send us a
            message below.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              background: "rgba(37, 211, 102, 0.1)",
              border: "1px solid rgba(37, 211, 102, 0.3)",
              borderRadius: "var(--radius-md)",
              padding: "1.2rem 1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 0.25rem", fontSize: "1.1rem", color: "#f1f7ff" }}>
                ⚡ Prefer instant chat?
              </h3>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                Message us directly on WhatsApp (+91 9770493784) for real-time help.
              </p>
            </div>
            <a
              href={getSupportWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: "#25D366",
                color: "#04101c",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 0.4rem 1.2rem rgba(37, 211, 102, 0.3)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                whiteSpace: "nowrap",
                fontSize: "0.92rem",
                padding: "0.5rem 1.3rem",
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div
            style={{
              background: "var(--surface-panel)",
              border: "1px solid var(--border-soft)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              boxShadow: "var(--shadow-strong)",
            }}
          >
            {statusMsg && (
              <div
                style={{
                  padding: "0.85rem 1.2rem",
                  borderRadius: "var(--radius-sm)",
                  marginBottom: "1.5rem",
                  background:
                    statusMsg.type === "success"
                      ? "rgba(0, 255, 179, 0.12)"
                      : "rgba(255, 127, 147, 0.15)",
                  border: `1px solid ${
                    statusMsg.type === "success" ? "var(--mint)" : "var(--danger)"
                  }`,
                  color: statusMsg.type === "success" ? "var(--mint)" : "var(--danger)",
                  fontSize: "0.92rem",
                }}
              >
                {statusMsg.text}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.2rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ayush Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(25, 18, 48, 0.85)",
                    border: "1px solid var(--border-soft)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-primary)",
                    padding: "0.65rem 0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="ayush@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(25, 18, 48, 0.85)",
                    border: "1px solid var(--border-soft)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-primary)",
                    padding: "0.65rem 0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
                  Order ID (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. ORD-817264"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(25, 18, 48, 0.85)",
                    border: "1px solid var(--border-soft)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-primary)",
                    padding: "0.65rem 0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
                  Message / Issue Description
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your inquiry, requested game, or issue..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(25, 18, 48, 0.85)",
                    border: "1px solid var(--border-soft)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-primary)",
                    padding: "0.65rem 0.9rem",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="btn btn-block"
                style={{ minHeight: "3rem", fontSize: "1rem" }}
              >
                {isSending ? "Routing to Telegram Support..." : "Send Support Message"}
              </button>
            </form>
          </div>

          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href="/" style={{ color: "var(--accent)", textDecoration: "underline", fontSize: "0.95rem" }}>
              ← Return to Games Habibi Storefront
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
