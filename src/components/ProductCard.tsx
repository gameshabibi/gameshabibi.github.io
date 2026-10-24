"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductItem } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product }: { product: ProductItem }) {
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

  // Find default variant: popular games default to ₹149 option, others to cheapest
  const defaultIdx = () => {
    if (!product.variants || product.variants.length <= 1) return 0;

    if (isPopularGame(product)) {
      const idx149 = product.variants.findIndex((v) => v.price === 149);
      if (idx149 !== -1) return idx149;
      const sharedIdx = product.variants.findIndex((v) =>
        v.name.toLowerCase().includes("shared") || v.name.toLowerCase().includes("offline")
      );
      if (sharedIdx !== -1) return sharedIdx;
    }

    // Default to the cheapest available option
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

  const [selectedVariantIdx, setSelectedVariantIdx] = useState(defaultIdx);

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
          <select
            className="variant-selector"
            value={selectedVariantIdx}
            onChange={(e) => setSelectedVariantIdx(Number(e.target.value))}
            aria-label={`Select access type for ${product.name}`}
          >
            {product.variants.map((v, idx) => (
              <option key={idx} value={idx}>
                {v.name} — ₹{v.price}
                {v.name.toLowerCase().includes("budget") ? " (No Offers)" : ""}
              </option>
            ))}
          </select>
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
