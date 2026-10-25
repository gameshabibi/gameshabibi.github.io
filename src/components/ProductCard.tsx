"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ProductItem } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: ProductItem;
  defaultToCheapest?: boolean;
}

export function ProductCard({ product, defaultToCheapest = false }: ProductCardProps) {
  const { addItem } = useCart();
  // Check if this is a popular/flagship game
  const isPopularGame = (item: ProductItem) => {
    if (item.badge && item.badge !== "Budget Pick") return true;
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
    const name = item.name.toLowerCase();
    return POPULAR_KEYS.some((k) => name.includes(k));
  };

  const getCheapestIdx = () => {
    if (!product.variants || product.variants.length <= 1) return 0;
    let minIdx = 0;
    let minPrice = product.variants[0].price;
    for (let i = 1; i < product.variants.length; i++) {
      if (product.variants[i].price < minPrice) {
        minPrice = product.variants[i].price;
        minIdx = i;
      }
    }
    return minIdx;
  };

  // Find default variant: if defaultToCheapest (under 100), choose lowest option.
  // Otherwise, popular games default to ₹149 option, others to cheapest.
  const defaultIdx = () => {
    if (!product.variants || product.variants.length <= 1) return 0;

    if (defaultToCheapest) {
      return getCheapestIdx();
    }

    if (isPopularGame(product)) {
      const idx149 = product.variants.findIndex((v) => v.price === 149);
      if (idx149 !== -1) return idx149;
      const sharedIdx = product.variants.findIndex((v) =>
        v.name.toLowerCase().includes("shared") || v.name.toLowerCase().includes("offline")
      );
      if (sharedIdx !== -1) return sharedIdx;
    }

    return getCheapestIdx();
  };

  const [selectedVariantIdx, setSelectedVariantIdx] = useState(defaultIdx);

  // When defaultToCheapest changes to true (e.g. user chooses 'Under 100'), switch selection to lowest price
  useEffect(() => {
    if (defaultToCheapest) {
      setSelectedVariantIdx(getCheapestIdx());
    }
  }, [defaultToCheapest, product]);

  const currentVariant = product.variants ? product.variants[selectedVariantIdx] : null;
  const currentPrice = currentVariant ? currentVariant.price : (product.price || 0);

  const handleAdd = () => {
    if (typeof window !== "undefined" && navigator.vibrate) {
      navigator.vibrate(15);
    }
    addItem({
      game: product.name,
      price: currentPrice,
      variant: currentVariant ? currentVariant.name : undefined,
      img: product.img,
    });
  };

  return (
    <article className="product-card">
      <div className="card-media">
        <Image
          src={product.img}
          alt={product.name}
          width={400}
          height={225}
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
        {product.badge && <span className="card-badge">{product.badge}</span>}
      </div>

      <h3 className="card-title">{product.name}</h3>
      <p className="card-genre">{product.genre}</p>

      <div className="card-footer">
        {product.variants && product.variants.length > 1 && (
          <div
            className="variant-chip-group"
            role="radiogroup"
            aria-label={`Select access type for ${product.name}`}
          >
            {product.variants.map((v, idx) => {
              const isSelected = selectedVariantIdx === idx;
              const isBudget = v.name.toLowerCase().includes("budget");
              const isPersonal = v.name.toLowerCase().includes("in your steam") || v.name.toLowerCase().includes("personal");
              const isShared = v.name.toLowerCase().includes("shared");
              
              const shortLabel = isPersonal
                ? "Personal"
                : isShared
                ? "Shared"
                : isBudget
                ? "Budget"
                : v.name.length > 12
                ? v.name.slice(0, 10) + "…"
                : v.name;

              return (
                <button
                  key={idx}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  title={`${v.name} — ₹${v.price}${isBudget ? " (No Offers)" : ""}`}
                  className={`variant-chip ${isSelected ? "is-selected" : ""} ${isBudget ? "is-budget" : ""}`}
                  onClick={() => setSelectedVariantIdx(idx)}
                >
                  <span className="variant-chip-name">{shortLabel}</span>
                  <span className="variant-chip-price">₹{v.price}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="card-price-row">
          <span className="card-price">₹{currentPrice}</span>
          <button
            type="button"
            className="btn card-btn"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
          >
            <span className="card-btn-full">+ Add to Cart</span>
            <span className="card-btn-compact">+ Add</span>
          </button>
        </div>
      </div>
    </article>
  );
}
