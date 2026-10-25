"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { games, services } from "@/data/catalog";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onOpenOrders?: () => void;
}

export function Header({ onSearch, onOpenOrders }: HeaderProps) {
  const { items, pastOrders, openDrawer, addItem } = useCart();
  const [searchVal, setSearchVal] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const pathname = usePathname();

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  const searchMatches = useMemo(() => {
    const q = searchVal.trim().toLowerCase();
    if (q.length < 2) return [];
    const pool = [...games, ...services];
    return pool
      .filter((item) => item.name.toLowerCase().includes(q) || item.genre.toLowerCase().includes(q))
      .slice(0, 5);
  }, [searchVal]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    if (onSearch) onSearch(val);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-lockup" aria-label="Games Habibi Home">
          <Image
            src="/png/apple-touch-icon.png"
            alt="Games Habibi Logo"
            width={44}
            height={44}
            className="brand-logo"
            priority
          />
          <span className="brand-copy">
            <span className="brand-kicker">Instant digital delivery</span>
            <span className="brand-name">Games Habibi</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Store navigation">
          <Link
            href="/catalog"
            className={pathname === "/catalog" ? "active" : ""}
          >
            Catalog
          </Link>
          <Link
            href="/how-it-works"
            className={pathname === "/how-it-works" ? "active" : ""}
          >
            How It Works
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Help Desk
          </Link>
          <Link
            href="/orders"
            className={pathname === "/orders" ? "active" : ""}
          >
            Orders {pastOrders.length > 0 ? `(${pastOrders.length})` : ""}
          </Link>
          <button
            type="button"
            className={`site-nav-cart-btn ${pathname === "/cart" ? "active" : ""}`}
            onClick={openDrawer}
            aria-label={`Open Cart with ${totalItems} items`}
          >
            Cart {totalItems > 0 ? `(${totalItems})` : ""}
          </button>
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
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => {
                // Slight delay to allow item click
                setTimeout(() => setIsSearchFocused(false), 200);
              }}
              aria-label="Search products"
            />
            {searchVal && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => {
                  setSearchVal("");
                  if (onSearch) onSearch("");
                }}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}

            {/* Instant Floating Results Dropdown */}
            {isSearchFocused && searchVal.trim().length >= 2 && (
              <div className="search-dropdown-results" role="listbox">
                {searchMatches.length > 0 ? (
                  searchMatches.map((item) => {
                    const minPrice =
                      item.variants && item.variants.length > 0
                        ? Math.min(...item.variants.map((v) => v.price))
                        : item.price || 0;
                    return (
                      <div
                        key={item.id}
                        className="search-result-item"
                        onMouseDown={() => {
                          addItem({
                            game: item.name,
                            price: minPrice,
                            variant: item.variants ? item.variants[0].name : undefined,
                            img: item.img,
                          });
                          setIsSearchFocused(false);
                          setSearchVal("");
                          if (onSearch) onSearch("");
                        }}
                      >
                        <div className="search-result-thumb">
                          <Image
                            src={item.img}
                            alt={item.name}
                            width={48}
                            height={28}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className="search-result-info">
                          <span className="search-result-title">{item.name}</span>
                          <span className="search-result-meta">{item.genre}</span>
                        </div>
                        <div className="search-result-price">
                          <span>₹{minPrice}</span>
                          <span className="search-add-pill">+ Add</span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="search-no-results">
                    <span>No exact match found</span>
                    <Link href="/catalog" className="search-request-link">
                      Browse Full Catalog →
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={openDrawer}
            className="cart-button desktop-only-cart"
            aria-label={`View Shopping Cart (${totalItems} items)`}
          >
            Cart
            <span className="cart-count">{totalItems}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
