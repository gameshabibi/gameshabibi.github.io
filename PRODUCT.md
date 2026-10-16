# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are gamers and digital media consumers in India seeking affordable PC game access and subscription memberships (such as Netflix and YouTube Premium) with frictionless local payment methods (UPI/QR code) and rapid order fulfillment.

## Product Purpose

Games Habibi provides an accessible digital storefront where customers can browse, select PC games and digital subscriptions, checkout quickly using UPI, and receive immediate verification and fulfillment via automated Telegram notifications. Success is measured by seamless purchasing, transparent pricing in INR, low cart abandonment, and trust in fast delivery.

## Positioning

Zero-friction digital game and streaming acquisition tailored specifically for the Indian market, combining UPI QR payments with instant Telegram bot order verification without requiring credit cards or complex registration hoops.

## Operating Context

- **Platform/Hosting**: Static web architecture hosted on GitHub Pages.
- **Payment Method**: UPI payment via dynamically generated QR codes (`QR Server API`) and direct UPI link triggers for mobile apps (GPay, PhonePe, Paytm).
- **Communication & Verification**: Telegram Bot API integration forwarding payment confirmation, customer details, and payment screenshots directly to store operators.
- **Device Usage**: High proportion of mobile and desktop users browsing catalogs and completing QR/UPI transactions.

## Capabilities and Constraints

- **Catalog**: 25+ curated PC game titles and streaming services.
- **Cart Management**: Real-time cart calculations, item quantities, optional tip contributions, persistent session state.
- **Notification Pipeline**: Direct Telegram bot integration for order dispatch and customer inquiry notifications (`telegram-forms.js`, `payment.js`).
- **Privacy & Compliance**: Dedicated policy pages (`privacy.html`, `terms.html`, `shipping.html`, `cancellation.html`, `contact.html`).
- **Backend Architecture**: Client-side JavaScript orchestrating checkout with optional Cloudflare Worker proxy (`cloudflare-worker/`).

## Brand Commitments

- **Name**: Games Habibi ("GH").
- **Tagline**: "Your one-stop shop for the latest PC games and streaming services" / "Instant digital delivery".
- **Tone**: Accessible, energetic, modern, gamer-friendly, trustworthy.
- **Currency**: INR (₹).

## Evidence on Hand

- Production catalog and live storefront on GitHub Pages (`gameshabibi.github.io`).
- Functional UPI QR generation and Telegram bot order routing code.
- Brand assets: App icons, web manifests, and favicons (`png/`, `favicon.ico`, `site.webmanifest`).

## Product Principles

1. **Frictionless Local Checkout**: Prioritize rapid, one-tap UPI payments and clean QR generation over lengthy forms.
2. **Transparent Clarity**: Keep pricing, bundle offers, and delivery expectations crystal clear with zero hidden steps.
3. **Responsive Reliability**: Ensure cart, search, and checkout remain responsive and stable across desktop and mobile devices.
4. **Trust & Verification**: Provide clear payment confirmation and instant Telegram updates so buyers feel confident in delivery.

## Accessibility & Inclusion

Ensure high contrast text across all lighting and gradient treatments (meeting WCAG AA 4.5:1 standards), touch-friendly targets for mobile gamers, and clean screen-reader navigation.
