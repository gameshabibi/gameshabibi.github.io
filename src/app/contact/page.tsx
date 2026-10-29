"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { getSupportWhatsAppUrl } from "@/lib/whatsapp";
import { RequestGameModal } from "@/components/RequestGameModal";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, orderId, message, website }),
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
          <p className="eyebrow">Support &amp; Help Desk</p>
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
              background: "var(--card)",
              border: "1px solid var(--ink)",
              padding: "1.2rem 1.5rem",
              marginBottom: "1.2rem",
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 0.25rem", fontSize: "1.05rem", color: "var(--ink)" }}>
                ⚡ Prefer instant chat?
              </h3>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                Message us directly on WhatsApp (+91 9770493784) for real-time help.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              <a
                href={getSupportWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp sm"
              >
                💬 Chat on WhatsApp
              </a>
              <button
                type="button"
                className="btn btn-secondary sm"
                onClick={() => setIsRequestOpen(true)}
              >
                🎯 Request Game
              </button>
            </div>
          </div>

          <div
            style={{
              background: "var(--surface-panel)",
              border: "1px solid var(--ink)",
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            {statusMsg && (
              <div
                style={{
                  padding: "0.85rem 1.2rem",
                  marginBottom: "1.5rem",
                  background: "var(--paper)",
                  borderLeft: `3px solid ${
                    statusMsg.type === "success" ? "var(--mint)" : "var(--danger)"
                  }`,
                  color: statusMsg.type === "success" ? "var(--mint)" : "var(--danger)",
                  fontSize: "0.92rem",
                }}
              >
                {statusMsg.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="order-form" style={{ maxWidth: "100%" }}>
              <div className="sr" aria-hidden="true">
                <label htmlFor="contactWebsite">Website</label>
                <input
                  id="contactWebsite"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactName">Your Name</label>
                <input
                  id="contactName"
                  type="text"
                  required
                  placeholder="e.g. Ayush Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">Your Email</label>
                <input
                  id="contactEmail"
                  type="email"
                  required
                  placeholder="ayush@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactOrderId">Order ID (Optional)</label>
                <input
                  id="contactOrderId"
                  type="text"
                  placeholder="e.g. GH-817264"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">Message / Issue Description</label>
                <textarea
                  id="contactMessage"
                  required
                  rows={4}
                  placeholder="Describe your inquiry, requested game, or issue..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="btn red btn-block"
              >
                {isSending ? "Routing to Telegram Support..." : "Send Support Message →"}
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

      <RequestGameModal
        isOpen={isRequestOpen}
        onClose={() => setIsRequestOpen(false)}
      />
    </>
  );
}
