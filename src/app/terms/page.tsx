"use client";

import React from "react";
import { PolicyLayout } from "@/components/PolicyLayout";

export default function TermsPage() {
  return (
    <PolicyLayout
      kicker="Terms & Conditions"
      title="Terms of Service & Usage Agreement."
      subtitle="Clear guidelines regarding order fulfillment, personal vs. shared Steam access, and customer responsibilities."
    >
      <h2 style={{ color: "var(--text-primary)", marginTop: 0 }}>Terms of Service</h2>
      <p style={{ color: "var(--mint)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
        Last updated: October 2026
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>1. Digital Product Delivery</h3>
      <p>
        Games Habibi delivers digital game credentials, Steam gift activations, and
        subscription passes. All fulfillment is digital-only via email and private
        messaging. No physical media is shipped.
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>2. Account Types & Usage</h3>
      <ul>
        <li>
          <strong>In Your Steam Account:</strong> Direct activation or gifting to
          your personal Steam profile.
        </li>
        <li>
          <strong>Shared Steam Account:</strong> Provided login credentials meant for
          individual access according to shared guidelines (offline single-player play
          as instructed).
        </li>
      </ul>

      <h3 style={{ color: "var(--text-primary)" }}>3. Pricing & UPI Payments</h3>
      <p>
        All listed prices are in Indian Rupees (INR ₹). Orders are processed once the
        valid UPI payment screenshot and reference ID are confirmed by our team.
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>4. Support & Dispute Resolution</h3>
      <p>
        If you experience technical issues logging into a provided title or activating
        a pass, reach out to our support within 24 hours with your generated Order ID.
      </p>
    </PolicyLayout>
  );
}
