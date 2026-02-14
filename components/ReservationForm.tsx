"use client";

import { FormEvent, useState } from "react";

type Status =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ReservationForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Unable to reserve right now. Please try again shortly.");
      }

      const result = (await response.json()) as { message: string };
      setStatus({ type: "success", message: result.message });
      event.currentTarget.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setStatus({ type: "error", message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" required autoComplete="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input id="email" type="email" name="email" required autoComplete="email" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" type="tel" name="phone" required autoComplete="tel" />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required />
      </div>
      <div className="form-group">
        <label htmlFor="time">Time</label>
        <input id="time" type="time" name="time" required />
      </div>
      <div className="form-group">
        <label htmlFor="guests">Guests</label>
        <select id="guests" name="guests" required defaultValue="2">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="notes">Special requests (optional)</label>
        <textarea id="notes" name="notes" rows={3} />
      </div>
      <button className="button primary" type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Reserve a Table"}
      </button>
      {status.type === "success" ? <p className="alert success">{status.message}</p> : null}
      {status.type === "error" ? <p className="alert error">{status.message}</p> : null}
    </form>
  );
}
