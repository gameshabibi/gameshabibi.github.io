"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { games, services, ProductItem } from "@/data/catalog";

export interface CartItem {
  id: string;
  v?: number;
  q?: number;
  game: string;
  price: number;
  qty: number;
  variant?: string;
  img?: string;
}

export interface PastOrderItem {
  id: string;
  v: number;
  n: string;
  label: string;
  q: number;
  price: number;
}

export interface PastOrder {
  id: string;
  date: string;
  name: string;
  email: string;
  phone?: string;
  games: string;
  items?: PastOrderItem[];
  total: number;
  utr?: string;
  coupon?: string;
  sent?: boolean;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id" | "qty"> & { id?: string }) => void;
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
  playFeedback: (type: "success" | "error" | "order-success") => void;
}

const COUPON_LIST: Record<string, { type: "percent" | "flat"; value: number }> = {
  HABIBI10: { type: "percent", value: 10 },
  FIRST50: { type: "flat", value: 50 },
  GAMER20: { type: "percent", value: 20 },
  LEVELUP: { type: "percent", value: 15 },
};

const ALL_PRODUCTS: ProductItem[] = [...services, ...games];
const PRODUCT_BY_ID = new Map<string, ProductItem>(
  ALL_PRODUCTS.map((p) => [p.id, p])
);
const PRODUCT_BY_NAME = new Map<string, ProductItem>(
  ALL_PRODUCTS.map((p) => [p.name.toLowerCase(), p])
);

function normalizeCartItem(raw: Record<string, unknown>): CartItem | null {
  if (!raw || typeof raw !== "object") return null;

  // Case 1: Saved by vanilla app.js ({ id, v, q }) or hybrid format
  const rawId = typeof raw.id === "string" ? raw.id : "";
  const rawGame = typeof raw.game === "string" ? raw.game : "";
  const prod =
    PRODUCT_BY_ID.get(rawId) ||
    (rawGame ? PRODUCT_BY_NAME.get(rawGame.toLowerCase()) : undefined);

  const qty =
    typeof raw.qty === "number" && raw.qty > 0
      ? raw.qty
      : typeof raw.q === "number" && raw.q > 0
      ? raw.q
      : 0;
  if (qty <= 0) return null;

  if (prod) {
    let vIdx = typeof raw.v === "number" && raw.v >= 0 ? raw.v : 0;
    if (typeof raw.v !== "number" && prod.variants && typeof raw.variant === "string") {
      const foundIdx = prod.variants.findIndex(
        (v) => v.name.toLowerCase() === String(raw.variant).toLowerCase()
      );
      if (foundIdx > -1) vIdx = foundIdx;
    }
    const variantObj = prod.variants
      ? prod.variants[vIdx] || prod.variants[0]
      : undefined;
    const price =
      typeof raw.price === "number" && raw.price > 0
        ? raw.price
        : variantObj
        ? variantObj.price
        : prod.price || 0;
    const variantName =
      typeof raw.variant === "string" && raw.variant
        ? raw.variant
        : variantObj?.name;

    return {
      id: prod.id,
      v: vIdx,
      q: qty,
      game: prod.name,
      price,
      qty,
      variant: variantName,
      img: prod.img,
    };
  }

  // Fallback for custom items not in catalog
  if (rawGame && typeof raw.price === "number") {
    return {
      id: rawId || `${rawGame}-default`,
      v: typeof raw.v === "number" ? raw.v : 0,
      q: qty,
      game: rawGame,
      price: raw.price,
      qty,
      variant: typeof raw.variant === "string" ? raw.variant : undefined,
      img: typeof raw.img === "string" ? raw.img : undefined,
    };
  }

  return null;
}

