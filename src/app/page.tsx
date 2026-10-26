"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { SteamGuideFAQ } from "@/components/SteamGuideFAQ";
import { MyOrdersModal } from "@/components/MyOrdersModal";
import { RequestGameModal } from "@/components/RequestGameModal";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [requestedTitle, setRequestedTitle] = useState("");

  const handleOpenRequest = (title?: string) => {
    setRequestedTitle(title || "");
    setIsRequestOpen(true);
  };

  return (
    <>
      <div id="top" />
      <div className="notice-bar">
        ⚡ 3-game Personal Steam bundle for ₹538 (40% OFF) |{" "}
        <Link href="/catalog">Shop Now</Link>
      </div>

      <Header
        onSearch={setSearchQuery}
        onOpenOrders={() => setIsOrdersOpen(true)}
      />

      <main>
        {/* Editorial Hero with Slider & Ink Art */}
        <Hero />

        {/* Catalog Section with Editorial Cards */}
        <Catalog
          isHomeView
          limit={8}
          searchQuery={searchQuery}
          onRequestGame={handleOpenRequest}
        />

        {/* Pick How You Play - 3-Tier Matrix */}
        <section className="section">
          <div className="container">
            <div className="sec-head">
              <h2 className="sec-title">Pick how you play</h2>
              <span className="kicker">Every game, three ways</span>
            </div>

            <div className="tiers">
              <div className="tier">
                <span className="kicker">In your Steam account</span>
                <div className="price">₹299</div>
                <h3>Personal</h3>
                <p>The game is activated on your own Steam profile.</p>
                <ul>
                  <li>Lives in your own library</li>
                  <li>Bundle discounts up to 47%</li>
                  <li>Coupons accepted</li>
                </ul>
              </div>

              <div className="tier featured">
                <span className="kicker" style={{ color: "#ff8d92" }}>
                  Most popular
                </span>
                <div className="price">₹149</div>
                <h3>Shared</h3>
                <p>Log in with the credentials we send, download, then play offline.</p>
                <ul>
                  <li>Steam Guard code sent at first login</li>
                  <li>Offline campaign &amp; local saves</li>
                  <li>Coupons accepted</li>
                </ul>
              </div>

              <div className="tier">
                <span className="kicker">Cheapest</span>
                <div className="price">₹169</div>
                <h3>Budget Friendly</h3>
                <p>Our lowest price for offline single-player.</p>
                <ul>
                  <li>Replacement at 50% off if credentials change</li>
                  <li>Instant delivery via WhatsApp &amp; Email</li>
                </ul>
              </div>
            </div>

            {/* Bundle Savings Strip */}
            <div className="bundle-strip">
              <span>
                <b>Bundle &amp; save</b> &nbsp;on Personal games
              </span>
              <div className="steps">
                <span>
                  <b>25%</b> off 2
                </span>
                <span>
                  <b>40%</b> off 3
                </span>
                <span>
                  <b>47%</b> off 4+
                </span>
              </div>
              <Link className="link-btn arrow" href="/how-it-works">
                How it works
              </Link>
            </div>
          </div>
        </section>

        {/* Discover New Worlds - Editorial Banner with Castle & Mountains Ink Art */}
        <section className="section">
          <div className="container">
            <div className="banner">
              <svg
                className="ink"
                viewBox="0 0 900 300"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                aria-label="Ink illustration of a castle above misty mountains"
              >
                <rect width="900" height="300" fill="#0f0e0d" />
                <circle cx="690" cy="96" r="64" fill="var(--red)" opacity=".92" />
                <g filter="url(#rough)">
                  <path
                    d="M0 210 C100 160 170 190 260 150 C340 114 420 170 520 140 C620 110 720 160 900 120 L900 300 L0 300Z"
                    fill="#2a2724"
                  />
                  <path
                    d="M0 250 C120 214 200 238 300 204 C400 172 500 226 620 200 C730 176 820 214 900 190 L900 300 L0 300Z"
                    fill="#1b1917"
                  />
                  <g fill="#34302c">
                    <path d="M610 156 h70 v-14 h-6 l-29 -24 l-29 24 h-6z" />
                    <rect x="622" y="156" width="46" height="46" />
                    <path d="M628 118 l23 -30 l23 30z" />
                  </g>
                </g>
                <g fill="#0f0e0d">
                  <path d="M772 218 q10 -22 20 0 q-10 -6 -20 0z" />
                  <circle cx="782" cy="204" r="5" />
                  <path d="M774 222 q8 -4 16 0 l4 28 q-12 5 -24 0z" />
                </g>
                <rect y="190" width="900" height="110" fill="url(#mistDark)" />
              </svg>

              <div className="banner-in">
                <h2 className="display">Discover new worlds</h2>
                <p>
                  Curated titles and passes for every kind of gamer — open worlds,
                  horror, racing, and blockbuster RPGs.
                </p>
                <Link className="btn red arrow" href="/catalog">
                  Browse Catalog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - 3 Steps Grid */}
        <section className="section">
          <div className="container">
            <div className="sec-head">
              <h2 className="sec-title">How it works</h2>
              <span className="kicker">Three steps</span>
            </div>

            <div className="steps3">
              <div className="s">
                <div className="n">01</div>
                <h3>Pick your access</h3>
                <p>
                  Choose between Shared access for offline campaigns, or Personal
                  activations directly on your own Steam library.
                </p>
              </div>

              <div className="s">
                <div className="n">02</div>
                <h3>Pay with UPI</h3>
                <p>
                  Scan the dynamic UPI QR or copy the ID on mobile, complete the
                  transfer, and attach your 12-digit UTR reference.
                </p>
              </div>

              <div className="s">
                <div className="n">03</div>
                <h3>Get your login</h3>
                <p>
                  Credentials and Steam Guard codes are delivered promptly to
                  WhatsApp or Email for instant game download.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive FAQ & Steam Guide */}
        <SteamGuideFAQ />
      </main>

      {/* Editorial Void Market Footer */}
      <footer className="site-footer">
        <div className="container foot-grid">
          <div>
            <Link className="logo" href="/">
              GAMES HABIBI<i></i>
            </Link>
            <p className="foot-note">
              PC games and digital passes at honest prices. Pay with UPI, get
              your login by WhatsApp or email.
            </p>
          </div>

          <div>
            <h4>Shop</h4>
            <Link href="/catalog">All games</Link>
            <Link href="/catalog?filter=under100">Under ₹100</Link>
            <Link href="/catalog?filter=services">Passes &amp; tools</Link>
            <Link href="/cart">Cart</Link>
          </div>

          <div>
            <h4>Help</h4>
            <Link href="/how-it-works">Guides &amp; FAQ</Link>
            <button
              type="button"
              onClick={() => setIsOrdersOpen(true)}
              style={{
                background: "none",
                border: "none",
                padding: "0.22rem 0",
                color: "inherit",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              My orders
            </button>
            <a
              href="https://wa.me/919770493784"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href="mailto:mr.bgmi9098@gmail.com">Email</a>
            <a
              href="https://www.instagram.com/games_habibi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          <div>
            <h4>Policies</h4>
            <Link href="/cancellation">Refunds &amp; replacements</Link>
            <Link href="/shipping">Digital delivery</Link>
            <Link href="/terms">Terms of service</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>

        <div className="container foot-base">
          <span>© 2026 Games Habibi. Digital delivery only — nothing is shipped physically.</span>
          <span>Game titles and artwork belong to their respective owners.</span>
        </div>
      </footer>

      <MyOrdersModal
        isOpen={isOrdersOpen}
        onClose={() => setIsOrdersOpen(false)}
      />

      <RequestGameModal
        isOpen={isRequestOpen}
        onClose={() => setIsRequestOpen(false)}
        initialGame={requestedTitle}
      />
    </>
  );
}
