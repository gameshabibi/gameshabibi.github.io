"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("gh_theme");
      const currentDark =
        document.documentElement.dataset.theme === "dark" ||
        savedTheme === "dark" ||
        savedTheme === '"dark"';
      setIsDark(currentDark);
    } catch (e) {}
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    try {
      if (nextDark) {
        document.documentElement.dataset.theme = "dark";
        localStorage.setItem("gh_theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("gh_theme", "light");
      }
    } catch (e) {}
  };

  const searchMatches = useMemo(() => {
    const q = searchVal.trim().toLowerCase();
    if (q.length < 2) return [];
    const pool = [...games, ...services];
    return pool
      .filter((item) => item.name.toLowerCase().includes(q) || item.genre.toLowerCase().includes(q))
      .slice(0, 8);
  }, [searchVal]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchVal(val);
    if (onSearch) onSearch(val);
  };

  return (
    <>
      <header className="site-header" id="site-header">
        <div className="container bar">
          <Link href="/" className="logo" aria-label="Games Habibi home">
            GAMES HABIBI<i></i>
          </Link>

          <nav className="main-nav" id="main-nav" aria-label="Main Navigation">
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
              Contact
            </Link>
            <Link
              href="/orders"
              className={pathname === "/orders" ? "active" : ""}
            >
              Orders {pastOrders.length > 0 ? `(${pastOrders.length})` : ""}
            </Link>
          </nav>

          <div className="bar-actions">
            <button
              className="icon-btn"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              aria-label="Search games"
              aria-expanded={isSearchOpen}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>

            <button
              className="icon-btn theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                </svg>
              )}
            </button>

            <Link
              href="/cart"
              className="icon-btn cart-link"
              aria-label={`Cart with ${totalItems} items`}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.5 1.2h8.1a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.2" />
                <circle cx="9.5" cy="19.5" r="1.2" />
                <circle cx="17" cy="19.5" r="1.2" />
              </svg>
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
          </div>
        </div>
      </header>

      {/* Expandable Editorial Search Panel */}
      {isSearchOpen && (
        <div className="search-panel">
          <div className="container">
            <form
              id="search-form"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="sr" htmlFor="search-input">
                Search games and passes
              </label>
              <input
                id="search-input"
                type="search"
                placeholder="Search 580+ games & passes…"
                value={searchVal}
                onChange={handleSearchChange}
                autoFocus
              />
              <button
                type="button"
                className="link-btn"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchVal("");
                  if (onSearch) onSearch("");
                }}
              >
                Close
              </button>
            </form>

            {searchMatches.length > 0 && (
              <div className="search-results">
                {searchMatches.map((item) => {
                  const minPrice =
                    item.variants && item.variants.length > 0
                      ? Math.min(...item.variants.map((v) => v.price))
                      : item.price || 0;
                  return (
                    <div
                      key={item.id}
                      className="search-result-item"
                      onClick={() => {
                        addItem({
                          game: item.name,
                          price: minPrice,
                          variant: item.variants ? item.variants[0].name : undefined,
                          img: item.img,
                        });
                        setIsSearchOpen(false);
                        setSearchVal("");
                        if (onSearch) onSearch("");
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="search-result-thumb">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <b>{item.name}</b>
                        <small>{item.genre}</small>
                      </div>
                      <span className="price" style={{ fontSize: "0.95rem" }}>
                        ₹{minPrice}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