function normalizeOrder(raw: Record<string, unknown>): PastOrder | null {
  if (!raw || typeof raw !== "object" || typeof raw.id !== "string") return null;
  const rawItems = Array.isArray(raw.items) ? (raw.items as PastOrderItem[]) : undefined;
  const gamesStr =
    typeof raw.games === "string" && raw.games
      ? raw.games
      : rawItems
      ? rawItems.map((i) => `${i.n} (${i.label}) x${i.q}`).join(", ")
      : "Digital purchase";

  return {
    id: raw.id,
    date: typeof raw.date === "string" ? raw.date : new Date().toISOString(),
    name: typeof raw.name === "string" ? raw.name : "Customer",
    email: typeof raw.email === "string" ? raw.email : "",
    phone: typeof raw.phone === "string" ? raw.phone : undefined,
    games: gamesStr,
    items: rawItems,
    total: typeof raw.total === "number" ? raw.total : Number(raw.total) || 0,
    utr: typeof raw.utr === "string" ? raw.utr : undefined,
    coupon: typeof raw.coupon === "string" ? raw.coupon : undefined,
    sent: typeof raw.sent === "boolean" ? raw.sent : true,
  };
}

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
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          const normalized = parsed
            .map((entry) => normalizeCartItem(entry))
            .filter((x): x is CartItem => x !== null);
          setItems(normalized);
        }
      }
      const savedOrders = localStorage.getItem("gh_orders");
      if (savedOrders) {
        const parsedOrders = JSON.parse(savedOrders);
        if (Array.isArray(parsedOrders)) {
          const normalizedOrders = parsedOrders
            .map((o) => normalizeOrder(o))
            .filter((x): x is PastOrder => x !== null);
          setPastOrders(normalizedOrders);
        }
      }
      const savedCoupon = localStorage.getItem("gh_coupon");
      if (savedCoupon) {
        const cleanCoupon = savedCoupon.replace(/^"|"$/g, "");
        if (COUPON_LIST[cleanCoupon]) {
          setAppliedCoupon(cleanCoupon);
        }
      }
    } catch (err) {
      console.warn("Storage load error:", err);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage in hybrid format compatible with both app.js and React
  useEffect(() => {
    if (!isLoaded) return;
    try {
      const synced = items.map((i) => ({
        ...i,
        q: i.qty,
        v: typeof i.v === "number" ? i.v : 0,
      }));
      localStorage.setItem("gh_cart", JSON.stringify(synced));
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

  const playFeedback = (type: "success" | "error" | "order-success") => {
    try {
      let soundPath = "/audio/succ.wav";
      if (type === "error") soundPath = "/audio/error.wav";
      if (type === "order-success") soundPath = "/audio/order-success.wav";
      const audio = new Audio(soundPath);
      audio.volume = 0.5;
      audio.play().catch(() => {});
    } catch {}
  };

  const addItem = (item: Omit<CartItem, "id" | "qty"> & { id?: string }) => {
    const prod =
      (item.id ? PRODUCT_BY_ID.get(item.id) : undefined) ||
      PRODUCT_BY_NAME.get(item.game.toLowerCase());
    let vIdx = typeof item.v === "number" ? item.v : 0;
    if (prod?.variants && item.variant) {
      const idx = prod.variants.findIndex(
        (v) => v.name.toLowerCase() === item.variant!.toLowerCase()
      );
      if (idx > -1) vIdx = idx;
    }

    setItems((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.game === item.game && i.variant === item.variant
      );
      if (existingIdx > -1) {
        const next = [...prev];
        const nextQty = Math.min(10, next[existingIdx].qty + 1);
        next[existingIdx] = { ...next[existingIdx], qty: nextQty, q: nextQty };
        return next;
      }
      const newItem: CartItem = {
        ...item,
        id: prod ? prod.id : `${item.game}-${item.variant || "default"}-${Date.now()}`,
        v: vIdx,
        q: 1,
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
      const clamped = Math.min(10, newQty);
      next[index] = { ...next[index], qty: clamped, q: clamped };
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
        localStorage.setItem("gh_coupon", JSON.stringify(clean));
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
    const orderWithItems: PastOrder = {
      ...order,
      items:
        order.items ||
        items.map((i) => ({
          id: i.id,
          v: typeof i.v === "number" ? i.v : 0,
          n: i.game,
          label: i.variant || "Digital pass",
          q: i.qty,
          price: i.price,
        })),
      sent: true,
    };
    setPastOrders((prev) => {
      const next = [orderWithItems, ...prev].slice(0, 50);
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
