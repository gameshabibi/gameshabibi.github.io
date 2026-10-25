"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { generateUPIQRCode } from "@/lib/qr";
import { getOrderWhatsAppUrl, WhatsAppOrderDetails } from "@/lib/whatsapp";

const PAYMENT_ID = process.env.NEXT_PUBLIC_PAYMENT_ID || "prashantsingh896@ybl";

export function CartDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    removeItem,
    updateQty,
    clearCart,
    tip,
    setTip,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    couponDiscount,
    subtotal,
    bundleDiscount,
    total,
    bundleCount,
    saveOrder,
    playFeedback,
    showToast,
  } = useCart();

  const [qrSrc, setQrSrc] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [customerUtr, setCustomerUtr] = useState<string>("");
  const [couponInput, setCouponInput] = useState<string>("");
  const [couponMessage, setCouponMessage] = useState<string>("");
  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [placedOrderId, setPlacedOrderId] = useState<string | null>(null);
  const [placedOrderDetails, setPlacedOrderDetails] = useState<WhatsAppOrderDetails | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isUpiCopied, setIsUpiCopied] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopyUpi = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(PAYMENT_ID);
      setIsUpiCopied(true);
      if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(15);
      showToast("UPI ID copied to clipboard!");
      setTimeout(() => setIsUpiCopied(false), 2500);
    }
  };

  // Auto-restore customer contact info from draft storage
  useEffect(() => {
    try {
      const savedName = sessionStorage.getItem("gh_draft_name");
      const savedEmail = sessionStorage.getItem("gh_draft_email");
      if (savedName) setCustomerName(savedName);
      if (savedEmail) setCustomerEmail(savedEmail);
    } catch {}
  }, []);

  const handleNameChange = (val: string) => {
    setCustomerName(val);
    try {
      sessionStorage.setItem("gh_draft_name", val);
    } catch {}
  };

  const handleEmailChange = (val: string) => {
    setCustomerEmail(val);
    try {
      sessionStorage.setItem("gh_draft_email", val);
    } catch {}
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    setCouponMessage(res.message);
    if (res.success) {
      setCouponInput("");
    }
  };

  // Generate UPI deep link & QR code whenever total changes
  const upiUrl = `upi://pay?pa=${encodeURIComponent(
    PAYMENT_ID
  )}&pn=Games%20Habibi&am=${total.toFixed(2)}&cu=INR&tn=Games%20Habibi%20Order`;

  useEffect(() => {
    if (total > 0 && isDrawerOpen) {
      generateUPIQRCode(upiUrl).then((url) => setQrSrc(url));
    }
  }, [total, isDrawerOpen, upiUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      playFeedback("error");
      showToast("Screenshot must be under 5 MB");
      e.target.value = "";
      return;
    }

    if (!file.type.startsWith("image/")) {
      playFeedback("error");
      showToast("Only image files (JPG, PNG, WEBP) are allowed");
      e.target.value = "";
      return;
    }

    setPaymentFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      playFeedback("error");
      showToast("Your cart is empty");
      return;
    }

    if (!paymentFile) {
      playFeedback("error");
      showToast("Please select your payment screenshot");
      return;
    }

    setIsSubmitting(true);

    const generatedId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const gamesSummary = items
      .map((i) => `${i.game}${i.variant ? ` (${i.variant})` : ""} x ${i.qty}`)
      .join(", ");

    const formData = new FormData();
    formData.append("name", customerName);
    formData.append("email", customerEmail);
    formData.append("utr", customerUtr || "Not provided");
    formData.append("coupon", appliedCoupon || "None");
    formData.append("games", gamesSummary);
    formData.append("total", total.toString());
    formData.append("orderId", generatedId);
    formData.append("photo", paymentFile);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Order dispatch error");
      }

      // Success
      playFeedback("success");
      const orderRecord = {
        id: generatedId,
        date: new Date().toISOString(),
        name: customerName,
        email: customerEmail,
        games: gamesSummary,
        total,
        utr: customerUtr,
        coupon: appliedCoupon || undefined,
      };
      saveOrder(orderRecord);

      setPlacedOrderId(generatedId);
      setPlacedOrderDetails({
        orderId: generatedId,
        games: gamesSummary,
        total,
        utr: customerUtr,
        customerName: customerName,
      });
      clearCart();
      setPaymentFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err: unknown) {
      playFeedback("error");
      const msg = err instanceof Error ? err.message : "Submission failed";
      showToast(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyOrderId = (id: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(id).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
    }
  };

  return (
    <>
      <div
        className={`cart-backdrop ${isDrawerOpen ? "is-open" : ""}`}
        onClick={closeDrawer}
        aria-hidden={!isDrawerOpen}
      />

      <aside
        className={`cart-drawer ${isDrawerOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Cart"
      >
        <div className="drawer-handle" aria-hidden="true" />
        <div className="drawer-header">
          <h2>Your Cart ({items.reduce((s, i) => s + i.qty, 0)})</h2>
          <button
            type="button"
            className="drawer-close"
            onClick={closeDrawer}
            aria-label="Close Cart Drawer"
          >
            &times;
          </button>
        </div>

        <div className="drawer-body">
          {placedOrderId ? (
            <div
              style={{
                textAlign: "center",
                padding: "2rem 1rem",
                background: "var(--surface-panel)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--mint)",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  background: "rgba(0, 255, 179, 0.15)",
                  color: "var(--mint)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "1.8rem",
                  margin: "0 auto 1rem",
                }}
              >
                ✔
              </div>
              <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.4rem" }}>
                Order Placed Successfully!
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  margin: "0 0 1.2rem",
                }}
              >
                Your payment screenshot has been submitted to store operators. Save
                your Order ID below:
              </p>

              <div
                style={{
                  display: "inline-block",
                  padding: "0.6rem 1.4rem",
                  background: "var(--accent-soft)",
                  border: "1px solid rgba(245, 166, 35, 0.35)",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-data)",
                  fontSize: "1.2rem",
                  color: "var(--accent)",
                  fontWeight: 700,
                  marginBottom: "1.2rem",
                }}
              >
                {placedOrderId}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.6rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={getOrderWhatsAppUrl(
                    placedOrderDetails || {
                      orderId: placedOrderId,
                      games: "Digital Game Pass",
                      total: total,
                    }
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: "#25D366",
                    color: "#04101c",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 0.4rem 1.2rem rgba(37, 211, 102, 0.35)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  💬 Confirm on WhatsApp
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleCopyOrderId(placedOrderId)}
                >
                  {isCopied ? "✔ Copied!" : "📋 Copy ID"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setPlacedOrderId(null);
                    setPlacedOrderDetails(null);
                    closeDrawer();
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "3.5rem 1rem",
                color: "var(--text-muted)",
              }}
            >
              <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                Your cart is empty.
              </p>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeDrawer}
              >
                Browse Games
              </button>
            </div>
          ) : (
            <>
              {/* Bundle Banner */}
              <div className="bundle-banner">
                <span>🎁</span>
                <div>
                  <strong>Bundle Savings: </strong>
                  <span>2 games: 25% OFF • 3 games: 40% OFF • 4+ games: 47% OFF</span>
                </div>
              </div>

              {/* Items List */}
              <div className="cart-items-list">
                {items.map((item, idx) => (
                  <div className="cart-item-row" key={item.id}>
                    <div className="cart-item-info">
                      <strong>{item.game}</strong>
                      {item.variant && <span>{item.variant}</span>}
                      {item.variant?.toLowerCase().includes("budget") && (
                        <span style={{ fontSize: "0.72rem", color: "var(--accent-gold, #f59e0b)" }}>
                          ⚡ Budget (No Offers)
                        </span>
                      )}
                    </div>

                    <div className="cart-item-ctrls">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => {
                          if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(10);
                          updateQty(idx, -1);
                        }}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span style={{ fontFamily: "var(--font-data)", minWidth: "1.2rem", textAlign: "center", fontWeight: 700 }}>
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => {
                          if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(10);
                          updateQty(idx, 1);
                        }}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <div className="cart-item-price">
                      ₹{item.price * item.qty}
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(idx)}
                      style={{ color: "var(--danger)", fontSize: "1rem", marginLeft: "0.2rem" }}
                      aria-label="Remove item"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>

              {/* Promo / Coupon Code Section */}
              <div style={{ background: "rgba(25, 18, 48, 0.6)", padding: "0.85rem", borderRadius: "var(--radius-sm)", border: "1px solid rgba(245, 166, 35, 0.12)" }}>
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.35rem" }}>
                  Have a Promo / Coupon Code?
                </label>
                {appliedCoupon ? (
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(0, 255, 179, 0.1)", border: "1px solid var(--mint)", padding: "0.4rem 0.8rem", borderRadius: "var(--radius-sm)" }}>
                    <span style={{ color: "var(--mint)", fontWeight: 700, fontSize: "0.88rem", fontFamily: "var(--font-data)" }}>
                      🏷️ {appliedCoupon} APPLIED (-₹{couponDiscount})
                    </span>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      style={{ color: "var(--danger)", fontSize: "0.82rem", fontWeight: 600 }}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} style={{ display: "flex", gap: "0.5rem" }}>
                    <input
                      type="text"
                      placeholder="e.g. HABIBI10, FIRST50"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      style={{
                        flex: 1,
                        background: "rgba(18, 14, 35, 0.9)",
                        border: "1px solid var(--border-soft)",
                        borderRadius: "var(--radius-sm)",
                        color: "var(--text-primary)",
                        padding: "0.45rem 0.75rem",
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      style={{ minHeight: "2.4rem", padding: "0.4rem 1rem", fontSize: "0.82rem" }}
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponMessage && !appliedCoupon && (
                  <span style={{ display: "block", fontSize: "0.76rem", color: "var(--warning)", marginTop: "0.35rem" }}>
                    {couponMessage}
                  </span>
                )}
              </div>

              {/* Tip Contribution */}
              <div>
                <label style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                  Storefront Tip / Support (Optional)
                </label>
                <div className="tip-box">
                  <input
                    type="number"
                    min="0"
                    value={tip}
                    onChange={(e) => setTip(Math.max(0, Number(e.target.value) || 0))}
                    placeholder="₹ Tip"
                  />
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Directly supports Games Habibi
                  </span>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="pricing-card">
                <div className="pricing-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                {bundleDiscount > 0 && (
                  <div className="pricing-row" style={{ color: "var(--mint)" }}>
                    <span>Bundle Discount ({bundleCount} titles)</span>
                    <span>-₹{bundleDiscount}</span>
                  </div>
                )}
                {couponDiscount > 0 && (
                  <div className="pricing-row" style={{ color: "var(--mint)" }}>
                    <span>Coupon Discount ({appliedCoupon})</span>
                    <span>-₹{couponDiscount}</span>
                  </div>
                )}
                {tip > 0 && (
                  <div className="pricing-row">
                    <span>Storefront Tip</span>
                    <span>+₹{tip}</span>
                  </div>
                )}
                <div className="pricing-row total-row">
                  <span>Total Amount</span>
                  <span>₹{total}</span>
                </div>
              </div>

              {/* Instant UPI Payment Box */}
              <div className="upi-box">
                <div className="upi-box-header">
                  <h3>🔐 Instant UPI Payment</h3>
                  <span className="upi-instant-badge">Instant Verification</span>
                </div>

                <div className="upi-actions-card">
                  <a href={upiUrl} className="upi-app-btn">
                    ⚡ Pay via UPI App (GPay / PhonePe / Paytm)
                  </a>

                  <div className="upi-id-pill">
                    <span className="upi-id-text">
                      UPI ID: <strong>{PAYMENT_ID}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyUpi}
                      className="upi-copy-action-btn"
                      aria-label="Copy UPI ID"
                    >
                      {isUpiCopied ? "✔ Copied" : "📋 Copy"}
                    </button>
                  </div>
                </div>

                <details className="upi-qr-accordion">
                  <summary className="upi-qr-summary">
                    <span>Show QR Code (For Desktop / Scanning)</span>
                    <span className="accordion-chevron">▼</span>
                  </summary>
                  <div className="upi-qr-content">
                    {qrSrc ? (
                      <div className="qr-frame">
                        <Image
                          src={qrSrc}
                          alt="Payment UPI QR"
                          width={170}
                          height={170}
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div style={{ height: "170px", display: "grid", placeItems: "center" }}>
                        Generating QR...
                      </div>
                    )}
                  </div>
                </details>
              </div>

              {/* Order Confirmation Form */}
              <form onSubmit={handleSubmit} className="order-form">
                <h3 style={{ margin: "0.5rem 0 0", fontSize: "1.1rem" }}>
                  Confirm & Submit Order
                </h3>

                <div>
                  <label htmlFor="customerName">Your Full Name</label>
                  <input
                    type="text"
                    id="customerName"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={customerName}
                    onChange={(e) => handleNameChange(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="customerEmail">Your Email</label>
                  <input
                    type="email"
                    id="customerEmail"
                    required
                    placeholder="rahul@example.com"
                    value={customerEmail}
                    onChange={(e) => handleEmailChange(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="customerUtr">
                    12-Digit UPI UTR / Reference ID (Optional)
                  </label>
                  <input
                    type="text"
                    id="customerUtr"
                    placeholder="12-digit UPI UTR / Ref (Optional)"
                    maxLength={16}
                    value={customerUtr}
                    onChange={(e) => setCustomerUtr(e.target.value.replace(/\s+/g, ""))}
                  />
                  <small>
                    Found in your UPI app transaction receipt for instant operator approval.
                  </small>
                </div>

                <div>
                  <label htmlFor="paymentProof">Payment Screenshot (Required)</label>
                  <div className="mobile-file-picker">
                    <input
                      type="file"
                      id="paymentProof"
                      accept="image/*"
                      required
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden-file-input"
                    />
                    <label htmlFor="paymentProof" className="mobile-file-label">
                      <span className="file-icon">📸</span>
                      <span className="file-desc">
                        {paymentFile ? (
                          <strong style={{ color: "var(--mint)" }}>
                            Attached: {paymentFile.name}
                          </strong>
                        ) : (
                          "Tap to choose screenshot from photo gallery"
                        )}
                      </span>
                      {paymentFile && (
                        <span className="file-ready-tag">Ready ✓</span>
                      )}
                    </label>
                  </div>
                  <small>Max file size: 5 MB (PNG, JPG, WEBP)</small>
                </div>

                <div className="drawer-sticky-action">
                  <button
                    type="submit"
                    className="btn btn-block"
                    disabled={isSubmitting}
                    style={{ minHeight: "3.2rem", fontSize: "1.05rem" }}
                  >
                    {isSubmitting ? "Submitting Order..." : `Submit Order • ₹${total}`}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </aside>
    </>
  );
}
