"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export function Toast() {
  const { toast } = useCart();
  if (!toast) return null;

  const isAddAction = toast.toLowerCase().includes("added");

  return (
    <div className="toast-box" role="status" aria-live="polite">
      <span>🎮</span>
      <span>{toast}</span>
      {isAddAction && (
        <Link
          href="/cart"
          style={{
            marginLeft: "0.4rem",
            color: "var(--accent)",
            fontWeight: 700,
            textDecoration: "underline",
            fontSize: "0.84rem",
          }}
        >
          View Cart →
        </Link>
      )}
    </div>
  );
}
