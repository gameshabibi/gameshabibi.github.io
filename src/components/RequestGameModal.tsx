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
          background: "var(--surface-panel-strong)",
          border: "1px solid var(--border-soft)",
          borderRadius: "var(--radius-lg)",
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
            borderBottom: "1px solid rgba(245, 166, 35, 0.15)",
            paddingBottom: "0.8rem",
          }}
        >
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>Custom Sourcing</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", margin: 0 }}>
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
                background: "rgba(0, 255, 179, 0.15)",
                color: "var(--mint)",
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
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", margin: 0 }}>
              Can&rsquo;t find the title you want? Enter the game details below and our team will source it for you at a discounted rate.
            </p>

            {error && (
              <div
                style={{
                  padding: "0.6rem 0.9rem",
                  background: "rgba(255, 127, 147, 0.15)",
                  border: "1px solid var(--danger)",
                  color: "var(--danger)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.85rem",
                }}
              >
                {error}
              </div>
            )}

            <div>
              <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
                Game Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Call of Duty: Black Ops 6, FC 25"
                value={gameTitle}
                onChange={(e) => setGameTitle(e.target.value)}
                style={{
                  width: "100%",
                  background: "rgba(25, 18, 48, 0.85)",
                  border: "1px solid var(--border-soft)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--text-primary)",
                  padding: "0.6rem 0.85rem",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
                  Platform
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(25, 18, 48, 0.85)",
                    border: "1px solid var(--border-soft)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-primary)",
                    padding: "0.6rem 0.85rem",
                    outline: "none",
                  }}
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
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
                  Expected Budget (₹)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 299"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  style={{
                    width: "100%",
                    background: "rgba(25, 18, 48, 0.85)",
                    border: "1px solid var(--border-soft)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-primary)",
                    padding: "0.6rem 0.85rem",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
                Your WhatsApp or Email *
              </label>
              <input
                type="text"
                required
                placeholder="+91 98765 43210 or yourname@gmail.com"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                style={{
                  width: "100%",
                  background: "rgba(25, 18, 48, 0.85)",
                  border: "1px solid var(--border-soft)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--text-primary)",
                  padding: "0.6rem 0.85rem",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
                Preferences / Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="Prefer shared budget account / or in my own account"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                style={{
                  width: "100%",
                  background: "rgba(25, 18, 48, 0.85)",
                  border: "1px solid var(--border-soft)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--text-primary)",
                  padding: "0.6rem 0.85rem",
                  outline: "none",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-block"
              style={{ minHeight: "2.9rem", marginTop: "0.4rem" }}
            >
              {isSubmitting ? "Routing to Telegram..." : "Submit Game Request 🚀"}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
