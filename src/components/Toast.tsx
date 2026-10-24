"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export function Toast() {
  const { toast } = useCart();
  if (!toast) return null;

  return (
    <div className="toast-box" role="status" aria-live="polite">
      <span>🎮</span>
      <span>{toast}</span>
    </div>
  );
}
