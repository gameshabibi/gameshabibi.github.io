"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onOpenOrders?: () => void;
}

export function Header({ onSearch, onOpenOrders }: HeaderProps) {
  const { items, openDrawer, pastOrders } = useCart();
  const [searchVal, setSearchVal] = useState("");

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    if (onSearch) onSearch(val);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-lockup" aria-label="Games Habibi Home">
          <span className="brand-mark">GH</span>
          <span className="brand-copy">
            <span className="brand-kicker">Instant digital delivery</span>
            <span className="brand-name">Games Habibi</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Store navigation">
          <a href="#games">Catalog</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
          <a href="#contact">Support</a>
          <Link href="/contact">Help Desk</Link>
          {pastOrders.length > 0 && (
            <button
              type="button"
              onClick={onOpenOrders}
              style={{
                fontSize: "0.86rem",
                color: "var(--mint)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              📦 My Orders ({pastOrders.length})
            </button>
          )}
        </nav>

        <div className="header-actions">
          <div className="search-shell">
            <svg
              className="search-icon"
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
            <input
              type="text"
              placeholder="Search games or passes..."
              value={searchVal}
              onChange={handleSearchChange}
              aria-label="Search products"
            />
          </div>

          <button
            type="button"
            className="cart-button"
            onClick={openDrawer}
            aria-label="Open Shopping Cart"
          >
            Cart
            <span className="cart-count">{totalItems}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
