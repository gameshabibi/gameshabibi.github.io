"use client";

import React from "react";
import { PolicyLayout } from "@/components/PolicyLayout";

export default function CancellationPage() {
  return (
    <PolicyLayout
      kicker="Refund Policy"
      title="Cancellations, Replacements & Refunds."
      subtitle="Clear and fair terms regarding defective digital keys, access replacements, and refund conditions."
    >
      <h2 style={{ color: "var(--text-primary)", marginTop: 0 }}>Refunds & Cancellation</h2>
      <p style={{ color: "var(--mint)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
        Last updated: October 2026
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>1. Replacement Guarantee</h3>
      <p>
        If an account or digital key is defective, invalid, or does not grant access
        as described at the time of purchase, we offer an immediate replacement or
        re-activation within 24 hours of notification.
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>2. Eligible Refund Conditions</h3>
      <ul>
        <li>
          The requested title is out of stock and cannot be delivered within 24 hours.
        </li>
        <li>
          A technical problem on our end prevents key delivery and no suitable
          replacement is acceptable to the buyer.
        </li>
      </ul>

      <h3 style={{ color: "var(--text-primary)" }}>3. Ineligible Scenarios</h3>
      <p>
        Due to the nature of digital keys and account activations, refunds cannot be
        issued once working credentials have been dispatched and redeemed, or if your
        personal PC does not meet the publisher&rsquo;s minimum system requirements.
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>4. How to Request a Refund</h3>
      <p>
        Send an email to{" "}
        <a href="mailto:mr.bgmi9098@gmail.com" style={{ color: "var(--accent)" }}>
          mr.bgmi9098@gmail.com
        </a>{" "}
        with your Order ID, proof of transaction, and a brief explanation of the
        issue. We review all requests promptly.
      </p>
    </PolicyLayout>
  );
}
