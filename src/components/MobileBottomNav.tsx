"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export function MobileBottomNav({ onFocusSearch }: { onFocusSearch?: () => void }) {
  const { items, openDrawer } = useCart();
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
      <a href="#top" className="mobile-nav-item">
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
        <span>Store</span>
      </a>

      <a href="#games" className="mobile-nav-item">
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
      </a>

      <button
        type="button"
        className="mobile-nav-item"
        onClick={() => {
          if (onFocusSearch) onFocusSearch();
          const searchInput = document.querySelector(".search-shell input") as HTMLElement;
          searchInput?.focus();
        }}
        aria-label="Search Catalog"
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
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <span>Search</span>
      </button>

      <button
        type="button"
        className="mobile-nav-item"
        onClick={openDrawer}
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
      </button>
    </nav>
  );
}
