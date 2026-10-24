"use client";

import React, { useState } from "react";

export function SteamGuideFAQ() {
  const [activeTab, setActiveTab] = useState<"shared" | "personal" | "faq">("shared");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const faqs = [
    {
      q: "Will my main personal Steam account get banned?",
      a: "No! Absolutely not. Shared accounts are provided as separate, legitimate Steam profiles. You never enter shared credentials into your personal Steam account, and your personal account is 100% safe. Personal account purchases are delivered via official Steam gifts or keys directly to your own library.",
    },
    {
      q: "How does Shared Account play work?",
      a: "Once you receive the credentials, log into Steam with the provided account, download the game completely, and switch Steam to Offline Mode (Steam menu → Go Offline). You can now play campaign/story modes with zero interruptions and full progress saved locally on your PC.",
    },
    {
      q: "Can I play multiplayer on Shared Accounts?",
      a: "Shared accounts are optimized for offline single-player stories. For official online multiplayer, choose the 'In Your Steam Account' option during checkout to get direct personal ownership.",
    },
    {
      q: "How fast will I receive my game credentials?",
      a: "Orders submitted with a valid UPI payment screenshot and UTR are typically fulfilled within 15 to 30 minutes during our active hours (10:00 AM – 11:30 PM IST). You can also ping our Telegram or Instagram with your Order ID for expedited delivery.",
    },
    {
      q: "What if the login credentials don't work?",
      a: "Every purchase is backed by our 24-hour instant replacement policy. If any account encounters a login issue, message support with your Order ID and we issue new access immediately.",
    },
  ];

  return (
    <section id="guide" className="catalog-section" style={{ background: "rgba(18, 14, 35, 0.45)", borderBlock: "1px solid rgba(245, 166, 35, 0.1)" }}>
      <div className="container">
        <div className="section-heading" style={{ textAlign: "center", maxWidth: "45rem", margin: "0 auto 2.5rem" }}>
          <p className="eyebrow">Buyer Confidence</p>
          <h2>How It Works & Activation Guide</h2>
          <p>
            Learn the exact differences between Shared vs. Personal access and how activation works step-by-step.
          </p>

          <div
            style={{
              display: "inline-flex",
              background: "rgba(25, 18, 48, 0.8)",
              padding: "0.35rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--border-soft)",
              marginTop: "1.5rem",
              gap: "0.4rem",
            }}
          >
            <button
              type="button"
              className={`filter-pill ${activeTab === "shared" ? "active" : ""}`}
              onClick={() => setActiveTab("shared")}
              style={{ padding: "0.45rem 1.1rem", fontSize: "0.85rem" }}
            >
              👥 Shared Account (Budget)
            </button>
            <button
              type="button"
              className={`filter-pill ${activeTab === "personal" ? "active" : ""}`}
              onClick={() => setActiveTab("personal")}
              style={{ padding: "0.45rem 1.1rem", fontSize: "0.85rem" }}
            >
              👤 In Your Steam Account
            </button>
            <button
              type="button"
              className={`filter-pill ${activeTab === "faq" ? "active" : ""}`}
              onClick={() => setActiveTab("faq")}
              style={{ padding: "0.45rem 1.1rem", fontSize: "0.85rem" }}
            >
              ❓ FAQs
            </button>
          </div>
        </div>

        {activeTab === "shared" && (
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
                Get your verified Steam username and password sent to your email or Telegram chat along with Steam Guard authorization.
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
                Enjoy high-budget AAA titles for as low as ₹49 to ₹149 without DRM restrictions or monthly renewal fees.
              </p>
            </div>
          </div>
        )}

        {activeTab === "personal" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div className="step-card">
              <span className="step-number">01</span>
              <h3>Provide Your Steam ID</h3>
              <p>
                Enter your Steam profile link or 8-digit Friend Code during checkout or in your support follow-up.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">02</span>
              <h3>Accept Friend & Gift</h3>
              <p>
                Our automated bot or store operator adds you and transfers the digital Steam gift or product key directly to your account.
              </p>
            </div>

            <div className="step-card">
              <span className="step-number">03</span>
              <h3>Permanent Ownership</h3>
              <p>
                The game stays tied to your personal Steam library forever with full cloud saves, multiplayer, updates, and workshop mods.
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
