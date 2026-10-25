"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Catalog } from "@/components/Catalog";
import { SteamGuideFAQ } from "@/components/SteamGuideFAQ";
import { MyOrdersModal } from "@/components/MyOrdersModal";
import { RequestGameModal } from "@/components/RequestGameModal";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [requestedTitle, setRequestedTitle] = useState("");

  const handleOpenRequest = (title?: string) => {
    setRequestedTitle(title || "");
    setIsRequestOpen(true);
  };

  return (
    <>
      <div id="top" />
      <div className="notice-bar">
        🚨 Limited time: 3-game bundle for ₹538 | <Link href="/catalog">Shop Now</Link>
      </div>
      <Header
        onSearch={setSearchQuery}
        onOpenOrders={() => setIsOrdersOpen(true)}
      />

      <main>
        <Hero />
        <Ticker />
        <Catalog
          isHomeView
          limit={6}
          searchQuery={searchQuery}
          onRequestGame={handleOpenRequest}
        />

        {/* Interactive Steam Guide & FAQ */}
        <SteamGuideFAQ />

        {/* How It Works Section */}
        <section id="how-it-works" className="process-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">How It Works</p>
              <h2>Simple from search to digital delivery</h2>
            </div>

            <div className="steps-grid">
              <article className="step-card">
                <span className="step-number">01</span>
                <h3>Choose your access type</h3>
                <p>
                  Defaults to affordable shared account access or direct personal Steam account
                  activations with upfront pricing.
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
                  alert for rapid credential dispatch.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="catalog-section">
          <div className="container">
            <div
              style={{
                background: "var(--surface-panel)",
                border: "1px solid var(--border-soft)",
                borderRadius: "var(--radius-lg)",
                padding: "clamp(1.8rem, 3.5vw, 3rem)",
              }}
            >
              <p className="eyebrow">About Games Habibi</p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  margin: "0 0 1rem",
                }}
              >
                A storefront built around clarity, trust, and fast follow-up.
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  lineHeight: "1.7",
                  maxWidth: "50rem",
                  margin: "0 0 2rem",
                }}
              >
                Games Habibi focuses on making top-tier PC gaming and premium
                subscriptions accessible to everyone in India. With zero credit
                card hurdles and direct UPI payments, you get transparent
                pricing and real human support on Telegram and Instagram.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(25, 18, 48, 0.6)",
                    border: "1px solid rgba(245, 166, 35, 0.12)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1.2rem",
                  }}
                >
                  <h3 style={{ margin: "0 0 0.4rem", fontSize: "1.1rem" }}>
                    🚀 Fast Turnaround
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    Digital credentials dispatched directly to your email or
                    chat as soon as payment is confirmed.
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(25, 18, 48, 0.6)",
                    border: "1px solid rgba(245, 166, 35, 0.12)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1.2rem",
                  }}
                >
                  <h3 style={{ margin: "0 0 0.4rem", fontSize: "1.1rem" }}>
                    💎 Transparent Pricing
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    All prices are in INR (₹) with live bundle discounts and zero
                    hidden transaction fees.
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(25, 18, 48, 0.6)",
                    border: "1px solid rgba(245, 166, 35, 0.12)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1.2rem",
                  }}
                >
                  <h3 style={{ margin: "0 0 0.4rem", fontSize: "1.1rem" }}>
                    💬 Dedicated Support
                  </h3>
                  <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    Reach us via Email, Instagram, or our direct Help Desk if you
                    need custom titles or assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support & Policies Section */}
        <section id="contact" className="support-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Support</p>
              <h2>Need help before or after checkout?</h2>
              <p>
                Reach out for order inquiries, delivery status, or custom game
                requests that are not listed in the storefront yet.
              </p>
            </div>

            <div className="support-grid">
              <article className="support-card">
                <p className="meta-label">Email</p>
                <h3>Primary support channel</h3>
                <a className="contact-link" href="mailto:mr.bgmi9098@gmail.com">
                  mr.bgmi9098@gmail.com
                </a>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", margin: 0 }}>
                  Best for transaction details, payment verification, and refund requests.
                </p>
              </article>

              <article className="support-card">
                <p className="meta-label">Instagram</p>
                <h3>Social updates</h3>
                <a
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/games_habibi/"
                >
                  @games_habibi
                </a>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", margin: 0 }}>
                  Great for quick DMs and custom title availability checks.
                </p>
              </article>

              <article className="support-card">
                <p className="meta-label">Policy Hub</p>
                <h3>Policies & terms</h3>
                <div className="policy-links">
                  <Link href="/privacy">Privacy Policy</Link>
                  <Link href="/terms">Terms of Service</Link>
                  <Link href="/shipping">Shipping Policy</Link>
                  <Link href="/cancellation">Refund Policy</Link>
                  <Link href="/contact">Support Ticket Form</Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <Image
              src="/png/apple-touch-icon.png"
              alt="Games Habibi Logo"
              width={40}
              height={40}
              className="brand-logo"
            />
            <div>
              <p className="footer-brand">Games Habibi</p>
              <p className="footer-copy">
                Premium digital storefront with mobile-friendly UPI checkout and direct support.
              </p>
            </div>
          </div>

          <div className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/shipping">Shipping</Link>
            <Link href="/cancellation">Refunds</Link>
            <Link href="/contact">Help Desk</Link>
            <a
              href="https://wa.me/918966010035"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25D366", fontWeight: 600 }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <MyOrdersModal
        isOpen={isOrdersOpen}
        onClose={() => setIsOrdersOpen(false)}
      />

      <RequestGameModal
        isOpen={isRequestOpen}
        onClose={() => setIsRequestOpen(false)}
        initialGame={requestedTitle}
      />
    </>
  );
}
