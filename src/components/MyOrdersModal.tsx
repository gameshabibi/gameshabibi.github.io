"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export function MyOrdersModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { pastOrders } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="cart-backdrop is-open"
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(92%, 560px)",
          maxHeight: "85vh",
          overflowY: "auto",
          background: "var(--surface-panel-strong)",
          border: "1px solid var(--border-soft)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-strong)",
          zIndex: 1100,
          padding: "1.6rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.2rem",
            borderBottom: "1px solid rgba(245, 166, 35, 0.15)",
            paddingBottom: "0.8rem",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.6rem",
              margin: 0,
            }}
          >
            📦 My Order History
          </h2>
          <button
            type="button"
            className="drawer-close"
            onClick={onClose}
            aria-label="Close Order History"
          >
            &times;
          </button>
        </div>

        {pastOrders.length === 0 ? (
          <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "2rem 0" }}>
            No past orders saved on this browser yet.
          </p>
        ) : (
          <div style={{ display: "grid", gap: "1rem" }}>
            {pastOrders.map((ord) => {
              const formattedDate = new Date(ord.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              });

              const emailSubject = encodeURIComponent(`Order Inquiry: ${ord.id}`);
              const emailBody = encodeURIComponent(
                `Hi Games Habibi Support,\n\nI am inquiring about my order ${ord.id}.\nItems: ${ord.games}\nTotal: ₹${ord.total}\n\nThank you!`
              );

              return (
                <div
                  key={ord.id}
                  style={{
                    background: "rgba(25, 18, 48, 0.7)",
                    border: "1px solid rgba(245, 166, 35, 0.15)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1rem",
                    display: "grid",
                    gap: "0.4rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-data)",
                        color: "var(--accent)",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                      }}
                    >
                      {ord.id}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                      {formattedDate}
                    </span>
                  </div>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <strong>Items:</strong> {ord.games}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "0.4rem",
                      paddingTop: "0.4rem",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>
                      Total: ₹{ord.total}
                    </span>
                    <a
                      href={`mailto:mr.bgmi9098@gmail.com?subject=${emailSubject}&body=${emailBody}`}
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--mint)",
                        textDecoration: "underline",
                      }}
                    >
                      Contact Support
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
