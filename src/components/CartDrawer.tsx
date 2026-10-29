"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
    couponEligibleCount,
    subtotal,
    bundleDiscount,
    total,
    bundleCount,
    saveOrder,
    playFeedback,
    showToast,
  } = useCart();

  const [checkoutStep, setCheckoutStep] = useState<1 | 2 | 3>(1);
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

  useEffect(() => {
    if (!isDrawerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDrawer();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawerOpen, closeDrawer]);

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
    const startTime = Date.now();

    const generatedId = `GH-${Date.now().toString().slice(-6)}`;
    const gamesSummary = items
      .map((i) => `${i.game}${i.variant ? ` (${i.variant})` : ""} x ${i.qty}`)
      .join(", ");

    const formData = new FormData();
    formData.append("name", customerName);
    formData.append("email", customerEmail);
    formData.append("utr", customerUtr || "Not provided");
    formData.append("coupon", appliedCoupon || "None");
    formData.append("games", gamesSummary);
    formData.append("items", gamesSummary);
    formData.append("total", total.toString());
    formData.append("orderId", generatedId);
    formData.append("photo", paymentFile);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || (!data.ok && !data.success)) {
        throw new Error(data.error || data.message || "Order dispatch error");
      }

      const elapsed = Date.now() - startTime;
      if (elapsed < 800) {
        await new Promise((r) => setTimeout(r, 800 - elapsed));
      }

      playFeedback("order-success");

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
      clearCart();

      setPlacedOrderId(generatedId);
      setPlacedOrderDetails({
        orderId: generatedId,
        games: gamesSummary,
        total,
        utr: customerUtr,
        customerName: customerName,
      });

      setPaymentFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      showToast("Order submitted successfully!");
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
        <div className="drawer-header">
          <h2>
            {checkoutStep === 1
              ? `Cart (${items.reduce((s, i) => s + i.qty, 0)})`
              : checkoutStep === 2
              ? "UPI Payment"
              : "Verify & Dispatch"}
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Link
              href="/cart"
              onClick={closeDrawer}
              style={{
                fontSize: "0.75rem",
                color: "var(--accent)",
                textDecoration: "underline",
                fontWeight: 700,
              }}
            >
              Full Page ↗
            </Link>
            <button
              type="button"
              className="drawer-close"
              onClick={closeDrawer}
              aria-label="Close Cart Drawer"
            >
              &times;
            </button>
          </div>
        </div>

        <div className="drawer-body">
          {placedOrderId ? (
            <div className="order-success-card" style={{ margin: "0.5rem 0" }}>
              <div className="order-success-icon">✔</div>
              <h3 className="order-success-title">Order Confirmed!</h3>
              <p className="order-success-desc">
                Payment receipt submitted. Our team is verifying details for instant key dispatch.
              </p>

              <div className="order-id-badge-wrap">
                <span className="order-id-label">Order ID:</span>
                <span className="order-id-code">{placedOrderId}</span>
                <button
                  type="button"
                  className="order-id-inline-copy"
                  onClick={() => handleCopyOrderId(placedOrderId)}
                  title="Copy Order ID"
                >
                  {isCopied ? "✔ Copied" : "📋 Copy"}
                </button>
              </div>

              <div className="order-dispatch-note">
                <strong>⚡ Instant Delivery Status: </strong>
                Credentials and access guide will be delivered via WhatsApp within 15–30 minutes.
              </div>

              <div className="order-success-actions">
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
                  className="btn btn-whatsapp"
                >
                  💬 Chat on WhatsApp
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setPlacedOrderId(null);
                    setPlacedOrderDetails(null);
                    setCheckoutStep(1);
                    closeDrawer();
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="empty">
              <p>Your cart is empty.</p>
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
              <div className="checkout-stepper">
                <button
                  type="button"
                  className={`step-pill ${checkoutStep === 1 ? "is-active" : "is-completed"}`}
                  onClick={() => setCheckoutStep(1)}
                >
                  <span className="step-dot">{checkoutStep > 1 ? "✓" : "1"}</span>
                  <span className="step-text">1. Cart</span>
                </button>
                <div className="step-arrow">›</div>
                <button
                  type="button"
                  className={`step-pill ${
                    checkoutStep === 2
                      ? "is-active"
                      : checkoutStep > 2
                      ? "is-completed"
                      : ""
                  }`}
                  onClick={() => setCheckoutStep(2)}
                >
                  <span className="step-dot">{checkoutStep > 2 ? "✓" : "2"}</span>
                  <span className="step-text">2. Pay</span>
                </button>
                <div className="step-arrow">›</div>
                <button
                  type="button"
                  className={`step-pill ${checkoutStep === 3 ? "is-active" : ""}`}
                  onClick={() => setCheckoutStep(3)}
                >
                  <span className="step-dot">3</span>
                  <span className="step-text">3. Verify</span>
                </button>
              </div>

              {/* STEP 1: REVIEW ITEMS */}
              {checkoutStep === 1 && (
                <>
                  <div className="bundle-banner" style={{ marginTop: 0 }}>
                    <span>🎁</span>
                    <div>
                      <strong>Bundle Savings: </strong>
                      <span>2 games: 25% OFF • 3 games: 40% OFF • 4+ games: 47% OFF</span>
                    </div>
                  </div>

                  <div className="cart-items-list">
                    {items.map((item, idx) => (
                      <div className="cart-item-row" key={item.id}>
                        <div className="cart-item-info">
                          <strong className="cart-item-title">{item.game}</strong>
                          {item.variant && <span className="cart-item-variant">{item.variant}</span>}
                        </div>

                        <div className="cart-item-right">
                          <div className="cart-item-ctrls">
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() => updateQty(idx, -1)}
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="qty-val">{item.qty}</span>
                            <button
                              type="button"
                              className="qty-btn"
                              onClick={() => updateQty(idx, 1)}
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
                            className="cart-item-remove-btn"
                            onClick={() => removeItem(idx)}
                            aria-label="Remove item"
                          >
                            &times;
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Promo / Coupon Code Section */}
                  <div
                    style={{
                      background: "var(--card)",
                      padding: "0.85rem",
                      border: "1px solid var(--line-strong)",
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        color: "var(--text-secondary)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      Have a Promo / Coupon Code?
                    </label>
                    {appliedCoupon ? (
                      <div className="applied" style={{ margin: 0 }}>
                        <span style={{ fontWeight: 700 }}>
                          {couponEligibleCount > 1
                            ? `🏷️ ${appliedCoupon} APPLIED (-₹${couponDiscount})`
                            : `🏷️ ${appliedCoupon} (Requires >1 game: -₹0)`}
                        </span>
                        <button
                          type="button"
                          className="rm"
                          onClick={removeCoupon}
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleApplyCoupon}
                        style={{ display: "flex", gap: "0.5rem" }}
                      >
                        <input
                          type="text"
                          placeholder="HABIBI10, FIRST50"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          className="field"
                          style={{ flex: 1, textTransform: "uppercase" }}
                        />
                        <button type="submit" className="btn ghost sm">
                          Apply
                        </button>
                      </form>
                    )}
                    {couponMessage && !appliedCoupon && (
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.76rem",
                          color: "var(--danger)",
                          marginTop: "0.35rem",
                        }}
                      >
                        {couponMessage}
                      </span>
                    )}
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="pricing-card">
                    <div className="pricing-row">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    {bundleDiscount > 0 && (
                      <div className="pricing-row" style={{ color: "var(--red)" }}>
                        <span>Bundle Discount ({bundleCount} titles)</span>
                        <span>−₹{bundleDiscount}</span>
                      </div>
                    )}
                    {couponDiscount > 0 && (
                      <div className="pricing-row" style={{ color: "var(--red)" }}>
                        <span>Coupon Discount ({appliedCoupon})</span>
                        <span>−₹{couponDiscount}</span>
                      </div>
                    )}
                    <div className="pricing-row total-row">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn red btn-block"
                    onClick={() => setCheckoutStep(2)}
                  >
                    Proceed to Pay • ₹{total} →
                  </button>
                </>
              )}

              {/* STEP 2: UPI PAYMENT */}
              {checkoutStep === 2 && (
                <div style={{ display: "grid", gap: "1rem" }}>
                  <div className="upi-box">
                    <div className="upi-box-header">
                      <h3>Instant UPI Payment</h3>
                      <span className="upi-instant-badge">₹{total}</span>
                    </div>

                    <div className="upi-id-pill" style={{ marginBottom: "0.8rem" }}>
                      <span>
                        UPI ID: <strong>{PAYMENT_ID}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyUpi}
                        className="upi-copy-action-btn"
                        aria-label="Copy UPI ID"
                      >
                        {isUpiCopied ? "✔ Copied" : "Copy"}
                      </button>
                    </div>

                    <div
                      style={{
                        textAlign: "center",
                        padding: "1rem",
                        background: "var(--paper)",
                        border: "1px solid var(--line-strong)",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 0.6rem",
                          fontSize: "0.82rem",
                          color: "var(--text-secondary)",
                          fontWeight: 600,
                        }}
                      >
                        Scan QR Code with any UPI App
                      </p>
                      {qrSrc ? (
                        <div style={{ display: "inline-grid", gap: "0.6rem", justifyItems: "center" }}>
                          <div className="qr" style={{ display: "inline-block" }}>
                            <Image
                              src={qrSrc}
                              alt="Payment UPI QR"
                              width={170}
                              height={170}
                              unoptimized
                              style={{ display: "block" }}
                            />
                          </div>
                          <a
                            href={qrSrc}
                            download={`GamesHabibi-UPI-Rs${total}.png`}
                            className="btn ghost sm"
                          >
                            ⬇ Download QR Image
                          </a>
                        </div>
                      ) : (
                        <div
                          style={{
                            height: "170px",
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          Generating QR...
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setCheckoutStep(1)}
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      className="btn red"
                      onClick={() => setCheckoutStep(3)}
                      style={{ flex: 1 }}
                    >
                      I&apos;ve Paid → Verify
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: DISPATCH & VERIFY */}
              {checkoutStep === 3 && (
                <form onSubmit={handleSubmit} className="order-form">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <h3 style={{ fontFamily: "var(--serif)", margin: 0, fontSize: "1.1rem" }}>
                      Upload Proof &amp; Dispatch
                    </h3>
                    <span className="price" style={{ color: "var(--red)" }}>
                      ₹{total}
                    </span>
                  </div>

                  <div>
                    <label htmlFor="drawerCustomerName">Your Full Name</label>
                    <input
                      type="text"
                      id="drawerCustomerName"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={customerName}
                      onChange={(e) => handleNameChange(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="drawerCustomerEmail">Your Email</label>
                    <input
                      type="email"
                      id="drawerCustomerEmail"
                      required
                      placeholder="rahul@example.com"
                      value={customerEmail}
                      onChange={(e) => handleEmailChange(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="drawerCustomerUtr">
                      12-Digit UPI UTR / Ref (Optional)
                    </label>
                    <input
                      type="text"
                      id="drawerCustomerUtr"
                      placeholder="12-digit UPI UTR / Ref (Optional)"
                      maxLength={16}
                      value={customerUtr}
                      onChange={(e) =>
                        setCustomerUtr(e.target.value.replace(/\s+/g, ""))
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="drawerPaymentProof">
                      Payment Screenshot (Required)
                    </label>
                    <div className="mobile-file-picker">
                      <input
                        type="file"
                        id="drawerPaymentProof"
                        accept="image/*"
                        required
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden-file-input"
                      />
                      <label
                        htmlFor="drawerPaymentProof"
                        className="mobile-file-label"
                      >
                        <span className="file-icon">📸</span>
                        <span className="file-desc">
                          {paymentFile ? (
                            <strong style={{ color: "var(--mint)" }}>
                              Attached: {paymentFile.name}
                            </strong>
                          ) : (
                            "Tap to choose screenshot"
                          )}
                        </span>
                        {paymentFile && (
                          <span className="file-ready-tag">Ready ✓</span>
                        )}
                      </label>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      marginTop: "0.6rem",
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setCheckoutStep(2)}
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="btn red"
                      disabled={isSubmitting}
                      style={{ flex: 1 }}
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : `Place Order • ₹${total}`}
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </aside>
    </>
  );
}
