"use client";

import { FormEvent, useState } from "react";
import { copy } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("request_failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-2 text-sm">
        <span className="text-muted">{copy.contact.name}</span>
        <input
          required
          name="name"
          minLength={2}
          className="rounded-lg border border-line bg-bg px-3 py-3 outline-none ring-accent focus:ring-2"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="text-muted">{copy.contact.email}</span>
        <input
          required
          type="email"
          name="email"
          className="rounded-lg border border-line bg-bg px-3 py-3 outline-none ring-accent focus:ring-2"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="text-muted">{copy.contact.message}</span>
        <textarea
          required
          name="message"
          minLength={20}
          rows={6}
          className="resize-y rounded-lg border border-line bg-bg px-3 py-3 outline-none ring-accent focus:ring-2"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink disabled:opacity-60"
      >
        {status === "sending" ? copy.contact.sending : copy.contact.send}
      </button>
      {status === "success" ? <p className="text-sm text-accent">{copy.contact.success}</p> : null}
      {status === "error" ? <p className="text-sm text-red-300">{copy.contact.error}</p> : null}
    </form>
  );
}
