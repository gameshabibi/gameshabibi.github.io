"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SteamGuideFAQ } from "@/components/SteamGuideFAQ";

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "2.5rem 0 5rem" }}>
        <div className="container" style={{ marginBottom: "3rem" }}>
          <p className="eyebrow">Clear & Frictionless</p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              margin: "0 0 1rem",
              lineHeight: 1.05,
            }}
          >
            How Games Habibi Works
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "45rem", lineHeight: 1.6 }}>
            We designed our ordering process to be zero-friction: browse titles, pay securely via your own UPI app (GPay / PhonePe / Paytm), and receive fast digital verification via Telegram bot.
          </p>

          <div className="steps-grid" style={{ marginTop: "2.5rem" }}>
            <article className="step-card">
              <span className="step-number">01</span>
              <h3>Choose your access type</h3>
              <p>
                Defaults to affordable shared account access or direct personal Steam account
                activations with upfront pricing in INR.
              </p>
            </article>

            <article className="step-card">
              <span className="step-number">02</span>
              <h3>Pay with UPI and confirm</h3>
              <p>
                Review bundle & coupon discounts, scan the dynamic QR or tap Pay Now on
                your UPI app, then upload your screenshot and 12-digit UTR.
              </p>
            </article>

            <article className="step-card">
              <span className="step-number">03</span>
              <h3>Instant Telegram delivery</h3>
              <p>
                Your payment proof and reference ID trigger an automated Telegram bot
                alert for rapid credential dispatch to your email or chat.
              </p>
            </article>
          </div>
        </div>

        {/* Detailed Steam Activation Walkthrough & FAQ */}
        <SteamGuideFAQ />

        <div className="container" style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link href="/catalog" className="btn" style={{ minHeight: "3.2rem", fontSize: "1.05rem", padding: "0.8rem 2rem" }}>
            Explore Game Catalog 🚀
          </Link>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p className="footer-brand">Games Habibi</p>
          <div className="footer-links">
            <Link href="/catalog">Catalog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Support</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
