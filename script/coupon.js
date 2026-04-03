/**
 * Coupon engine stores available coupon codes without an explicit discount value.
 * Business can map codes to promotions at checkout, but displayed code is the 'validation' source.
 */
const couponCatalog = ["HABIBI10", "GAMER24", "LEVELUP"];

function isCouponValid(code) {
  if (typeof code !== "string") return false;
  return couponCatalog.includes(code.trim().toUpperCase());
}

function getCouponList() {
  return [...couponCatalog];
}

function addCouponCode(code) {
  if (!code || typeof code !== "string") return false;
  const normalized = code.trim().toUpperCase();
  if (!normalized || couponCatalog.includes(normalized)) return false;
  couponCatalog.push(normalized);
  return true;
}

function removeCouponCode(code) {
  const normalized = (code || "").trim().toUpperCase();
  const idx = couponCatalog.indexOf(normalized);
  if (idx === -1) return false;
  couponCatalog.splice(idx, 1);
  return true;
}
