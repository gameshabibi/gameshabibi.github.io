"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export function Toast() {
  const { toast, openDrawer } = useCart();
  if (!toast) return null;

  const isAddAction = toast.toLowerCase().includes("added");

  return (
    <div className="toast-box" role="status" aria-live="polite">
      <span className="toast-dot" />
      <span className="toast-text">{toast}</span>
      {isAddAction && (
        <button
          type="button"
          onClick={openDrawer}
          className="toast-btn"
          aria-label="Open Cart"
        >
          Cart →
        </button>
      )}
    </div>
  );
}
