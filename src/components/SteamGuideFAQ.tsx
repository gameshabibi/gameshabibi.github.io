"use client";

import React, { useState } from "react";

export function SteamGuideFAQ() {
  const [activeTab, setActiveTab] = useState<"comparison" | "guide" | "faq">("comparison");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const faqs = [
    {
      q: "Will my main personal Steam account get banned?",
      a: "No! Absolutely not. Shared and Budget accounts are provided as separate, legitimate Steam profiles. You never enter shared credentials into your personal Steam account, keeping your personal account 100% safe.",
    },
    {
      q: "How does Shared or Budget Account play work?",
      a: "Once you receive your credentials, log into Steam with the provided account, download the game completely, and switch Steam to Offline Mode (Steam menu → Go Offline). You can now play campaign/story modes with zero interruptions and full progress saved locally on your PC.",
    },
    {
      q: "Can I play online multiplayer?",
      a: "Shared and Budget accounts are optimized for offline single-player story campaigns. Switch to Steam Offline Mode after downloading to enjoy completely uninterrupted gameplay without signouts.",
    },
    {
      q: "How fast will I receive my game credentials?",
      a: "Orders submitted with a valid UPI payment screenshot and UTR are typically fulfilled within 15 to 30 minutes during our active hours (10:00 AM – 11:30 PM IST). You can also ping our Telegram with your Order ID for expedited delivery.",
    },
    {
      q: "What is the replacement policy for Budget accounts?",
      a: "On Budget Friendly accounts (₹69), if a password is ever modified later, an identical replacement account will be provided at a 50% discount. For Shared accounts (₹149), you enjoy lifetime access and instant support.",
    },
  ];

  return (
    <section id="guide" className="catalog-section" style={{ background: "rgba(18, 14, 35, 0.45)", borderBlock: "1px solid rgba(245, 166, 35, 0.1)" }}>
      <div className="container">
        <div className="section-heading" style={{ textAlign: "center", maxWidth: "45rem", margin: "0 auto 2.5rem" }}>
          <p className="eyebrow">Buyer Confidence</p>
          <h2>How It Works & Activation Guide</h2>
          <p>
            Compare Shared vs. Budget tiers and learn how activation works step-by-step.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              background: "rgba(25, 18, 48, 0.8)",
              padding: "0.35rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-soft)",
              marginTop: "1.2rem",
              gap: "0.4rem",
              maxWidth: "100%",
            }}
          >
            <button
              type="button"
              className={`filter-pill ${activeTab === "comparison" ? "active" : ""}`}
              onClick={() => setActiveTab("comparison")}
              style={{ padding: "0.45rem 1rem", fontSize: "0.84rem" }}
            >
              ⚖️ Shared vs Budget
            </button>
            <button
              type="button"
              className={`filter-pill ${activeTab === "guide" ? "active" : ""}`}
              onClick={() => setActiveTab("guide")}
              style={{ padding: "0.45rem 1rem", fontSize: "0.84rem" }}
            >
              🎮 Activation Guide
            </button>
            <button
              type="button"
              className={`filter-pill ${activeTab === "faq" ? "active" : ""}`}
              onClick={() => setActiveTab("faq")}
              style={{ padding: "0.45rem 1rem", fontSize: "0.84rem" }}
            >
              ❓ FAQs
            </button>
          </div>
        </div>

        {activeTab === "comparison" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.6rem",
              alignItems: "stretch",
            }}
          >
            {/* Shared Account Card */}
            <div
              style={{
                background: "linear-gradient(145deg, rgba(30, 22, 58, 0.9), rgba(18, 14, 38, 0.95))",
                border: "1px solid rgba(245, 166, 35, 0.35)",
                borderRadius: "var(--radius-lg, 16px)",
                padding: "2rem 1.8rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span
                  style={{
                    background: "rgba(245, 166, 35, 0.15)",
                    color: "var(--accent-gold, #f59e0b)",
                    border: "1px solid rgba(245, 166, 35, 0.4)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  ⭐ Most Popular Choice
                </span>
                <span style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  ₹149 <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 500 }}>/ game</span>
                </span>
              </div>

              <h3 style={{ fontSize: "1.45rem", margin: "0 0 0.4rem", color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                Shared Steam Account
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0 0 1.5rem" }}>
                Our recommended standard tier built for maximum peace of mind and long-term uninterrupted gameplay.
              </p>

              <div style={{ display: "grid", gap: "1rem", flex: 1 }}>
                <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#10b981", fontSize: "1.2rem", lineHeight: 1 }}>✓</span>
                  <div>
                    <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      Lifetime Access
                    </strong>
                    <span style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>
                      Keep the game in your library forever with zero expiration or monthly renewal fees.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#10b981", fontSize: "1.2rem", lineHeight: 1 }}>✓</span>
                  <div>
                    <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      No Frequent Signouts
                    </strong>
                    <span style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>
                      High login stability without abrupt session disconnections or unexpected kicks while playing.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#10b981", fontSize: "1.2rem", lineHeight: 1 }}>✓</span>
                  <div>
                    <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      OTP Authentic (Steam Guard Verified)
                    </strong>
                    <span style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>
                      Protected with official Steam Guard 2FA OTP codes delivered securely to you during initial setup.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#10b981", fontSize: "1.2rem", lineHeight: 1 }}>✓</span>
                  <div>
                    <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      Offline Campaign & Local Saves
                    </strong>
                    <span style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>
                      Full story missions, achievements, and local save files stored safely on your PC.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget Friendly Card */}
            <div
              style={{
                background: "linear-gradient(145deg, rgba(25, 18, 48, 0.9), rgba(16, 12, 32, 0.95))",
                border: "1px solid rgba(139, 92, 246, 0.35)",
                borderRadius: "var(--radius-lg, 16px)",
                padding: "2rem 1.8rem",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxShadow: "0 12px 35px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span
                  style={{
                    background: "rgba(139, 92, 246, 0.15)",
                    color: "#a78bfa",
                    border: "1px solid rgba(139, 92, 246, 0.35)",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  ⚡ Ultra Budget Option
                </span>
                <span style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--text-primary)" }}>
                  ₹69 <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 500 }}>flat / game</span>
                </span>
              </div>

              <h3 style={{ fontSize: "1.45rem", margin: "0 0 0.4rem", color: "var(--text-primary)", fontFamily: "var(--font-heading)" }}>
                Budget Friendly Account
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0 0 1.5rem" }}>
                Maximum value tier designed for budget gaming and cost-effective entertainment.
              </p>

              <div style={{ display: "grid", gap: "1rem", flex: 1 }}>
                <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#f59e0b", fontSize: "1.1rem", lineHeight: 1 }}>ℹ️</span>
                  <div>
                    <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      Password May Change
                    </strong>
                    <span style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>
                      Password may change over time. If needed, another same account will be provided with a <strong>50% discount</strong>.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#f59e0b", fontSize: "1.1rem", lineHeight: 1 }}>ℹ️</span>
                  <div>
                    <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      Signout Notice If Online
                    </strong>
                    <span style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>
                      If you stay online, you may face signouts sometimes. Switching to Steam Offline Mode after downloading is recommended.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#10b981", fontSize: "1.2rem", lineHeight: 1 }}>✓</span>
                  <div>
                    <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      No OTP Required (Share With Friends)
                    </strong>
                    <span style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>
                      Zero 2FA OTP delay — login directly with password and easily share among your friends.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                  <span style={{ color: "#10b981", fontSize: "1.2rem", lineHeight: 1 }}>✓</span>
                  <div>
                    <strong style={{ display: "block", color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      Official Full Game Download
                    </strong>
                    <span style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>
                      Full official game files downloaded directly from Steam servers at high speed.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "guide" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.4rem",
            }}
          >
            <div className="step-card">
              <span className="step-number">01</span>
              <h3>Receive Login Details</h3>
              <p>
                Get your verified Steam username and password sent to your email or Telegram chat along with activation instructions.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3>Download the Game</h3>
              <p>
                Log into Steam with the provided account, navigate to the Library, and download the full official game files directly from Steam servers.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3>Switch to Offline Mode</h3>
              <p>
                Once downloaded, click <strong>Steam → Go Offline</strong>. The game runs 100% locally on your computer with complete saves and achievements.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">04</span>
              <h3>Play Forever</h3>
              <p>
                Enjoy high-budget AAA titles for as low as ₹69 to ₹149 without DRM restrictions or monthly renewal fees.
              </p>
            </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div style={{ maxWidth: "50rem", margin: "0 auto", display: "grid", gap: "0.85rem" }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--surface-panel)",
                  border: "1px solid var(--border-soft)",
                  borderRadius: "var(--radius-sm)",
                  overflow: "hidden",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: "100%",
                    padding: "1.1rem 1.3rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "var(--text-primary)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textAlign: "left",
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: "var(--accent)", fontSize: "1.2rem", marginLeft: "1rem" }}>
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div
                    style={{
                      padding: "0 1.3rem 1.2rem",
                      color: "var(--text-secondary)",
                      fontSize: "0.92rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
