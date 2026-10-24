"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductItem } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product }: { product: ProductItem }) {
  const { addItem } = useCart();
  // Find default variant: prioritize Shared Steam Account as requested
  const defaultIdx = () => {
    if (!product.variants || product.variants.length <= 1) return 0;
    const sharedIdx = product.variants.findIndex((v) =>
      v.name.toLowerCase().includes("shared") || v.name.toLowerCase().includes("offline")
    );
    return sharedIdx !== -1 ? sharedIdx : 0;
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
