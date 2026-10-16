---
name: Games Habibi
description: Digital Game & Streaming Storefront with Fast UPI Delivery
colors:
  primary: "#f5a623"
  primary-strong: "#ff9e00"
  secondary: "#7b2fff"
  secondary-strong: "#9d4fff"
  tertiary: "#00ffb3"
  neutral-bg: "#0d0a1a"
  neutral-surface: "#120e23"
  neutral-surface-soft: "#19122d"
  text-primary: "#f1f7ff"
  text-secondary: "#b0bfd6"
  text-muted: "#8293ad"
  danger: "#ff7f93"
  warning: "#ffc671"
typography:
  display:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.2rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.02em"
  headline:
    fontFamily: "Bebas Neue, sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)"
    fontWeight: 400
    lineHeight: 1.15
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.8rem)"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "0.98rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: "0.85rem"
  md: "1.2rem"
  lg: "1.8rem"
  xl: "2.4rem"
  full: "999rem"
spacing:
  xs: "0.75rem"
  sm: "1rem"
  md: "1.35rem"
  lg: "1.8rem"
  xl: "2.4rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#04101c"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.4rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.25rem"
    height: "3rem"
---

# Design System: Games Habibi

## Overview

**Creative North Star: "Cyber Arcade Bazaar"**

Games Habibi merges the high-energy thrill of midnight gaming arcades with a modern, high-trust digital storefront. The aesthetic embraces deep atmospheric voids (#0d0a1a) illuminated by amber (#f5a623) and electric violet (#7b2fff) accents, balancing youthful gaming enthusiasm with the clarity required for financial transactions (UPI checkout, cart calculations, and Telegram fulfillment).

The interface emphasizes punchy typography, high scannability for digital catalogs, and distinct callouts for deals, instant memberships, and payment verification.

**Key Characteristics:**
- **Atmospheric Gaming Dark**: Deep indigo-tinted void backdrop with warm amber action highlights.
- **Punchy Headline Stacks**: Tall, condensed display titles paired with monospaced metadata badges.
- **Frictionless Action Rails**: High-visibility pill CTAs for adding to cart and triggering instant UPI QR payments.

## Colors

The palette balances dark space immersion with high-contrast functional highlights.

### Primary
- **Cyber Amber** (#f5a623): The primary conversion and action color. Reserved strictly for primary call-to-actions, cart badges, and active state highlights.

### Secondary
- **Electric Violet** (#7b2fff): Supporting gaming accent. Used for bundle highlights, secondary tags, and subtle ambient gradients.

### Tertiary
- **Mint Pulse** (#00ffb3): Status and verification accent. Used for success states, instant-delivery confirmations, and verified indicators.

### Neutral
- **Deep Void Indigo** (#0d0a1a): The foundation canvas color.
- **Surface Panel** (#120e23): Layered container background for cards, modal dialogs, and panels.
- **Starlight White** (#f1f7ff): Primary typography color; strictly used on dark surfaces for high WCAG contrast.
- **Slate Blue** (#b0bfd6): Secondary typography color for descriptions and item subtitles.
- **Atmospheric Muted** (#8293ad): Tertiary labels, timestamps, and subtle hints.

### Named Rules
**The 10% Amber Rule.** The primary amber (#f5a623) is reserved for direct conversion actions (Add to Cart, Checkout, Pay Now). It should never be used as large background fills or continuous decorative borders.

## Typography

**Display Font:** Bebas Neue (with sans-serif fallback)  
**Body Font:** Space Grotesk (with sans-serif fallback)  
**Label/Mono Font:** DM Mono (with monospace fallback)  

**Character:** High-impact editorial gaming condensed display contrasted with technical, monospaced metadata and clear geometric body copy.

### Hierarchy
- **Display** (400, clamp(2rem, 3.8vw, 3.2rem), 1.1): Hero headlines and major storefront promotions.
- **Headline** (400, clamp(1.5rem, 2.5vw, 2.2rem), 1.15): Section banners (Game Catalog, Streaming Memberships, Cart Summary).
- **Title** (600, clamp(1.25rem, 2vw, 1.8rem), 1.3): Game and subscription item titles.
- **Body** (400, 0.98rem, 1.6): Product descriptions, policy text, checkout walkthrough instructions.
- **Label** (500, 0.85rem, uppercase, 0.05em letter-spacing): Currency tags, SKU indicators, order numbers, UPI IDs.

### Named Rules
**The Readable Contrast Rule.** Never place Starlight White (#f1f7ff) or Slate Blue (#b0bfd6) text directly over glowing amber (#f5a623) or light ambient gradients; buttons on amber must use deep dark ink (#04101c) to maintain WCAG AA compliance.

## Layout

- **Container Max-Width**: Fluid responsive max-width capped at 90rem (1440px) with inline padding clamped between 1rem and 2rem.
- **Grid Architecture**: 12-column responsive layout for game catalogs that seamlessly collapses to 2 columns on tablet and 1 column on compact mobile viewports.
- **Rhythm**: Vertical section rhythm spaced at standard increments: 1.8rem, 2.4rem, and 3.4rem.

## Elevation & Depth

Surfaces rely on tonal layering (#0d0a1a base, #120e23 card surface, #19122d elevated controls) with soft directional drop shadows rather than zero-offset colored blur halos.

### Shadow Vocabulary
- **Card Rest** (`box-shadow: 0 1rem 2.5rem rgba(2, 7, 15, 0.30)`): Subtle separation from the background canvas.
- **Card Hover** (`box-shadow: 0 1.5rem 3.5rem rgba(2, 7, 15, 0.45)`): Micro-lift when hovering actionable catalog cards.
- **Action Button** (`box-shadow: 0 1rem 2.5rem rgba(245, 166, 35, 0.22)`): Ambient lift beneath primary amber action buttons.

### Named Rules
**The Natural Shadow Rule.** Prohibit zero-offset colored glow halos around text and containers. Use natural Y-offset directional shadows with subtle opacity.

## Shapes

- **Buttons & Badges**: Fully rounded pills (`999rem` radius) for friendly, tactile, touch-ready interaction.
- **Cards & Modals**: Soft curved corners (`1.2rem` to `1.8rem` radius) with thin 1px translucent borders (`rgba(245, 166, 35, 0.14)` or `rgba(123, 47, 255, 0.18)`).
- **Form Controls**: Rounded rect (`0.85rem` radius) with 44px+ minimum tap target height.

## Components

### Buttons
- **Shape:** Full pill radius (`999rem`), minimum block size 3rem (48px).
- **Primary:** Warm gradient (`linear-gradient(135deg, #f5a623, #ff9e00)`), dark text `#04101c`, bold weight.
- **Secondary:** Surface fill `rgba(18, 32, 56, 0.72)` with 1px amber border and white text `#f1f7ff`.
- **Hover/Focus:** Subtle translateY(-2px), visible high-contrast outline on keyboard focus.

### Cards & Catalog Tiles
- **Corner Style:** `1.2rem` radius.
- **Background:** `rgba(13, 10, 26, 0.88)` with backdrop blur.
- **Padding:** Minimum 1rem to 1.25rem interior inset.
- **Content Hierarchy:** Game thumbnail image -> Title & Platform Tag -> Pricing (INR) -> Add to Cart CTA.

### Form Inputs & Selects
- **Style:** Dark translucent background (`rgba(15, 28, 47, 0.78)`), `0.85rem` radius, light border.
- **Focus:** 2px amber focus ring (`0 0 0 2px rgba(245, 166, 35, 0.38)`).

## Do's and Don'ts

### Do:
- **Do** maintain a strict 4.5:1 text-to-background contrast ratio on all buttons and labels.
- **Do** respect user preferences with `@media (prefers-reduced-motion: reduce)` by calming infinite marquee and ambient animations.
- **Do** provide distinct, high-contrast `:focus-visible` indicators on all interactive buttons and form inputs.
- **Do** preserve minimum 44px tap targets for mobile checkout.

### Don't:
- **Don't** use light text over light yellow or amber gradient fills.
- **Don't** nest card containers inside other cards, creating visual clutter.
- **Don't** use zero-offset colored blur halos ("dark-glow") as primary design elements.
- **Don't** let child text content touch the outer border box without at least 12px container inset padding.
