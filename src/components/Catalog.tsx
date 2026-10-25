"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { services, games, ProductItem } from "@/data/catalog";
import { ProductCard } from "./ProductCard";

interface CatalogProps {
  searchQuery?: string;
  onRequestGame?: (initialTitle?: string) => void;
  isHomeView?: boolean;
  limit?: number;
}

type FilterType =
  | "all"
  | "lowToHigh"
  | "actionFirst"
  | "racingFirst"
  | "popularFirst"
  | "under100"
  | "services";

const POPULAR_KEYS = [
  "grand theft auto",
  "gta",
  "red dead",
  "black myth",
  "god of war",
  "forza",
  "elden ring",
  "ea sports",
  "palworld",
  "cyberpunk",
  "spider-man",
  "last of us",
  "wukong",
  "fifa",
  "tekken",
  "mortal kombat",
  "call of duty",
  "assassin's creed",
  "sekiro",
  "hogwarts",
  "witcher",
  "baldur",
  "ghost of tsushima",
  "stellar blade",
  "resident evil",
  "days gone",
  "detroit",
  "uncharted",
  "hitman",
  "dark souls",
  "beamng",
  "need for speed",
  "nfs",
  "assetto corsa",
];

const getPopularityScore = (i: ProductItem): number => {
  let score = 0;
  if (i.badge && i.badge !== "Budget Pick") score += 2;
  const name = i.name.toLowerCase();
  if (POPULAR_KEYS.some((k) => name.includes(k))) score += 1;
  return score;
};

const getItemMinPrice = (item: ProductItem): number => {
  if (item.variants && item.variants.length > 0) {
    return Math.min(...item.variants.map((v) => v.price));
  }
  return item.price || 0;
};

const BATCH_SIZE = 24;

export function Catalog({
  searchQuery = "",
  onRequestGame,
  isHomeView = false,
  limit = 6,
}: CatalogProps) {
  const [filter, setFilter] = useState<FilterType>("popularFirst");
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);

  // Reset pagination when filter or search changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [filter, searchQuery]);

  const filteredItems = useMemo(() => {
    let all: ProductItem[] = [];

    if (filter === "services") {
      all = [...services];
    } else {
      all = [...services, ...games];
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      all = all.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.genre.toLowerCase().includes(q)
      );
    }

    if (filter === "all") {
      const serviceItems = all.filter((i) => i.isService);
      const gameItems = all
        .filter((i) => !i.isService)
        .sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { sensitivity: "base", numeric: true })
        );
      all = [...serviceItems, ...gameItems];
    } else if (filter === "under100") {
      all = all.filter((item) => getItemMinPrice(item) <= 100);
      all.sort((a, b) => {
        const priceDiff = getItemMinPrice(a) - getItemMinPrice(b);
        if (priceDiff !== 0) return priceDiff;
        const popDiff = getPopularityScore(b) - getPopularityScore(a);
        if (popDiff !== 0) return popDiff;
        return a.name.localeCompare(b.name, undefined, { sensitivity: "base", numeric: true });
      });
    } else if (filter === "lowToHigh") {
      all.sort((a, b) => {
        const priceDiff = getItemMinPrice(a) - getItemMinPrice(b);
        if (priceDiff !== 0) return priceDiff;
        const popDiff = getPopularityScore(b) - getPopularityScore(a);
        if (popDiff !== 0) return popDiff;
        return a.name.localeCompare(b.name, undefined, { sensitivity: "base", numeric: true });
      });
    } else if (filter === "actionFirst") {
      const isAction = (i: ProductItem) => i.genre.toLowerCase().includes("action");
      all.sort((a, b) => (isAction(b) ? 1 : 0) - (isAction(a) ? 1 : 0));
    } else if (filter === "racingFirst") {
      const isRacing = (i: ProductItem) =>
        i.genre.toLowerCase().includes("racing") || i.genre.toLowerCase().includes("driving");
      all.sort((a, b) => (isRacing(b) ? 1 : 0) - (isRacing(a) ? 1 : 0));
    } else if (filter === "popularFirst") {
      all.sort((a, b) => {
        const popDiff = getPopularityScore(b) - getPopularityScore(a);
        if (popDiff !== 0) return popDiff;
        return a.name.localeCompare(b.name, undefined, { sensitivity: "base", numeric: true });
      });
    }

    return all;
  }, [filter, searchQuery]);

  const displayedItems = isHomeView
    ? filteredItems.slice(0, limit)
    : filteredItems.slice(0, visibleCount);

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
            className={`filter-pill ${filter === "popularFirst" ? "active" : ""}`}
            onClick={() => setFilter("popularFirst")}
          >
            🔥 Popular First
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "lowToHigh" ? "active" : ""}`}
            onClick={() => setFilter("lowToHigh")}
          >
            📉 Low to High
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "actionFirst" ? "active" : ""}`}
            onClick={() => setFilter("actionFirst")}
          >
            💥 Action First
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "racingFirst" ? "active" : ""}`}
            onClick={() => setFilter("racingFirst")}
          >
            🏎️ Racing First
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            🔤 A to Z
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "under100" ? "active" : ""}`}
            onClick={() => setFilter("under100")}
          >
            💰 Under 100
          </button>
          <button
            type="button"
            className={`filter-pill ${filter === "services" ? "active" : ""}`}
            onClick={() => setFilter("services")}
          >
            📺 Streaming Passes
          </button>
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
          <>
            <div className="product-grid">
              {displayedItems.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  defaultToCheapest={filter === "under100"}
                />
              ))}
            </div>

            {!isHomeView && filteredItems.length > visibleCount && (
              <div
                style={{
                  textAlign: "center",
                  marginTop: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.85rem",
                }}
              >
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.92rem",
                    margin: 0,
                  }}
                >
                  Showing <b>{displayedItems.length}</b> of <b>{filteredItems.length}</b> items
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.8rem",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setVisibleCount((prev) => prev + BATCH_SIZE)}
                    style={{
                      minHeight: "2.8rem",
                      padding: "0.55rem 1.8rem",
                      fontSize: "0.92rem",
                    }}
                  >
                    ⚡ Load More Games (+{Math.min(BATCH_SIZE, filteredItems.length - visibleCount)})
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setVisibleCount(filteredItems.length)}
                    style={{
                      minHeight: "2.8rem",
                      padding: "0.55rem 1.4rem",
                      fontSize: "0.92rem",
                    }}
                  >
                    Show All ({filteredItems.length})
                  </button>
                </div>
              </div>
            )}

            {!isHomeView && filteredItems.length > BATCH_SIZE && visibleCount >= filteredItems.length && (
              <p
                style={{
                  textAlign: "center",
                  color: "var(--text-muted)",
                  fontSize: "0.88rem",
                  marginTop: "2rem",
                }}
              >
                ✓ All {filteredItems.length} items loaded.
              </p>
            )}
          </>
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
