"use client";

import React, { useState, useEffect } from "react";

interface RequestGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGame?: string;
}

export function RequestGameModal({
  isOpen,
  onClose,
  initialGame = "",
}: RequestGameModalProps) {
  const [gameTitle, setGameTitle] = useState(initialGame);
  const [platform, setPlatform] = useState("Steam (PC)");
  const [contact, setContact] = useState("");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialGame) {
      setGameTitle(initialGame);
    }
  }, [initialGame]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/request-game", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameTitle,
          platform,
          contact,
          budget,
          notes,
          website,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to submit request");
      }

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setGameTitle("");
        setContact("");
        setBudget("");
        setNotes("");
        onClose();
      }, 2500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission error";
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="cart-backdrop is-open" onClick={onClose} aria-hidden={!isOpen} />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(92%, 520px)",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "var(--card)",
          border: "1px solid var(--ink)",
          boxShadow: "var(--shadow-strong)",
          zIndex: 1100,
          padding: "1.8rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1rem",
            borderBottom: "1px solid var(--line)",
            paddingBottom: "0.8rem",
          }}
        >
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>Custom Sourcing</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", margin: 0 }}>
              🎯 Request an Unlisted Game
            </h2>
          </div>
          <button
            type="button"
            className="drawer-close"
            onClick={onClose}
            aria-label="Close Request Modal"
          >
            &times;
          </button>
        </div>

        {success ? (
          <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
            <div
              style={{
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "50%",
                background: "var(--red)",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                fontSize: "1.8rem",
                margin: "0 auto 1rem",
              }}
            >
              ✔
            </div>
            <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.3rem" }}>
              Request Sent to Telegram!
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", margin: 0 }}>
              We are checking availability and will message your WhatsApp / Email with the best price shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="order-form" style={{ maxWidth: "100%" }}>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", margin: 0 }}>
              Can&rsquo;t find the title you want? Enter the game details below and our team will source it for you at a discounted rate.
            </p>

            {error && (
              <div
                style={{
                  padding: "0.6rem 0.9rem",
                  background: "var(--paper)",
                  borderLeft: "3px solid var(--danger)",
                  color: "var(--danger)",
                  fontSize: "0.85rem",
                }}
              >
                {error}
              </div>
            )}

            <div className="sr" aria-hidden="true">
              <label htmlFor="reqWebsite">Website</label>
              <input
                id="reqWebsite"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="reqTitle">Game Title *</label>
              <input
                id="reqTitle"
                type="text"
                required
                placeholder="e.g. Call of Duty: Black Ops 6, FC 25"
                value={gameTitle}
                onChange={(e) => setGameTitle(e.target.value)}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <div>
                <label htmlFor="reqPlatform">Platform</label>
                <select
                  id="reqPlatform"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                >
                  <option value="Steam (PC)">Steam (PC)</option>
                  <option value="Epic Games">Epic Games</option>
                  <option value="Rockstar Games">Rockstar Games</option>
                  <option value="EA App">EA App</option>
                  <option value="Xbox PC / Console">Xbox PC / Console</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="reqBudget">Expected Budget (₹)</label>
                <input
                  id="reqBudget"
                  type="number"
                  placeholder="e.g. 149"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="reqContact">Your WhatsApp or Email *</label>
              <input
                id="reqContact"
                type="text"
                required
                placeholder="+91 98765 43210 or yourname@gmail.com"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="reqNotes">Preferences / Notes (Optional)</label>
              <input
                id="reqNotes"
                type="text"
                placeholder="Prefer shared account or personal Steam activation"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn red btn-block"
              style={{ marginTop: "0.4rem" }}
            >
              {isSubmitting ? "Routing to Telegram..." : "Submit Game Request →"}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
