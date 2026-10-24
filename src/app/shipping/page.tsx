"use client";

import React from "react";
import { PolicyLayout } from "@/components/PolicyLayout";

export default function ShippingPage() {
  return (
    <PolicyLayout
      kicker="Shipping Policy"
      title="Digital Delivery & Turnaround Expectations."
      subtitle="How and when you will receive your games, activation passes, and login credentials."
    >
      <h2 style={{ color: "var(--text-primary)", marginTop: 0 }}>Shipping & Delivery Policy</h2>
      <p style={{ color: "var(--mint)", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
        Last updated: October 2026
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>1. 100% Digital Delivery</h3>
      <p>
        Games Habibi operates exclusively as a digital storefront. There are no
        physical CDs, boxes, or postage items delivered to your residential address.
      </p>

      <h3 style={{ color: "var(--text-primary)" }}>2. Delivery Timelines</h3>
      <p>
        Upon successful submission of your UPI payment screenshot and order details:
      </p>
      <ul>
        <li>
          <strong>Standard Turnaround:</strong> Typically 15 minutes to 2 hours
          during operational hours (10:00 AM – 11:30 PM IST).
        </li>
        <li>
          <strong>Night Orders:</strong> Orders placed late at night are prioritized
          first thing in the morning.
        </li>
      </ul>

      <h3 style={{ color: "var(--text-primary)" }}>3. How Credentials Are Dispatched</h3>
      <p>
        Delivery is made to the email address entered during checkout. You can also
        message our Instagram or Telegram support with your <code>ORD-XXXXXX</code>{" "}
        number for expedited confirmation.
      </p>
    </PolicyLayout>
  );
}
