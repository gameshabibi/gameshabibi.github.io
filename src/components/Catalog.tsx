"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { services, games, ProductItem } from "@/data/catalog";
import { ProductCard } from "./ProductCard";

interface CatalogProps {
  searchQuery?: string;
  onRequestGame?: (initialTitle?: string) => void;
  isHomeView?: boolean;
  limit?: number;
}

type FilterType = "all" | "personal" | "shared" | "services" | "under100" | "co-op";

export function Catalog({
  searchQuery = "",
  onRequestGame,
  isHomeView = false,
  limit = 6,
}: CatalogProps) {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredItems = useMemo(() => {
    let all: ProductItem[] = [];

    if (filter === "services") {
      all = [...services];
    } else {
      all = [...services, ...games];
    }

    if (filter === "personal") {
      all = games.filter((g) =>
        g.variants?.some((v) => v.name.toLowerCase().includes("in your steam"))
      );
    } else if (filter === "shared") {
      all = games.filter((g) =>
        g.variants?.some((v) => v.name.toLowerCase().includes("shared"))
      );
    } else if (filter === "under100") {
      all = [...services, ...games].filter((item) => {
        if (item.price && item.price <= 100) return true;
        return item.variants?.some((v) => v.price <= 100);
      });
    } else if (filter === "co-op") {
      all = games.filter((g) =>
        g.genre.toLowerCase().includes("co-op") || g.genre.toLowerCase().includes("action")
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      all = all.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.genre.toLowerCase().includes(q)
      );
    }

    return all;
  }, [filter, searchQuery]);

  const displayedItems = isHomeView ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section id="games" className="catalog-section">
      <div className="container">
        {isHomeView ? (
          <div
            className="section-heading"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.8rem",
              marginBottom: "1.2rem",
            }}
          >
            <div>
              <h2 style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", margin: 0 }}>
                🔥 Trending & Popular
              </h2>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  margin: "0.2rem 0 0",
                }}
              >
                Top-selling Steam accounts and digital passes ready for instant dispatch.
              </p>
            </div>

            <Link
              href="/catalog"
              className="btn btn-secondary"
              style={{ fontSize: "0.84rem", padding: "0.45rem 1.1rem", minHeight: "2.4rem" }}
            >
              Explore Full Catalog ({services.length + games.length}+) →
            </Link>
          </div>
        ) : (
          <div
            className="section-heading"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  letterSpacing: "0.02em",
                  margin: "0 0 0.35rem",
                  lineHeight: 1.1,
                }}
              >
                Games & Digital Passes
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", margin: 0 }}>
                Select from affordable shared accounts or personal Steam activations.
              </p>
            </div>

            {onRequestGame && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onRequestGame(searchQuery)}
                style={{ fontSize: "0.85rem", padding: "0.45rem 1rem", minHeight: "2.5rem" }}
              >
                🎯 Request an Unlisted Game
              </button>
            )}
          </div>
        )}

        <div className="catalog-filter-bar" role="tablist">
          <button
            type="button"
            className={`filter-pill ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            ✨ All Items
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "shared" ? "active" : ""}`}
            onClick={() => setFilter("shared")}
          >
            👥 Shared Steam
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "personal" ? "active" : ""}`}
            onClick={() => setFilter("personal")}
          >
            👤 Personal Steam
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "services" ? "active" : ""}`}
            onClick={() => setFilter("services")}
          >
            📺 Streaming Passes
          </button>
          {!isHomeView && (
            <>
              <button
                type="button"
                className={`filter-pill ${filter === "under100" ? "active" : ""}`}
                onClick={() => setFilter("under100")}
              >
                🔥 Under ₹100
              </button>
              <button
                type="button"
                className={`filter-pill ${filter === "co-op" ? "active" : ""}`}
                onClick={() => setFilter("co-op")}
              >
                🎮 Action & Co-op
              </button>
            </>
          )}
        </div>

        {displayedItems.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "3.5rem 1.5rem",
              background: "var(--surface-panel)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-soft)",
            }}
          >
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", margin: "0 0 1rem" }}>
              No items found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
              {onRequestGame && (
                <button
                  type="button"
                  className="btn"
                  onClick={() => onRequestGame(searchQuery)}
                >
                  🎯 Request &ldquo;{searchQuery || "This Game"}&rdquo;
                </button>
              )}
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setFilter("all")}
              >
                Reset Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="product-grid">
            {displayedItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}

        {isHomeView && (
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link
              href="/catalog"
              className="btn"
              style={{
                minHeight: "3rem",
                padding: "0.65rem 2.2rem",
                fontSize: "0.98rem",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              View Full Catalog ({services.length + games.length}+ Games & Passes) →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
