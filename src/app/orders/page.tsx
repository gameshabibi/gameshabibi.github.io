"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { useCart } from "@/context/CartContext";
import { MobileBottomNav } from "@/components/MobileBottomNav";

export default function OrdersPage() {
  const { pastOrders } = useCart();
  const [searchId, setSearchId] = useState("");

  const filteredOrders = searchId.trim()
    ? pastOrders.filter((o) =>
        o.id.toLowerCase().includes(searchId.toLowerCase().trim())
      )
    : pastOrders;

  return (
    <>
      <Header />
      <main style={{ padding: "3rem 0 5rem" }}>
        <div className="container" style={{ maxWidth: "56rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <p className="eyebrow">Customer Dashboard</p>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                margin: "0 0 0.8rem",
              }}
            >
              Track Orders & Purchase History
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", margin: 0 }}>
              Review past digital purchases, copy your Order IDs, or request fulfillment follow-up with our support team.
            </p>
          </div>

          {/* Search by Order ID */}
          <div
            style={{
              background: "var(--surface-panel)",
              border: "1px solid var(--border-soft)",
              borderRadius: "var(--radius-md)",
              padding: "1.2rem",
              marginBottom: "2rem",
              display: "flex",
              gap: "0.8rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <input
              type="text"
              placeholder="Search by Order ID (e.g. ORD-123456)..."
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              style={{
                flex: 1,
                minWidth: "220px",
                background: "rgba(25, 18, 48, 0.85)",
                border: "1px solid var(--border-soft)",
                borderRadius: "var(--radius-sm)",
                color: "var(--text-primary)",
                padding: "0.65rem 1rem",
                outline: "none",
                fontFamily: "var(--font-data)",
              }}
            />
            {searchId && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setSearchId("")}
                style={{ minHeight: "2.8rem" }}
              >
                Clear
              </button>
            )}
          </div>

          {filteredOrders.length === 0 ? (
            <div
              style={{
                background: "var(--surface-panel)",
                border: "1px solid var(--border-soft)",
                borderRadius: "var(--radius-lg)",
                padding: "4rem 2rem",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                {pastOrders.length === 0
                  ? "No orders found on this browser yet."
                  : `No orders matching "${searchId}".`}
              </p>
              <Link href="/catalog" className="btn">
                Browse Game Catalog
              </Link>
            </div>
          ) : (
            <div style={{ display: "grid", gap: "1.2rem" }}>
              {filteredOrders.map((ord) => {
                const formattedDate = new Date(ord.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                });

                const emailSubject = encodeURIComponent(`Order Status Inquiry: ${ord.id}`);
                const emailBody = encodeURIComponent(
                  `Hi Games Habibi Support,\n\nI am following up on my order ${ord.id}.\nItems: ${ord.games}\nTotal: ₹${ord.total}\nUTR: ${ord.utr || "N/A"}\n\nPlease check my fulfillment status.\n\nThank you!`
                );

                return (
                  <article
                    key={ord.id}
                    style={{
                      background: "var(--surface-panel)",
                      border: "1px solid var(--border-soft)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.5rem",
                      display: "grid",
                      gap: "0.6rem",
                      boxShadow: "var(--shadow-soft)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <span style={{ fontFamily: "var(--font-data)", color: "var(--accent)", fontSize: "1.25rem", fontWeight: 700 }}>
                          {ord.id}
                        </span>
                        <span style={{ fontSize: "0.78rem", background: "rgba(0, 255, 179, 0.12)", color: "var(--mint)", padding: "0.15rem 0.6rem", borderRadius: "var(--radius-full)", fontWeight: 600 }}>
                          Submitted
                        </span>
                      </div>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                        {formattedDate}
                      </span>
                    </div>

                    <p style={{ margin: "0.3rem 0", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
                      <strong style={{ color: "var(--text-primary)" }}>Items: </strong>
                      {ord.games}
                    </p>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.8rem", paddingTop: "0.8rem", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                      <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.88rem" }}>
                        <span>
                          <strong>Total: </strong>
                          <span style={{ color: "var(--accent)", fontFamily: "var(--font-data)", fontWeight: 700 }}>
                            ₹{ord.total}
                          </span>
                        </span>
                        {ord.utr && ord.utr !== "Not provided" && (
                          <span style={{ color: "var(--text-muted)" }}>
                            UTR: <code style={{ color: "var(--mint)" }}>{ord.utr}</code>
                          </span>
                        )}
                      </div>

                      <div style={{ display: "flex", gap: "0.8rem" }}>
                        <a
                          href={`mailto:mr.bgmi9098@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                          className="btn btn-secondary"
                          style={{ minHeight: "2.4rem", fontSize: "0.82rem", padding: "0.4rem 1rem" }}
                        >
                          ✉️ Email Support
                        </a>
                        <Link
                          href="/contact"
                          className="btn"
                          style={{ minHeight: "2.4rem", fontSize: "0.82rem", padding: "0.4rem 1rem" }}
                        >
                          Help Desk Ticket
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-brand">Games Habibi</p>
          <div className="footer-links">
            <Link href="/catalog">Catalog</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/contact">Support</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </footer>

      <MobileBottomNav />
    </>
  );
}
