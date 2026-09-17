"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const AREAS = [
  "CSR Partnership",
  "CSR Programme",
  "Sustainability Programme",
  "Community Development",
  "Environmental Programme",
  "Impact Assessment",
  "Partnership / Collaboration",
  "Volunteering",
  "Other",
];

const input =
  "min-h-13 w-full rounded-(--radius-chip) border border-line bg-surface px-5 text-[15px] text-ink-950 placeholder:text-ink-400 transition-colors focus:border-green-600";
const labelCls = "text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-400";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [reference, setReference] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      const json = (await res.json()) as { reference: string };
      setReference(json.reference);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-4 rounded-(--radius-image) border border-green-600 bg-green-50 p-8 lg:p-9">
        <span className={labelCls}>Enquiry received</span>
        <p className="m-0 font-display text-[24px] font-bold leading-[1.2] tracking-[-0.025em] text-ink-950 lg:text-[26px]">
          Thank you. Your reference is {reference}.
        </p>
        <p className="m-0 text-[16px] leading-[1.7] text-ink-600">
          A member of the team will respond directly. Enquiries are routed by area of interest to the person who can
          answer them.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-(--radius-image) border border-line bg-paper-2 p-6 sm:p-8 lg:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
        <label className="flex flex-col gap-2.5">
          <span className={labelCls}>Name</span>
          <input name="name" type="text" required placeholder="Full name" className={input} />
        </label>
        <label className="flex flex-col gap-2.5">
          <span className={labelCls}>Organisation</span>
          <input name="organisation" type="text" placeholder="Organisation name" className={input} />
        </label>
        <label className="flex flex-col gap-2.5">
          <span className={labelCls}>Designation</span>
          <input name="designation" type="text" placeholder="Your role" className={input} />
        </label>
        <label className="flex flex-col gap-2.5">
          <span className={labelCls}>Email</span>
          <input name="email" type="email" required placeholder="name@organisation.com" className={input} />
        </label>
        <label className="flex flex-col gap-2.5">
          <span className={labelCls}>Phone</span>
          <input name="phone" type="tel" placeholder="Optional" className={input} />
        </label>
        <label className="flex flex-col gap-2.5">
          <span className={labelCls}>Location</span>
          <input name="location" type="text" placeholder="City or state" className={input} />
        </label>
      </div>

      <label className="flex flex-col gap-2.5">
        <span className={labelCls}>Area of interest</span>
        <select name="area" className={`${input} appearance-none`} defaultValue={AREAS[0]}>
          {AREAS.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2.5">
        <span className={labelCls}>Message</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us about your CSR or sustainability requirement"
          className="w-full resize-y rounded-(--radius-card) border border-line bg-surface p-5 text-[15px] leading-[1.6] text-ink-950 placeholder:text-ink-400 transition-colors focus:border-green-600"
        />
      </label>

      <label className="flex items-start gap-3">
        <input name="consent" type="checkbox" required className="mt-1 size-4 flex-none accent-green-600" />
        <span className="text-[14px] leading-[1.6] text-ink-600">
          I agree that Eco Green Sustainability Foundation may use these details to respond to this enquiry.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-(--radius-chip) border-none bg-green-600 px-8 text-[15px] font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
        <ArrowUpRight
          size={17}
          strokeWidth={2.2}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>

      <p aria-live="polite" className="m-0 text-[14px] leading-[1.6] text-ink-400">
        {status === "error"
          ? "Something went wrong. Please try again."
          : "We respond to every enquiry. Your details are used only to reply to you."}
      </p>
    </form>
  );
}
