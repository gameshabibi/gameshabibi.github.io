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

  // Lock body scroll and listen for Escape key when cart drawer is open
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
    const startTime = Date.now();

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

      if (!res.ok || (!data.ok && !data.success)) {
        throw new Error(data.error || data.message || "Order dispatch error");
      }

      // Add minimum delay so user perceives loading progress
      const elapsed = Date.now() - startTime;
      if (elapsed < 800) {
        await new Promise((r) => setTimeout(r, 800 - elapsed));
      }

      // Success: Play distinct celebratory order success sound
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
        <div className="drawer-handle" aria-hidden="true" />
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
                fontSize: "0.78rem",
                color: "var(--accent)",
                textDecoration: "underline",
                fontWeight: 600,
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
                <strong>⚡ Instant Delivery Status:</strong>
                Credentials and access guide will be delivered via WhatsApp within 5–15 minutes.
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
              {/* 3-Step Interactive Stepper (Amazon/Flipkart Compact) */}
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
                            <span
                              style={{
                                fontSize: "0.72rem",
                                color: "var(--accent-gold, #f59e0b)",
                              }}
                            >
                              ⚡ Budget (No Offers)
                            </span>
                          )}
                        </div>

                        <div className="cart-item-ctrls">
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => {
                              if (typeof window !== "undefined" && navigator.vibrate)
                                navigator.vibrate(10);
                              updateQty(idx, -1);
                            }}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span
                            style={{
                              fontFamily: "var(--font-data)",
                              minWidth: "1.2rem",
                              textAlign: "center",
                              fontWeight: 700,
                            }}
                          >
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => {
                              if (typeof window !== "undefined" && navigator.vibrate)
                                navigator.vibrate(10);
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
                          style={{
                            color: "var(--danger)",
                            fontSize: "1rem",
                            marginLeft: "0.2rem",
                          }}
                          aria-label="Remove item"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Promo / Coupon Code Section */}
                  <div
                    style={{
                      background: "rgba(25, 18, 48, 0.6)",
                      padding: "0.85rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid rgba(245, 166, 35, 0.12)",
                    }}
                  >
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        color: "var(--text-secondary)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      Have a Promo / Coupon Code?
                    </label>
                    {appliedCoupon ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          background: "rgba(0, 255, 179, 0.1)",
                          border: "1px solid var(--mint)",
                          padding: "0.4rem 0.8rem",
                          borderRadius: "var(--radius-sm)",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--mint)",
                            fontWeight: 700,
                            fontSize: "0.88rem",
                            fontFamily: "var(--font-data)",
                          }}
                        >
                          {couponEligibleCount > 1
                            ? `🏷️ ${appliedCoupon} APPLIED (-₹${couponDiscount})`
                            : `🏷️ ${appliedCoupon} (Requires >1 game: -₹0)`}
                        </span>
                        <button
                          type="button"
                          onClick={removeCoupon}
                          style={{
                            color: "var(--danger)",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <>
                        <form
                          onSubmit={handleApplyCoupon}
                          style={{ display: "flex", gap: "0.5rem" }}
                        >
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
                            style={{
                              minHeight: "2.4rem",
                              padding: "0.4rem 1rem",
                              fontSize: "0.82rem",
                            }}
                          >
                            Apply
                          </button>
                        </form>
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.74rem",
                            color: "var(--text-muted)",
                            marginTop: "0.3rem",
                          }}
                        >
                          * Requires &gt;1 game in cart (excluding Budget Friendly).
                        </span>
                      </>
                    )}
                    {couponMessage && !appliedCoupon && (
                      <span
                        style={{
                          display: "block",
                          fontSize: "0.76rem",
                          color: "var(--warning)",
                          marginTop: "0.35rem",
                        }}
                      >
                        {couponMessage}
                      </span>
                    )}
                  </div>

                  {/* Tip Contribution */}
                  <div>
                    <label
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      Storefront Tip / Support (Optional)
                    </label>
                    <div className="tip-box">
                      <input
                        type="number"
                        min="0"
                        value={tip}
                        onChange={(e) =>
                          setTip(Math.max(0, Number(e.target.value) || 0))
                        }
                        placeholder="₹ Tip"
                      />
                      <span
                        style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                      >
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

                  <button
                    type="button"
                    className="btn btn-block"
                    onClick={() => setCheckoutStep(2)}
                    style={{ minHeight: "2.45rem", fontSize: "0.88rem", fontWeight: 600 }}
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
                      <h3>🔐 Instant UPI Payment</h3>
                      <span className="upi-instant-badge">₹{total}</span>
                    </div>

                    <div
                      style={{
                        background: "rgba(245, 166, 35, 0.1)",
                        border: "1px solid rgba(245, 166, 35, 0.35)",
                        borderRadius: "var(--radius-sm)",
                        padding: "0.75rem 0.85rem",
                        fontSize: "0.82rem",
                        lineHeight: 1.45,
                        color: "#ffda88",
                        marginBottom: "0.8rem",
                      }}
                    >
                      <strong style={{ display: "block", color: "#ffd066", marginBottom: "0.2rem" }}>
                        🛡️ Recommended (Avoids Bank Fraud Blocks):
                      </strong>
                      Banks and UPI apps (GPay / PhonePe) often block direct browser links to individual UPI IDs.
                      <strong> Scan the QR or Copy the UPI ID below to pay directly inside your app without blocks.</strong>
                    </div>

                    <div className="upi-id-pill" style={{ marginBottom: "0.8rem" }}>
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

                    <div
                      style={{
                        textAlign: "center",
                        padding: "1rem",
                        background: "rgba(10, 7, 22, 0.9)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid rgba(245, 166, 35, 0.2)",
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
                        <div
                          className="qr-frame"
                          style={{
                            display: "inline-block",
                            padding: "0.4rem",
                            background: "#fff",
                            borderRadius: "8px",
                          }}
                        >
                          <Image
                            src={qrSrc}
                            alt="Payment UPI QR"
                            width={170}
                            height={170}
                            unoptimized
                            style={{ display: "block", borderRadius: "4px" }}
                          />
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
                      style={{ flex: 1, minHeight: "2.45rem", fontSize: "0.86rem", fontWeight: 500 }}
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => setCheckoutStep(3)}
                      style={{ flex: 2, minHeight: "2.45rem", fontSize: "0.86rem", fontWeight: 600 }}
                    >
                      I&apos;ve Paid → Verify
                    </button>
                  </div>

                  {/* Trust & Guarantee Card */}
                  <div className="trust-guarantee-card">
                    <div className="trust-item">
                      <span className="trust-icon">🛡️</span>
                      <div>
                        <strong>100% Replacement Warranty</strong>
                        <p>Guaranteed active login & lifetime assistance.</p>
                      </div>
                    </div>
                    <div className="trust-item">
                      <span className="trust-icon">⚡</span>
                      <div>
                        <strong>Fast Telegram Bot Dispatch</strong>
                        <p>Automated payment check & rapid dispatch.</p>
                      </div>
                    </div>
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
                      marginBottom: "0.6rem",
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: "1.1rem" }}>
                      Upload Proof & Dispatch
                    </h3>
                    <span
                      style={{
                        color: "var(--mint)",
                        fontFamily: "var(--font-data)",
                        fontWeight: 700,
                      }}
                    >
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
                      marginTop: "0.8rem",
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setCheckoutStep(2)}
                      style={{ flex: 1, minHeight: "2.45rem", fontSize: "0.86rem", fontWeight: 500 }}
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="btn"
                      disabled={isSubmitting}
                      style={{ flex: 2, minHeight: "2.45rem", fontSize: "0.86rem", fontWeight: 600 }}
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
