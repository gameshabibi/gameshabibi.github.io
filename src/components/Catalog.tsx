"use client";

import React, { useState, useMemo } from "react";
import { services, games, ProductItem } from "@/data/catalog";
import { ProductCard } from "./ProductCard";

interface CatalogProps {
  searchQuery?: string;
  onRequestGame?: (initialTitle?: string) => void;
}

type FilterType = "all" | "personal" | "shared" | "services" | "under100" | "co-op";

export function Catalog({ searchQuery = "", onRequestGame }: CatalogProps) {
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

  return (
    <section id="games" className="catalog-section">
      <div className="container">
        <div className="section-heading" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p className="eyebrow">Storefront</p>
            <h2>Services, Memberships & Curated Games</h2>
            <p>
              Choose between shared budget access (default) or games activated directly in your personal Steam account.
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
            👥 Shared Steam Account (Budget)
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "personal" ? "active" : ""}`}
            onClick={() => setFilter("personal")}
          >
            👤 Personal Steam Account
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "services" ? "active" : ""}`}
            onClick={() => setFilter("services")}
          >
            📺 Streaming & Passes
          </button>
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
        </div>

        {filteredItems.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 1.5rem",
              background: "var(--surface-panel)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-soft)",
            }}
          >
            <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", margin: "0 0 1rem" }}>
              No games or services found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
              {onRequestGame && (
                <button
                  type="button"
                  className="btn"
                  onClick={() => onRequestGame(searchQuery)}
                >
                  🎯 Request &ldquo;{searchQuery || "This Game"}&rdquo; Instantly
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
            {filteredItems.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
