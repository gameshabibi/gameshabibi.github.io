"use client";

import React from "react";
import Link from "next/link";
import { Header } from "./Header";

interface PolicyLayoutProps {
  title: string;
  kicker: string;
  subtitle: string;
  children: React.ReactNode;
}

export function PolicyLayout({
  title,
  kicker,
  subtitle,
  children,
}: PolicyLayoutProps) {
  return (
    <>
      <Header />
      <main className="container" style={{ padding: "3rem 0 5rem" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <p className="eyebrow">{kicker}</p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              margin: "0 0 0.8rem",
              lineHeight: 1.1,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              marginBottom: "2.5rem",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
          >
            <article
              className="policy"
              style={{
                maxWidth: "100%",
                background: "var(--surface-panel)",
                border: "1px solid var(--ink)",
                padding: "clamp(1.5rem, 3.5vw, 2.8rem)",
                boxShadow: "var(--shadow-soft)",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              {children}
            </article>

            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--line-strong)",
                padding: "1.4rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "1.2rem",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                Policy &amp; Storefront Navigation:
              </span>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.9rem" }}>
                <Link href="/" style={{ color: "var(--accent)", fontWeight: 600 }}>
                  Storefront
                </Link>
                <Link href="/privacy" style={{ color: "var(--text-secondary)" }}>
                  Privacy
                </Link>
                <Link href="/terms" style={{ color: "var(--text-secondary)" }}>
                  Terms
                </Link>
                <Link href="/shipping" style={{ color: "var(--text-secondary)" }}>
                  Shipping
                </Link>
                <Link href="/cancellation" style={{ color: "var(--text-secondary)" }}>
                  Refunds
                </Link>
                <Link href="/contact" style={{ color: "var(--mint)", fontWeight: 600 }}>
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
