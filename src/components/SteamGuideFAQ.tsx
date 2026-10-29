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
      a: "Orders submitted with a valid UPI payment screenshot and UTR are typically fulfilled within 15 to 30 minutes during our active hours (10:00 AM – 11:30 PM IST). You can also ping our WhatsApp with your Order ID for expedited delivery.",
    },
    {
      q: "What is the replacement policy for Budget accounts?",
      a: "On Budget Friendly accounts (₹69), if a password is ever modified later, an identical replacement account will be provided at a 50% discount. For Shared accounts (₹149), you enjoy lifetime access and direct support.",
    },
  ];

  return (
    <section id="guide" className="section" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "45rem", margin: "0 auto 2.2rem" }}>
          <p className="kicker" style={{ marginBottom: "0.5rem" }}>
            Buyer Confidence
          </p>
          <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            How It Works &amp; FAQ
          </h2>
          <p className="muted" style={{ marginTop: "0.5rem" }}>
            Compare Shared vs. Budget tiers and learn how offline activation works step-by-step.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1.4rem",
              flexWrap: "wrap",
            }}
          >
            <button
              type="button"
              className={`filter-pill ${activeTab === "comparison" ? "active" : ""}`}
              onClick={() => setActiveTab("comparison")}
            >
              Shared vs Budget
            </button>
            <button
              type="button"
              className={`filter-pill ${activeTab === "guide" ? "active" : ""}`}
              onClick={() => setActiveTab("guide")}
            >
              Activation Guide
            </button>
            <button
              type="button"
              className={`filter-pill ${activeTab === "faq" ? "active" : ""}`}
              onClick={() => setActiveTab("faq")}
            >
              Questions &amp; Answers
            </button>
          </div>
        </div>

        {activeTab === "comparison" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
              alignItems: "stretch",
            }}
          >
            {/* Shared Account Card */}
            <div
              style={{
                background: "var(--night)",
                color: "var(--night-text)",
                border: "1px solid var(--ink)",
                padding: "2rem 1.8rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <span className="tag" style={{ position: "static" }}>
                  Most Popular
                </span>
                <span className="price" style={{ fontSize: "1.5rem" }}>
                  ₹149 <small style={{ fontSize: "0.8rem", color: "var(--night-muted)" }}>/ game</small>
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  margin: "0 0 0.4rem",
                }}
              >
                Shared Steam Account
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--night-muted)",
                  margin: "0 0 1.5rem",
                }}
              >
                Our standard tier built for maximum peace of mind and long-term uninterrupted gameplay.
              </p>

              <div style={{ display: "grid", gap: "0.9rem", flex: 1, fontSize: "0.86rem" }}>
                <div>
                  <strong style={{ display: "block" }}>✓ Lifetime Access</strong>
                  <span style={{ color: "var(--night-muted)" }}>
                    Keep the game in your library with zero expiration or monthly renewal fees.
                  </span>
                </div>
                <div>
                  <strong style={{ display: "block" }}>✓ High Login Stability</strong>
                  <span style={{ color: "var(--night-muted)" }}>
                    Play uninterrupted in Steam Offline Mode without sudden session kicks.
                  </span>
                </div>
                <div>
                  <strong style={{ display: "block" }}>✓ Steam Guard Protected</strong>
                  <span style={{ color: "var(--night-muted)" }}>
                    Protected with official Steam Guard 2FA codes delivered promptly during setup.
                  </span>
                </div>
                <div>
                  <strong style={{ display: "block" }}>✓ Full Offline Campaign</strong>
                  <span style={{ color: "var(--night-muted)" }}>
                    Complete story missions and achievements saved directly on your local PC.
                  </span>
                </div>
              </div>
            </div>

            {/* Budget Friendly Card */}
            <div
              style={{
                background: "var(--card)",
                color: "var(--ink)",
                border: "1px solid var(--ink)",
                padding: "2rem 1.8rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <span className="kicker">Ultra Budget</span>
                <span className="price" style={{ fontSize: "1.5rem" }}>
                  ₹69 <small style={{ fontSize: "0.8rem", color: "var(--muted)" }}>/ game</small>
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "1.3rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  margin: "0 0 0.4rem",
                }}
              >
                Budget Friendly Account
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--ink-3)",
                  margin: "0 0 1.5rem",
                }}
              >
                Cost-effective access designed for quick story campaign completion.
              </p>

              <div style={{ display: "grid", gap: "0.9rem", flex: 1, fontSize: "0.86rem" }}>
                <div>
                  <strong style={{ display: "block" }}>— 50% Replacement Discount</strong>
                  <span style={{ color: "var(--muted)" }}>
                    If credentials ever change, get an identical replacement account at 50% off.
                  </span>
                </div>
                <div>
                  <strong style={{ display: "block" }}>— Offline Play Recommended</strong>
                  <span style={{ color: "var(--muted)" }}>
                    Switch to Steam Offline Mode immediately after downloading to prevent kicks.
                  </span>
                </div>
                <div>
                  <strong style={{ display: "block" }}>✓ Direct Official Download</strong>
                  <span style={{ color: "var(--muted)" }}>
                    Official game files downloaded directly from official Steam servers at full speed.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "guide" && (
          <div className="steps3">
            <div className="s">
              <div className="n">01</div>
              <h3>Receive Login Details</h3>
              <p>
                Get your verified Steam username and password sent to WhatsApp or email along with activation instructions.
              </p>
            </div>

            <div className="s">
              <div className="n">02</div>
              <h3>Download the Game</h3>
              <p>
                Log into Steam with the provided account and download the complete official game files directly from Steam.
              </p>
            </div>

            <div className="s">
              <div className="n">03</div>
              <h3>Switch to Offline Mode</h3>
              <p>
                Click <strong>Steam → Go Offline</strong>. The game runs 100% locally on your computer with complete saves.
              </p>
            </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div style={{ maxWidth: "50rem", margin: "0 auto", display: "grid", gap: "0.5rem" }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--line)",
                  padding: "1rem 1.2rem",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "var(--ink)",
                    fontFamily: "var(--serif)",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    textAlign: "left",
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: "var(--red)", fontSize: "1.2rem", marginLeft: "1rem" }}>
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div
                    style={{
                      paddingTop: "0.8rem",
                      color: "var(--ink-3)",
                      fontSize: "0.9rem",
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
