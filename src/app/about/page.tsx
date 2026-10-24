"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ padding: "3rem 0 5rem" }}>
        <div className="container" style={{ maxWidth: "56rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.5rem" }}>
            <Image
              src="/png/apple-touch-icon.png"
              alt="Games Habibi Logo"
              width={64}
              height={64}
              className="brand-logo"
              style={{ width: "4rem", height: "4rem" }}
            />
            <div>
              <p className="eyebrow" style={{ margin: 0 }}>About Us</p>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                Games Habibi
              </h1>
            </div>
          </div>

          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--text-primary)",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            Your trusted Indian digital storefront for top-tier PC games, Steam account access, and streaming passes with instant UPI delivery and zero friction.
          </p>

          <article
            style={{
              background: "var(--surface-panel)",
              border: "1px solid var(--border-soft)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(1.8rem, 4vw, 3rem)",
              boxShadow: "var(--shadow-strong)",
              marginBottom: "2.5rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
            }}
          >
            <h2 style={{ color: "var(--text-primary)", marginTop: 0, fontSize: "1.5rem" }}>
              Our Story & Mission
            </h2>
            <p>
              Games Habibi was founded with a straightforward goal: eliminate the frustrating payment barriers faced by Indian gamers. International game stores and services often demand international credit cards, charge hidden foreign exchange conversion fees, or hit buyers with steep pricing.
            </p>
            <p>
              We solve this by curating the hottest PC game titles, Steam activations, and digital subscriptions (such as Netflix and YouTube Premium) with transparent pricing in INR (₹) and instant local UPI payments via Google Pay, PhonePe, and Paytm.
            </p>

            <h2 style={{ color: "var(--text-primary)", marginTop: "2rem", fontSize: "1.5rem" }}>
              The Games Habibi Commitments
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.2rem", marginTop: "1rem" }}>
              <div style={{ background: "rgba(25, 18, 48, 0.6)", padding: "1.2rem", borderRadius: "var(--radius-sm)", border: "1px solid rgba(245, 166, 35, 0.12)" }}>
                <strong style={{ color: "var(--accent)", display: "block", marginBottom: "0.3rem" }}>
                  ⚡ Instant UPI Checkout
                </strong>
                <span style={{ fontSize: "0.88rem" }}>
                  Pay in seconds with QR codes and deep links. Zero credit card or registration hoops.
                </span>
              </div>

              <div style={{ background: "rgba(25, 18, 48, 0.6)", padding: "1.2rem", borderRadius: "var(--radius-sm)", border: "1px solid rgba(245, 166, 35, 0.12)" }}>
                <strong style={{ color: "var(--mint)", display: "block", marginBottom: "0.3rem" }}>
                  🛡️ 24h Replacement Guarantee
                </strong>
                <span style={{ fontSize: "0.88rem" }}>
                  Every game and service key is backed by our instant verification and replacement guarantee.
                </span>
              </div>

              <div style={{ background: "rgba(25, 18, 48, 0.6)", padding: "1.2rem", borderRadius: "var(--radius-sm)", border: "1px solid rgba(245, 166, 35, 0.12)" }}>
                <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "0.3rem" }}>
                  💬 Real Human Support
                </strong>
                <span style={{ fontSize: "0.88rem" }}>
                  Direct communication through Telegram, Instagram, and Email whenever you need assistance.
                </span>
              </div>
            </div>
          </article>

          <div style={{ textAlign: "center", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/catalog" className="btn" style={{ minHeight: "3rem", padding: "0.7rem 1.8rem" }}>
              Browse Catalog
            </Link>
            <Link href="/contact" className="btn btn-secondary" style={{ minHeight: "3rem", padding: "0.7rem 1.8rem" }}>
              Contact Help Desk
            </Link>
          </div>
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
    </>
  );
}
