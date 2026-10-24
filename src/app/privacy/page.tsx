"use client";

import React from "react";
import { PolicyLayout } from "@/components/PolicyLayout";

export default function PrivacyPage() {
  return (
    <PolicyLayout
      kicker="Privacy Policy"
      title="How Games Habibi handles customer and order information."
      subtitle="This page outlines what details are collected when you browse, checkout with UPI, or submit a payment screenshot."
    >
      <h2 style={{ color: "var(--text-primary)", marginTop: 0 }}>Privacy Policy</h2>
      <p style={{ color: "var(--mint)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
        Last updated: October 2026
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>1. Information We Collect</h3>
      <p>
        When placing an order or contacting support, we only collect the minimum
        necessary details required to fulfill your digital purchase:
      </p>
      <ul>
        <li>Full Name (for order verification)</li>
        <li>Email address (for digital credential and receipt delivery)</li>
        <li>Payment screenshot and 12-digit UPI UTR reference ID</li>
        <li>Selected games and account preferences</li>
      </ul>
      <p>
        <strong>We never collect or store:</strong> Credit/debit card numbers, UPI PINs,
        banking passwords, or personal identity documents.
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>2. How We Use Your Information</h3>
      <p>
        Order details and payment screenshots are routed directly via secure server
        channels to our private Telegram operators solely to verify payments and
        deliver purchased credentials. We do not sell, rent, or lease customer data
        to third parties.
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>3. Payment & Data Security</h3>
      <p>
        Payments occur within your own UPI application (Google Pay, PhonePe, Paytm).
        Our site does not process or store banking credentials. Uploaded payment
        proofs are validated for image file type and size restrictions (&lt;5 MB).
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>4. Contact & Inquiries</h3>
      <p>
        For data inquiries or deletion requests, contact us at{" "}
        <a href="mailto:mr.bgmi9098@gmail.com" style={{ color: "var(--accent)" }}>
          mr.bgmi9098@gmail.com
        </a>{" "}
        or on Instagram at{" "}
        <a
          href="https://www.instagram.com/games_habibi/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--accent)" }}
        >
          @games_habibi
        </a>
        .
      </p>
    </PolicyLayout>
  );
}
