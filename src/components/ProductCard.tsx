"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProductItem } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: ProductItem;
  defaultToCheapest?: boolean;
}

export function ProductCard({
  product,
  defaultToCheapest = false,
}: ProductCardProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  // Compute initials for fallback watermark
  const initials = product.name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

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

  const defaultIdx = () => {
    if (!product.variants || product.variants.length <= 1) return 0;
    if (defaultToCheapest) return getCheapestIdx();

    // Default to Shared tier (usually 149) if present
    const idx149 = product.variants.findIndex((v) => v.price === 149);
    if (idx149 !== -1) return idx149;

    const sharedIdx = product.variants.findIndex((v) =>
      v.name.toLowerCase().includes("shared") || v.name.toLowerCase().includes("offline")
    );
    if (sharedIdx !== -1) return sharedIdx;

    return getCheapestIdx();
  };

  const [selectedVariantIdx, setSelectedVariantIdx] = useState(defaultIdx);

  const currentVariant = product.variants ? product.variants[selectedVariantIdx] : null;
  const currentPrice = currentVariant ? currentVariant.price : (product.price || 0);

  const variantLabel = currentVariant
    ? currentVariant.name.toLowerCase().includes("in your steam") ||
      currentVariant.name.toLowerCase().includes("personal")
      ? "Personal"
      : currentVariant.name.toLowerCase().includes("shared")
      ? "Shared"
      : currentVariant.name.toLowerCase().includes("budget")
      ? "Budget"
      : currentVariant.name
    : product.badge
    ? product.badge
    : "Pass";

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && navigator.vibrate) {
      navigator.vibrate(14);
    }
    addItem({
      game: product.name,
      price: currentPrice,
      variant: currentVariant ? currentVariant.name : undefined,
      img: product.img,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <article className="card">
      <Link
        href={`/catalog?q=${encodeURIComponent(product.name)}`}
        className="cover"
        data-ini={initials}
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLElement).style.display = "none";
          }}
        />
        {product.badge && <span className="tag">{product.badge}</span>}
      </Link>

      <Link
        href={`/catalog?q=${encodeURIComponent(product.name)}`}
        className="card-title"
      >
        {product.name}
      </Link>

      {product.variants && product.variants.length > 1 && (
        <div className="variant-chip-group" role="radiogroup">
          {product.variants.map((v, idx) => {
            const isSelected = selectedVariantIdx === idx;
            const isPersonal =
              v.name.toLowerCase().includes("in your steam") ||
              v.name.toLowerCase().includes("personal");
            const isShared = v.name.toLowerCase().includes("shared");
            const isBudget = v.name.toLowerCase().includes("budget");

            const label = isPersonal
              ? "Personal"
              : isShared
              ? "Shared"
              : isBudget
              ? "Budget"
              : v.name;

            return (
              <button
                key={idx}
                type="button"
                className={`variant-chip ${isSelected ? "is-selected" : ""}`}
                onClick={() => setSelectedVariantIdx(idx)}
                title={`${v.name} — ₹${v.price}`}
              >
                <span>{label}</span>
                <span className="variant-chip-price">₹{v.price}</span>
              </button>
            );
          })}
        </div>
      )}

      <div className="card-meta">
        <span className="card-price">
          <small>{variantLabel}</small>
          ₹{currentPrice}
        </span>
        <button
          type="button"
          className={`card-add ${justAdded ? "done" : ""}`}
          onClick={handleAdd}
          aria-label={`Add ${product.name} to cart`}
        >
          {justAdded ? "✓" : "+"}
        </button>
      </div>
    </article>
  );
}
