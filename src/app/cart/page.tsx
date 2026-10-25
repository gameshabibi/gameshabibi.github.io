"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { useCart } from "@/context/CartContext";
import { generateUPIQRCode } from "@/lib/qr";
import { getOrderWhatsAppUrl, WhatsAppOrderDetails } from "@/lib/whatsapp";

const PAYMENT_ID = process.env.NEXT_PUBLIC_PAYMENT_ID || "prashantsingh896@ybl";

export default function CartPage() {
  const {
    items,
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

  // Auto-restore customer contact info from session storage
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

  const handleCopyUpi = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(PAYMENT_ID);
      setIsUpiCopied(true);
      if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(15);
      showToast("UPI ID copied to clipboard!");
      setTimeout(() => setIsUpiCopied(false), 2500);
    }
  };

  const handleCopyOrderId = (id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(id);
      setIsCopied(true);
      if (typeof window !== "undefined" && navigator.vibrate) navigator.vibrate(15);
      showToast("Order ID copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2500);
    }
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

  const goToStep = (step: 1 | 2 | 3) => {
    setCheckoutStep(step);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Generate UPI deep link & QR code whenever total changes
  const upiUrl = `upi://pay?pa=${encodeURIComponent(
    PAYMENT_ID
  )}&pn=Games%20Habibi&am=${total.toFixed(2)}&cu=INR&tn=Games%20Habibi%20Order`;

  useEffect(() => {
    if (total > 0) {
      generateUPIQRCode(upiUrl).then((url) => setQrSrc(url));
    }
  }, [total, upiUrl]);

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
      showToast("Please upload your payment screenshot");
      return;
    }

    setIsSubmitting(true);

    try {
      const orderId = `GH-${Date.now().toString().slice(-6)}`;
      const gamesList = items
        .map((i) => `${i.game}${i.variant ? ` (${i.variant})` : ""} x${i.qty}`)
        .join(", ");

      const formData = new FormData();
      formData.append("orderId", orderId);
      formData.append("name", customerName);
      formData.append("customerName", customerName);
      formData.append("email", customerEmail);
      formData.append("customerEmail", customerEmail);
      formData.append("utr", customerUtr || "Not provided");
      formData.append("customerUtr", customerUtr || "Not provided");
      formData.append("games", gamesList);
      formData.append("total", total.toString());
      formData.append("tip", tip.toString());
      if (appliedCoupon) formData.append("coupon", appliedCoupon);
      formData.append("photo", paymentFile);
      formData.append("paymentProof", paymentFile);

      const res = await fetch("/api/order", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Order submission failed");
      }

      saveOrder({
        id: orderId,
        date: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        name: customerName,
        email: customerEmail,
        games: gamesList,
        total,
        utr: customerUtr || undefined,
        coupon: appliedCoupon || undefined,
      });

      playFeedback("success");
      setPlacedOrderId(orderId);
      setPlacedOrderDetails({
        orderId,
        games: gamesList,
        total,
        utr: customerUtr,
        customerName: customerName,
      });
      clearCart();
      setPaymentFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err: unknown) {
      playFeedback("error");
      const msg = err instanceof Error ? err.message : "Network error";
      showToast(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <main style={{ minHeight: "80vh", padding: "2rem 0 5rem" }}>
        <div className="container">
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              marginBottom: "1.2rem",
            }}
            aria-label="Breadcrumb"
          >
            <Link href="/" style={{ color: "var(--text-secondary)" }}>
              Store
            </Link>
            <span>/</span>
            <span style={{ color: "var(--accent)" }}>Cart & Checkout</span>
          </nav>

          {placedOrderId ? (
            <div
              style={{
                maxWidth: "600px",
                margin: "2rem auto",
                textAlign: "center",
                padding: "3rem 2rem",
                background: "var(--surface-panel)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--mint)",
                boxShadow: "var(--shadow-strong)",
              }}
            >
              <div
                style={{
                  width: "4.5rem",
                  height: "4.5rem",
                  borderRadius: "50%",
                  background: "rgba(0, 255, 179, 0.15)",
                  color: "var(--mint)",
                  display: "grid",
                  placeItems: "center",
                  fontSize: "2.2rem",
                  margin: "0 auto 1.2rem",
                }}
              >
                ✔
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.5rem",
                  margin: "0 0 0.5rem",
                  letterSpacing: "0.02em",
                }}
              >
                Order Placed Successfully!
              </h1>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  margin: "0 0 1.5rem",
                }}
              >
                Your payment screenshot has been submitted for automated order dispatch. Save your Order ID below:
              </p>

              <div
                style={{
                  display: "inline-block",
                  padding: "0.8rem 2rem",
                  background: "var(--accent-soft)",
                  border: "1px solid rgba(245, 166, 35, 0.35)",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "var(--font-data)",
                  fontSize: "1.5rem",
                  color: "var(--accent)",
                  fontWeight: 700,
                  marginBottom: "1.8rem",
                }}
              >
                {placedOrderId}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "0.8rem",
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
                    boxShadow: "0 0.5rem 1.5rem rgba(37, 211, 102, 0.35)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  💬 Confirm on WhatsApp (+91 8966010035)
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => handleCopyOrderId(placedOrderId)}
                >
                  {isCopied ? "✔ Copied!" : "📋 Copy Order ID"}
                </button>
                <Link href="/orders" className="btn btn-secondary">
                  View Past Orders
                </Link>
                <Link href="/catalog" className="btn btn-tertiary">
                  Continue Browsing
                </Link>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div
              style={{
                maxWidth: "600px",
                margin: "4rem auto",
                textAlign: "center",
                padding: "4rem 2rem",
                background: "var(--surface-panel)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-soft)",
              }}
            >
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🛒</div>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.4rem",
                  margin: "0 0 0.8rem",
                }}
              >
                Your Cart is Empty
              </h1>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  marginBottom: "2rem",
                }}
              >
                Looks like you haven&apos;t added any games or streaming passes yet.
              </p>
              <Link href="/catalog" className="btn">
                Browse Games & Passes →
              </Link>
            </div>
          ) : (
            <div style={{ maxWidth: "880px", margin: "0 auto" }}>
              {/* Stepper Header Title */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                  marginBottom: "1rem",
                }}
              >
                <h1
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "2.3rem",
                    margin: 0,
                    letterSpacing: "0.02em",
                  }}
                >
                  {checkoutStep === 1
                    ? `Step 1: Review Items (${items.reduce((s, i) => s + i.qty, 0)})`
                    : checkoutStep === 2
                    ? "Step 2: Instant UPI Payment"
                    : "Step 3: Verification & Dispatch"}
                </h1>
                <div
                  style={{
                    fontFamily: "var(--font-data)",
                    color: "var(--accent)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  Total: ₹{total}
                </div>
              </div>

              {/* 3-Step Interactive Checkout Stepper */}
              <nav className="checkout-stepper" aria-label="Checkout Progress">
                <button
                  type="button"
                  className={`step-pill ${checkoutStep === 1 ? "is-active" : "is-completed"}`}
                  onClick={() => goToStep(1)}
                  aria-current={checkoutStep === 1 ? "step" : undefined}
                >
                  <span className="step-dot">{checkoutStep > 1 ? "✓" : "1"}</span>
                  <span>1. Review Items</span>
                </button>
                <div className="step-arrow">→</div>
                <button
                  type="button"
                  className={`step-pill ${
                    checkoutStep === 2
                      ? "is-active"
                      : checkoutStep > 2
                      ? "is-completed"
                      : ""
                  }`}
                  onClick={() => goToStep(2)}
                  aria-current={checkoutStep === 2 ? "step" : undefined}
                >
                  <span className="step-dot">{checkoutStep > 2 ? "✓" : "2"}</span>
                  <span>2. UPI Payment</span>
                </button>
                <div className="step-arrow">→</div>
                <button
                  type="button"
                  className={`step-pill ${checkoutStep === 3 ? "is-active" : ""}`}
                  onClick={() => goToStep(3)}
                  aria-current={checkoutStep === 3 ? "step" : undefined}
                >
                  <span className="step-dot">3</span>
                  <span>3. Dispatch & Verify</span>
                </button>
              </nav>

              {/* ================= STEP 1: REVIEW ITEMS ================= */}
              {checkoutStep === 1 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "2rem",
                    alignItems: "start",
                  }}
                >
                  {/* Left Column: Items List, Coupons, Tip */}
                  <div>
                    {/* Bundle Banner */}
                    <div className="bundle-banner" style={{ marginBottom: "1.2rem" }}>
                      <span style={{ fontSize: "1.2rem" }}>🎁</span>
                      <div>
                        <strong>Bundle Savings: </strong>
                        <span>2 games: 25% OFF • 3 games: 40% OFF • 4+ games: 47% OFF</span>
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="cart-items-list" style={{ marginBottom: "1.5rem" }}>
                      {items.map((item, idx) => (
                        <div className="cart-item-row" key={item.id}>
                          <div className="cart-item-left">
                            {item.img && (
                              <div className="cart-item-thumb">
                                <Image
                                  src={item.img}
                                  alt={item.game}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                            )}

                            <div className="cart-item-info">
                              <strong className="cart-item-title">{item.game}</strong>
                              {item.variant && (
                                <span className="cart-item-variant">
                                  {item.variant}
                                </span>
                              )}
                              {item.variant?.toLowerCase().includes("budget") && (
                                <span
                                  style={{
                                    fontSize: "0.72rem",
                                    color: "var(--accent-gold, #f59e0b)",
                                    display: "block",
                                  }}
                                >
                                  ⚡ Budget (No Offers)
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="cart-item-right">
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
                              <span className="qty-val">{item.qty}</span>
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
                              className="cart-item-remove-btn"
                              onClick={() => removeItem(idx)}
                              aria-label={`Remove ${item.game} from cart`}
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
                        background: "rgba(25, 18, 48, 0.6)",
                        padding: "1.1rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid rgba(245, 166, 35, 0.15)",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          marginBottom: "0.4rem",
                          fontWeight: 600,
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
                            borderRadius: "var(--radius-sm)",
                            padding: "0.4rem 0.8rem",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--mint)",
                              fontWeight: 700,
                              fontSize: "0.92rem",
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
                              fontSize: "0.85rem",
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
                            style={{ display: "flex", gap: "0.6rem" }}
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
                                padding: "0.55rem 0.85rem",
                                fontSize: "0.88rem",
                                textTransform: "uppercase",
                              }}
                            />
                            <button
                              type="submit"
                              className="btn btn-secondary"
                              style={{
                                minHeight: "2.6rem",
                                padding: "0.4rem 1.2rem",
                                fontSize: "0.85rem",
                              }}
                            >
                              Apply
                            </button>
                          </form>
                          <span
                            style={{
                              display: "block",
                              fontSize: "0.78rem",
                              color: "var(--text-muted)",
                              marginTop: "0.35rem",
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
                            fontSize: "0.8rem",
                            color: "var(--warning)",
                            marginTop: "0.4rem",
                          }}
                        >
                          {couponMessage}
                        </span>
                      )}
                    </div>

                    {/* Tip Contribution */}
                    <div
                      style={{
                        background: "rgba(25, 18, 48, 0.6)",
                        padding: "1.1rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid rgba(245, 166, 35, 0.15)",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          display: "block",
                          marginBottom: "0.4rem",
                          fontWeight: 600,
                        }}
                      >
                        Storefront Tip / Server Support (Optional)
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
                          style={{ fontSize: "0.84rem", color: "var(--text-muted)" }}
                        >
                          Directly fuels fast Telegram bot delivery
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Pricing Breakdown & Proceed CTA */}
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.8rem",
                        margin: "0 0 1rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Order Summary
                    </h2>

                    <div
                      className="pricing-card"
                      style={{ marginBottom: "1.5rem", padding: "1.2rem 1.4rem" }}
                    >
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
                      <div
                        className="pricing-row total-row"
                        style={{ fontSize: "1.35rem" }}
                      >
                        <span>Total Amount</span>
                        <span>₹{total}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-block"
                      onClick={() => goToStep(2)}
                      style={{
                        minHeight: "3.5rem",
                        fontSize: "1.1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      Proceed to Step 2: UPI Payment (₹{total}) →
                    </button>

                    <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                      <Link
                        href="/catalog"
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "0.9rem",
                          textDecoration: "underline",
                        }}
                      >
                        ← Add more games from catalog
                      </Link>
                    </div>

                    {/* Trust card */}
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
                      <div className="trust-item">
                        <span className="trust-icon">💬</span>
                        <div>
                          <strong>Human WhatsApp Support</strong>
                          <p>Direct chat available at +91 8966010035.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= STEP 2: UPI PAYMENT ================= */}
              {checkoutStep === 2 && (
                <div style={{ maxWidth: "620px", margin: "0 auto" }}>
                  <div
                    className="upi-box"
                    style={{ marginBottom: "1.8rem", padding: "1.8rem" }}
                  >
                    <div style={{ textAlign: "center", marginBottom: "1.4rem" }}>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text-secondary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          fontFamily: "var(--font-data)",
                        }}
                      >
                        Amount To Pay
                      </span>
                      <div
                        style={{
                          fontSize: "2.8rem",
                          fontWeight: 800,
                          color: "var(--accent)",
                          fontFamily: "var(--font-data)",
                          lineHeight: 1.1,
                          margin: "0.3rem 0",
                        }}
                      >
                        ₹{total}
                      </div>
                      <p
                        style={{
                          margin: 0,
                          color: "var(--text-muted)",
                          fontSize: "0.9rem",
                        }}
                      >
                        Tap below to pay directly on mobile or scan the QR code
                      </p>
                    </div>

                    <div className="upi-actions-card" style={{ marginBottom: "1.5rem" }}>
                      <a
                        href={upiUrl}
                        className="upi-app-btn"
                        style={{ minHeight: "3.4rem", fontSize: "1.05rem" }}
                      >
                        ⚡ Pay via UPI App (GPay / PhonePe / Paytm / BHIM)
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

                    {/* QR Code Section */}
                    <div
                      style={{
                        textAlign: "center",
                        padding: "1.4rem",
                        background: "rgba(10, 7, 22, 0.85)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid rgba(245, 166, 35, 0.25)",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 0.9rem",
                          fontSize: "0.9rem",
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
                            padding: "0.5rem",
                            background: "#fff",
                            borderRadius: "10px",
                          }}
                        >
                          <Image
                            src={qrSrc}
                            alt="Payment UPI QR"
                            width={210}
                            height={210}
                            unoptimized
                            style={{ display: "block", borderRadius: "6px" }}
                          />
                        </div>
                      ) : (
                        <div
                          style={{
                            height: "210px",
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          Generating UPI QR Code...
                        </div>
                      )}
                    </div>

                    {/* 3 Step Instruction Checklist */}
                    <div
                      style={{
                        marginTop: "1.5rem",
                        display: "grid",
                        gap: "0.6rem",
                        background: "rgba(255, 255, 255, 0.03)",
                        padding: "1rem",
                        borderRadius: "var(--radius-sm)",
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <div style={{ display: "flex", gap: "0.6rem" }}>
                        <span style={{ color: "var(--accent)", fontWeight: 700 }}>
                          1.
                        </span>
                        <span>
                          Pay exact amount <strong>₹{total}</strong> to{" "}
                          <strong>{PAYMENT_ID}</strong>.
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: "0.6rem" }}>
                        <span style={{ color: "var(--accent)", fontWeight: 700 }}>
                          2.
                        </span>
                        <span>
                          Save a screenshot of the completed payment receipt in your
                          UPI app.
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: "0.6rem" }}>
                        <span style={{ color: "var(--accent)", fontWeight: 700 }}>
                          3.
                        </span>
                        <span>
                          Click the button below to upload your screenshot and confirm
                          dispatch.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step Navigation Controls */}
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      flexWrap: "wrap",
                      marginBottom: "1.8rem",
                    }}
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => goToStep(1)}
                      style={{ flex: "1 1 140px", minHeight: "3.4rem" }}
                    >
                      ← Back to Items
                    </button>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => goToStep(3)}
                      style={{
                        flex: "2 1 240px",
                        minHeight: "3.4rem",
                        fontSize: "1.05rem",
                      }}
                    >
                      I Have Paid — Continue to Verification →
                    </button>
                  </div>

                  {/* Trust card */}
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

              {/* ================= STEP 3: DISPATCH & VERIFY ================= */}
              {checkoutStep === 3 && (
                <div style={{ maxWidth: "620px", margin: "0 auto" }}>
                  <form
                    onSubmit={handleSubmit}
                    className="order-form"
                    style={{
                      background: "var(--surface-panel)",
                      border: "1px solid var(--border-soft)",
                      borderRadius: "var(--radius-md)",
                      padding: "1.8rem",
                      boxShadow: "var(--shadow-strong)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                        paddingBottom: "1rem",
                        marginBottom: "1.4rem",
                      }}
                    >
                      <div>
                        <h3 style={{ margin: "0 0 0.2rem", fontSize: "1.3rem" }}>
                          Confirm & Submit Order
                        </h3>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "0.85rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          Attach screenshot to trigger automated verification
                        </p>
                      </div>
                      <span
                        style={{
                          padding: "0.35rem 0.85rem",
                          background: "rgba(0, 255, 179, 0.12)",
                          color: "var(--mint)",
                          border: "1px solid var(--mint)",
                          borderRadius: "var(--radius-sm)",
                          fontFamily: "var(--font-data)",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                        }}
                      >
                        ₹{total}
                      </span>
                    </div>

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
                      <label htmlFor="customerEmail">
                        Your Email (Credentials & receipt sent here)
                      </label>
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
                        onChange={(e) =>
                          setCustomerUtr(e.target.value.replace(/\s+/g, ""))
                        }
                      />
                      <small>
                        Found in your UPI transaction receipt for instant approval.
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

                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                        marginTop: "1.4rem",
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => goToStep(2)}
                        style={{ flex: "1 1 120px", minHeight: "3.5rem" }}
                      >
                        ← Back to Payment
                      </button>
                      <button
                        type="submit"
                        className="btn"
                        disabled={isSubmitting}
                        style={{
                          flex: "2 1 220px",
                          minHeight: "3.5rem",
                          fontSize: "1.1rem",
                        }}
                      >
                        {isSubmitting
                          ? "Submitting Order..."
                          : `Submit Order • ₹${total}`}
                      </button>
                    </div>

                    <div
                      style={{
                        marginTop: "1.2rem",
                        textAlign: "center",
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      Prefer manual assistance?{" "}
                      <a
                        href={getOrderWhatsAppUrl({
                          orderId: "PRE-ORDER",
                          games: items.map((i) => i.game).join(", "),
                          total: total,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#25D366", fontWeight: 600 }}
                      >
                        Chat directly on WhatsApp →
                      </a>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <Image
              src="/png/apple-touch-icon.png"
              alt="Games Habibi Logo"
              width={40}
              height={40}
              className="brand-logo"
            />
            <div>
              <p className="footer-brand">Games Habibi</p>
              <p className="footer-copy">
                Premium digital storefront with mobile-friendly UPI checkout and direct support.
              </p>
            </div>
          </div>

          <div className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/shipping">Shipping</Link>
            <Link href="/cancellation">Refunds</Link>
            <Link href="/contact">Help Desk</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
