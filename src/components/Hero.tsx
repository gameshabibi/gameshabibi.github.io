"use client";

import React from "react";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="offer-chip">
            ⚡ Bundle Offer: 3 Personal Steam Games for ₹538 (40% OFF)
          </span>

          <h1>Modern game access with a checkout flow that feels premium.</h1>
          <p className="hero-text">
            Browse curated PC titles and digital memberships in one polished
            storefront. Pay smoothly with UPI QR, upload your proof, and receive
            instant Telegram order delivery.
          </p>

          <div className="hero-actions">
            <a href="#games" className="btn">
              Browse Catalog
            </a>
            <a href="#contact" className="btn btn-secondary">
              Talk to Support
            </a>
          </div>

          <div className="trust-strip" aria-label="Trust indicators">
            <span>Instant UPI QR</span>
            <span>12-Digit UTR Tracking</span>
            <span>Direct Telegram & Email Support</span>
          </div>
        </div>

        <div className="hero-preview">
          <div className="spotlight-card">
            <span className="eyebrow">Zero-Friction Flow</span>
            <h2>Fast browse to payment in one clear path.</h2>
            <p>
              Select account variants, review real-time bundle discounts, scan
              the UPI QR on mobile or desktop, and get verified quickly.
            </p>

            <div className="preview-stack">
              <div className="preview-item">
                <span className="preview-tag">Fulfillment</span>
                <strong>Instant Digital Delivery</strong>
                <span>Sent directly after UPI verification</span>
              </div>

              <div className="preview-item">
                <span className="preview-tag">Savings</span>
                <strong>Live Bundle Discounts</strong>
                <span>Up to 47% OFF on Steam account bundles</span>
              </div>

              <div className="preview-item">
                <span className="preview-tag">Security</span>
                <strong>Order ID & UTR Verification</strong>
                <span>Automated Telegram notifications for rapid dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
