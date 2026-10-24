"use client";

import React from "react";

const tickerItems = [
  { text: "Steam Personal Account", price: "₹299" },
  { text: "Netflix Premium 4K", price: "₹149" },
  { text: "YouTube Premium Ad-free", price: "₹59" },
  { text: "3-Game Steam Bundle", price: "₹538" },
  { text: "Shared Steam Accounts", price: "From ₹49" },
  { text: "8 Ball Pool Mod", price: "₹10" },
];

export function Ticker() {
  return (
    <div className="live-ticker" aria-hidden="true">
      <div className="ticker-scroll">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div className="ticker-item" key={idx}>
            {item.text} → <span className="accent">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
