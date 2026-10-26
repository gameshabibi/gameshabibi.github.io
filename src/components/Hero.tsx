"use client";

import React, { useState } from "react";
import Link from "next/link";

const SLIDES = [
  {
    h: "Games worth getting lost in",
    p: "Curated PC games and digital passes from ₹169. Pay with UPI, get your login on WhatsApp or email.",
    cta: "Explore games",
    href: "/catalog",
  },
  {
    h: "Fear worth feeling",
    p: "Survival horror and psychological thrillers, ready to download tonight.",
    cta: "Browse horror",
    href: "/catalog",
  },
  {
    h: "Fight your way through",
    p: "Blockbuster action, shooters and soulslikes at a fraction of the usual price.",
    cta: "Browse action",
    href: "/catalog",
  },
  {
    h: "Great games, small prices",
    p: "Budget Friendly access starts at ₹169 for offline single-player.",
    cta: "See budget picks",
    href: "/catalog",
  },
];

export function Hero() {
  const [heroIdx, setHeroIdx] = useState(0);

  const prevSlide = () => {
    setHeroIdx((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setHeroIdx((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const current = SLIDES[heroIdx];

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-slide" key={heroIdx}>
            <p className="kicker" style={{ marginBottom: "1rem" }}>
              Curated PC games &amp; digital passes
            </p>
            <h1 className="display">
              {current.h}
              <span className="dot">.</span>
            </h1>
            <p className="lead">{current.p}</p>
            <Link href={current.href} className="btn arrow">
              {current.cta}
            </Link>
          </div>

          <div className="hero-ctl">
            <span>
              0<b>{heroIdx + 1}</b>{" "}
              <span className="tot">/ 0{SLIDES.length}</span>
            </span>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous highlight"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next highlight"
            >
              →
            </button>
          </div>
        </div>

        <div className="hero-art">
          {/* Original Void Market vector ink art illustration */}
          <svg
            className="ink"
            viewBox="0 0 600 560"
            role="img"
            aria-label="Ink illustration of a lone wanderer on a ridge beneath a red sun"
          >
            <circle cx="395" cy="200" r="170" fill="var(--red)" />
            <g filter="url(#rough)" fill="var(--ink)">
              <path
                d="M0 400 C70 350 120 372 180 330 C240 290 290 330 350 300 C410 272 470 310 600 250 L600 560 L0 560Z"
                opacity=".14"
              />
              <path
                d="M0 452 C80 410 140 436 210 398 C280 360 330 404 400 384 C470 364 530 392 600 360 L600 560 L0 560Z"
                opacity=".36"
              />
              <path d="M300 470 C350 428 410 410 478 404 C530 400 570 412 600 406 L600 560 L300 560Z" />
              <path
                d="M22 560 C30 470 24 410 52 340 M52 340 C70 330 92 336 110 326 M52 372 C36 360 22 362 6 350 M44 420 C64 410 84 412 96 400"
                stroke="var(--ink)"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
              />
            </g>
            <g fill="var(--ink)">
              <path d="M446 234 Q478 196 510 234 Q478 224 446 234Z" />
              <circle cx="478" cy="246" r="9" />
              <path d="M461 256 Q478 248 495 256 L522 402 Q478 414 434 402Z" />
              <path
                d="M497 300 L560 356"
                stroke="var(--ink)"
                strokeWidth="3.6"
                strokeLinecap="round"
              />
            </g>
            <rect y="380" width="600" height="180" fill="url(#mist)" />
            <g filter="url(#splat)" fill="var(--ink)">
              <circle cx="120" cy="150" r="5" />
              <circle cx="146" cy="176" r="3" />
              <circle cx="96" cy="190" r="2.5" />
              <circle cx="560" cy="120" r="4" />
              <circle cx="586" cy="148" r="2.5" />
              <circle cx="230" cy="96" r="2" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
