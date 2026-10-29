"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export default function HomePage() {
  useEffect(() => {
    // If scripts already loaded, trigger hashchange to render
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("hashchange"));
    }
  }, []);

  return (
    <>
      <a className="skip" href="#app">
        Skip to content
      </a>

      <header className="site-header" id="site-header">
        <div className="container bar">
          <a className="logo" href="#/" aria-label="Games Habibi home">
            GAMES HABIBI<i></i>
          </a>
          <nav className="main-nav" id="main-nav" aria-label="Main">
            <a href="#/games" data-nav="games">
              Games
            </a>
            <a href="#/collections" data-nav="collections">
              Collections
            </a>
            <a href="#/guides" data-nav="guides">
              Guides
            </a>
            <a href="#/orders" data-nav="orders">
              Orders
            </a>
            <a href="#/contact" data-nav="contact">
              Support
            </a>
          </nav>
          <div className="bar-actions">
            <button
              className="icon-btn"
              id="open-search"
              aria-label="Search games"
              aria-expanded="false"
              aria-controls="search-panel"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
              </svg>
            </button>
            <button
              className="icon-btn theme-toggle"
              id="theme-toggle"
              type="button"
              aria-label="Switch to dark mode"
              aria-pressed="false"
            >
              <svg
                className="theme-icon-light"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
              <svg
                className="theme-icon-dark"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
              </svg>
            </button>
            <a className="icon-btn cart-link" href="#/cart" aria-label="Cart">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 4h2.5l2.2 10.2a1.5 1.5 0 0 0 1.5 1.2h8.1a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6.2" />
                <circle cx="9.5" cy="19.5" r="1.2" />
                <circle cx="17" cy="19.5" r="1.2" />
              </svg>
              <span className="cart-count" id="cart-count" hidden>
                0
              </span>
            </a>
            <button
              className="icon-btn menu-btn"
              id="menu-btn"
              aria-label="Menu"
              aria-expanded="false"
              aria-controls="main-nav"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="search-panel" id="search-panel" hidden>
        <div className="container">
          <form id="search-form" role="search" autoComplete="off">
            <label className="sr" htmlFor="search-input">
              Search games and passes
            </label>
            <input
              id="search-input"
              type="search"
              placeholder="Search 575+ games…"
              enterKeyHint="search"
            />
            <button type="button" className="link-btn" id="close-search">
              Close
            </button>
          </form>
          <ul className="search-results" id="search-results"></ul>
        </div>
      </div>

      <main id="app" tabIndex={-1}></main>

      <footer className="site-footer">
        <div className="container foot-grid">
          <div>
            <a className="logo" href="#/">
              GAMES HABIBI<i></i>
            </a>
            <p className="foot-note">
              PC games and digital passes at honest prices. Pay with UPI, get
              your login by WhatsApp or email.
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <a href="#/games">All games</a>
            <a href="#/collections">Collections</a>
            <a href="#/games?type=passes">Passes &amp; tools</a>
            <a href="#/contact?tab=request">Request a game</a>
            <a href="#/cart">Cart</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="#/guides">Guides &amp; FAQ</a>
            <a href="#/orders">My orders</a>
            <a href="#/contact">Contact &amp; support</a>
            <a id="foot-wa" href="https://wa.me/919770493784" target="_blank" rel="noopener">
              WhatsApp
            </a>
            <a id="foot-mail" href="mailto:mr.bgmi9098@gmail.com">
              Email
            </a>
            <a
              id="foot-ig"
              href="https://www.instagram.com/games_habibi/"
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>
          </div>
          <div>
            <h4>Policies</h4>
            <a href="#/policy/refunds">Refunds &amp; replacements</a>
            <a href="#/policy/shipping">Digital delivery</a>
            <a href="#/policy/terms">Terms of service</a>
            <a href="#/policy/privacy">Privacy</a>
          </div>
        </div>
        <div className="container foot-base">
          <span>© 2026 Games Habibi. Digital delivery only — nothing is shipped.</span>
          <span>Game titles and artwork belong to their respective owners.</span>
        </div>
      </footer>

      <div className="toast" id="toast" role="status" aria-live="polite"></div>

      <Script src="/js/config.js" strategy="beforeInteractive" />
      <Script src="/js/data.js" strategy="beforeInteractive" />
      <Script src="/js/qrcode.js" strategy="beforeInteractive" />
      <Script src="/js/app.js" strategy="afterInteractive" />
    </>
  );
}
