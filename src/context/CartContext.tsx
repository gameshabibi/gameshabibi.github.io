"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  game: string;
  price: number;
  qty: number;
  variant?: string;
  img?: string;
}

export interface PastOrder {
  id: string;
  date: string;
  name: string;
  email: string;
  games: string;
  total: number;
  utr?: string;
  coupon?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id" | "qty">) => void;
  removeItem: (index: number) => void;
  updateQty: (index: number, delta: number) => void;
  clearCart: () => void;
  tip: number;
  setTip: (amount: number) => void;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  couponDiscount: number;
  couponEligibleCount: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  subtotal: number;
  bundleDiscount: number;
  total: number;
  bundleCount: number;
  pastOrders: PastOrder[];
  saveOrder: (order: PastOrder) => void;
  toast: string | null;
  showToast: (msg: string) => void;
  playFeedback: (type: "success" | "error") => void;
}

const COUPON_LIST: Record<string, { type: "percent" | "flat"; value: number }> = {
  HABIBI10: { type: "percent", value: 10 },
  FIRST50: { type: "flat", value: 50 },
  GAMER20: { type: "percent", value: 20 },
  LEVELUP: { type: "percent", value: 15 },
};

export const isBudgetFriendlyItem = (item: { variant?: string; price: number }) => {
  return (
    item.variant?.toLowerCase().includes("budget") ||
    (item.price === 69 && (item.variant?.toLowerCase().includes("friendly") || !item.variant))
  );
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [tip, setTip] = useState<number>(0);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [pastOrders, setPastOrders] = useState<PastOrder[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart and orders from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("gh_cart");
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
      const savedOrders = localStorage.getItem("gh_orders");
      if (savedOrders) {
        setPastOrders(JSON.parse(savedOrders));
      }
      const savedCoupon = localStorage.getItem("gh_coupon");
      if (savedCoupon && COUPON_LIST[savedCoupon]) {
        setAppliedCoupon(savedCoupon);
      }
    } catch (err) {
      console.warn("Storage load error:", err);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("gh_cart", JSON.stringify(items));
    } catch (err) {
      console.warn("Storage save error:", err);
    }
  }, [items, isLoaded]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast((curr) => (curr === msg ? null : curr));
    }, 2800);
  };

  const playFeedback = (type: "success" | "error") => {
    try {
      const audio = new Audio(
        type === "success" ? "/audio/succ.wav" : "/audio/error.wav"
      );
      audio.volume = 0.45;
      audio.play().catch(() => {});
    } catch {}
  };

  const addItem = (item: Omit<CartItem, "id" | "qty">) => {
    setItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.game === item.game && i.variant === item.variant
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].qty += 1;
        return next;
      }
      const newItem: CartItem = {
        ...item,
        id: `${item.game}-${item.variant || "default"}-${Date.now()}`,
        qty: 1,
      };
      return [...prev, newItem];
    });

    playFeedback("success");
    showToast(`Added ${item.game} to cart`);
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, idx) => idx !== index));
    showToast("Item removed");
  };

  const updateQty = (index: number, delta: number) => {
    setItems((prev) => {
      const next = [...prev];
      const newQty = next[index].qty + delta;
      if (newQty <= 0) {
        return next.filter((_, idx) => idx !== index);
      }
      next[index].qty = newQty;
      return next;
    });
  };

  const clearCart = () => {
    setItems([]);
    setTip(0);
    setAppliedCoupon(null);
    try {
      localStorage.removeItem("gh_coupon");
    } catch {}
    showToast("Cart cleared");
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (!clean) {
      return { success: false, message: "Please enter a coupon code" };
    }

    if (items.length === 0) {
      playFeedback("error");
      return {
        success: false,
        message: "Your cart is empty",
      };
    }

    const couponEligibleItems = items.filter((item) => !isBudgetFriendlyItem(item));
    const eligibleCount = couponEligibleItems.reduce((acc, item) => acc + item.qty, 0);

    if (eligibleCount === 0) {
      playFeedback("error");
      return {
        success: false,
        message: "Offers & coupons do not apply to Budget Friendly option (flat ₹69)",
      };
    }

    if (eligibleCount <= 1) {
      playFeedback("error");
      return {
        success: false,
        message: "Coupons only apply when you have more than 1 game in your cart (excluding Budget Friendly)",
      };
    }

    if (COUPON_LIST[clean]) {
      setAppliedCoupon(clean);
      try {
        localStorage.setItem("gh_coupon", clean);
      } catch {}
      playFeedback("success");
      return { success: true, message: `Coupon ${clean} applied!` };
    }
    playFeedback("error");
    return { success: false, message: "Invalid coupon code. Try HABIBI10" };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    try {
      localStorage.removeItem("gh_coupon");
    } catch {}
    showToast("Coupon removed");
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Calculate pricing & bundle discounts
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Bundle discounts apply only to standard Steam personal account games (price === 299, not Budget Friendly)
  const personalSteamItems = items.filter(
    (item) =>
      !isBudgetFriendlyItem(item) &&
      (item.variant?.toLowerCase().includes("in your steam") || item.price === 299)
  );
  const bundleCount = personalSteamItems.reduce((acc, item) => acc + item.qty, 0);

  let bundleDiscount = 0;
  if (bundleCount >= 4) {
    const steamSum = personalSteamItems.reduce((acc, i) => acc + i.price * i.qty, 0);
    bundleDiscount = Math.round(steamSum * 0.47);
  } else if (bundleCount === 3) {
    const steamSum = personalSteamItems.reduce((acc, i) => acc + i.price * i.qty, 0);
    bundleDiscount = Math.round(steamSum * 0.40);
  } else if (bundleCount === 2) {
    const steamSum = personalSteamItems.reduce((acc, i) => acc + i.price * i.qty, 0);
    bundleDiscount = Math.round(steamSum * 0.25);
  }

  // Calculate coupon discount - explicitly requires > 1 eligible game and excludes Budget Friendly selection
  const couponEligibleItems = items.filter((item) => !isBudgetFriendlyItem(item));
  const couponEligibleCount = couponEligibleItems.reduce((acc, item) => acc + item.qty, 0);
  const couponEligibleSubtotal = couponEligibleItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  let couponDiscount = 0;
  if (appliedCoupon && COUPON_LIST[appliedCoupon] && couponEligibleCount > 1) {
    const rule = COUPON_LIST[appliedCoupon];
    const discountedBase = Math.max(0, couponEligibleSubtotal - bundleDiscount);
    if (discountedBase > 0) {
      if (rule.type === "percent") {
        couponDiscount = Math.round((discountedBase * rule.value) / 100);
      } else {
        couponDiscount = Math.min(rule.value, discountedBase);
      }
    }
  }

  const total = Math.max(0, subtotal - bundleDiscount - couponDiscount + tip);

  const saveOrder = (order: PastOrder) => {
    setPastOrders((prev) => {
      const next = [order, ...prev].slice(0, 50);
      try {
        localStorage.setItem("gh_orders", JSON.stringify(next));
        localStorage.setItem("lastOrderId", order.id);
      } catch {}
      return next;
    });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
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
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        subtotal,
        bundleDiscount,
        total,
        bundleCount,
        pastOrders,
        saveOrder,
        toast,
        showToast,
        playFeedback,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
