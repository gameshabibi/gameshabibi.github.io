/* ------------------------------------------------------------------
   Games Habibi — site settings. Edit these, nothing else needs touching.
------------------------------------------------------------------- */
window.HABIBI_CONFIG = {
  storeName: "Games Habibi",
  upiId: "prashantsingh896@ybl",      // UPI VPA used for the QR code and Pay Now button
  whatsapp: "918966010035",           // country code + number, no "+" or spaces
  email: "mr.bgmi9098@gmail.com",
  instagram: "games_habibi",
  hours: "10:00 AM – 11:30 PM IST",

  // Optional: a URL that accepts a multipart POST (fields: orderId, name, email,
  // phone, items, total, coupon, utr, photo). Leave "" to run without a backend —
  // the customer then sends their proof on WhatsApp after placing the order.
  orderEndpoint: "",

  // Discount rules
  coupons: {
    HABIBI10: { type: "percent", value: 10 },
    FIRST50:  { type: "flat",    value: 50 },
    GAMER20:  { type: "percent", value: 20 },
    LEVELUP:  { type: "percent", value: 15 }
  },
  // Personal-Steam games in cart -> bundle discount on those games
  bundle: [
    { min: 4, rate: 0.47 },
    { min: 3, rate: 0.40 },
    { min: 2, rate: 0.25 }
  ]
};
