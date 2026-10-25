"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export function MobileBottomNav({ onFocusSearch }: { onFocusSearch?: () => void }) {
  const { items, pastOrders, openDrawer, isDrawerOpen } = useCart();
  const pathname = usePathname();
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

  const triggerHaptic = () => {
    if (typeof window !== "undefined" && navigator.vibrate) {
      navigator.vibrate(12);
    }
  };

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
      <Link
        href="/"
        onClick={triggerHaptic}
        className={`mobile-nav-item ${pathname === "/" ? "active" : ""}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>Home</span>
      </Link>

      <Link
        href="/catalog"
        onClick={triggerHaptic}
        className={`mobile-nav-item ${pathname === "/catalog" ? "active" : ""}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
          <path d="M6 12h4m-2-2v4m7-2h.01m3 0h.01"></path>
        </svg>
        <span>Catalog</span>
      </Link>

      <Link
        href="/cart"
        onClick={triggerHaptic}
        className={`mobile-nav-item ${pathname === "/cart" ? "active" : ""}`}
        aria-label="Open Shopping Cart"
        style={{ position: "relative" }}
      >
        <div style={{ position: "relative", display: "inline-flex" }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {totalQty > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-0.4rem",
                right: "-0.6rem",
                background: "var(--accent-strong)",
                color: "#04101c",
                fontFamily: "var(--font-data)",
                fontSize: "0.68rem",
                fontWeight: 700,
                padding: "0.08rem 0.35rem",
                borderRadius: "999rem",
              }}
            >
              {totalQty}
            </span>
          )}
        </div>
        <span>Cart</span>
      </Link>

      <Link
        href="/orders"
        onClick={triggerHaptic}
        className={`mobile-nav-item ${pathname === "/orders" ? "active" : ""}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span>Orders {pastOrders.length > 0 ? `(${pastOrders.length})` : ""}</span>
      </Link>
    </nav>
  );
}
