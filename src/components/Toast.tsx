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
      <span className="toast-dot" />
      <span className="toast-text">{toast}</span>
      {isAddAction && (
        <Link href="/cart" className="toast-btn">
          Cart →
        </Link>
      )}
    </div>
  );
}
