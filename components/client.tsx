"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Close, Menu, Plus, Minus, Check, LogoMark, ArrowRight } from "./icons";
import { Arrow, pillClass } from "./ui";
import { nav, site, faqs } from "@/lib/site";

/* ---------------- Fixed header ---------------- */

/**
 * Fixed to the viewport. Over the hero it is transparent; once the page
 * scrolls it becomes a floating solid ink bar.
 */
export function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      setSolid(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-[top,padding] duration-500 ease-out-expo ${
        solid ? "top-2 px-2 sm:px-4 lg:px-6" : "top-0 px-0"
      }`}
    >
      <div
        className={`rounded-[20px] transition-[background-color,box-shadow,padding] duration-500 ease-out-expo ${
          solid
            ? "bg-ink/92 py-3 shadow-[0_12px_32px_-14px_rgba(19,42,32,0.55)] backdrop-blur-md"
            : "bg-transparent py-6 sm:py-7"
        }`}
      >
        <div className="mx-auto w-full max-w-[1104px] px-5 sm:px-8">
          <SiteNav />
        </div>
      </div>
    </header>
  );
}

/* ---------------- Horizontal slider ---------------- */

/**
 * Scroll-snap carousel. Swipe or trackpad-scroll on any device; arrow
 * buttons page by one card. The track bleeds to the edge of its parent
 * while the first card lines up with the page content column.
 */
export function Slider({
  label,
  children,
  className = "",
  controlsTone = "ink",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  controlsTone?: "ink" | "white";
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const trackId = useId();
  const [state, setState] = useState({ start: true, end: false, scrollable: false });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      const max = el.scrollWidth - el.clientWidth;
      setState({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2, scrollable: max > 2 });
    };
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      ro.disconnect();
    };
  }, []);

  const page = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>(":scope > li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = first ? first.offsetWidth + gap : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  const btn =
    controlsTone === "white"
      ? "bg-white text-ink hover:bg-ink hover:text-white"
      : "bg-ink text-white hover:bg-forest";

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label} className={className}>
      <ul
        ref={trackRef}
        id={trackId}
        tabIndex={0}
        data-stagger="110"
        aria-label={`${label}, scroll horizontally`}
        className="slider-track flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain py-2 focus-visible:outline-offset-[-2px] sm:gap-6"
      >
        {children}
      </ul>
      <div className={`mt-8 flex justify-center gap-3 ${state.scrollable ? "" : "invisible"}`}>
        <button
          type="button"
          aria-controls={trackId}
          aria-label="Previous"
          disabled={state.start}
          onClick={() => page(-1)}
          className={`grid size-11 place-items-center rounded-full transition-[background-color,color,opacity] duration-300 disabled:cursor-not-allowed disabled:opacity-35 ${btn}`}
        >
          <ArrowRight size={18} strokeWidth={2.2} className="rotate-180" />
        </button>
        <button
          type="button"
          aria-controls={trackId}
          aria-label="Next"
          disabled={state.end}
          onClick={() => page(1)}
          className={`grid size-11 place-items-center rounded-full transition-[background-color,color,opacity] duration-300 disabled:cursor-not-allowed disabled:opacity-35 ${btn}`}
        >
          <ArrowRight size={18} strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}

/* ---------------- Navigation ---------------- */

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav aria-label="Main" className="relative z-20">
      <div className="flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2 text-sun" aria-label={`${site.name} home`}>
          <LogoMark size={30} className="text-white" />
          <span className="font-display text-[24px] font-extrabold uppercase leading-none tracking-[0.01em] [font-variation-settings:'opsz'_72]">
            {site.name}
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[14px] font-medium text-white/90 underline-offset-[6px] transition-colors hover:text-white hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <a href="#donate" className={pillClass("coral", "whitespace-nowrap")}>
              Donate now
              <Arrow />
            </a>
          </span>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25 md:hidden"
          >
            {open ? <Close size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-14 rounded-2xl bg-cream p-3 shadow-[0_20px_40px_-12px_rgba(19,42,32,0.5)] md:hidden"
      >
        <ul className="flex flex-col">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-display text-[22px] font-extrabold uppercase text-ink hover:bg-cream-deep"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#donate" onClick={() => setOpen(false)} className={pillClass("coral", "mt-2 w-full")}>
          Donate now
          <Arrow />
        </a>
      </div>
    </nav>
  );
}

/* ---------------- Donation form (front-end demo) ---------------- */

export function DonateForm() {
  const [amount, setAmount] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");
  const inputId = useId();
  const msgId = useId();

  function submit(e: FormEvent) {
    e.preventDefault();
    const n = Number(amount);
    if (!amount || !Number.isFinite(n) || n <= 0) {
      setState("error");
      return;
    }
    setState("done");
  }

  if (state === "done") {
    return (
      <div role="status" className="mx-auto flex max-w-[380px] flex-col items-center text-center">
        <span className="grid size-11 place-items-center rounded-full bg-forest text-white">
          <Check size={22} />
        </span>
        <p className="mt-4 font-display text-[24px] font-extrabold uppercase leading-none text-ink">
          Thank you for ${Number(amount).toLocaleString("en-US")}!
        </p>
        <p className="mt-2 text-[13px] leading-[1.55] text-ink/75">
          This is a portfolio demo, so no payment was taken.
        </p>
        <button
          type="button"
          onClick={() => {
            setAmount("");
            setState("idle");
          }}
          className="mt-4 text-[12px] font-semibold uppercase tracking-[0.06em] text-ink underline decoration-1 underline-offset-4 hover:text-forest"
        >
          Try another amount
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="mx-auto flex w-full max-w-[380px] flex-col items-center">
      <label htmlFor={inputId} className="sr-only">
        Donation amount in US dollars
      </label>
      <div
        className={`flex h-12 w-full items-center rounded-full bg-white/55 pl-5 pr-1.5 ring-1 transition-shadow focus-within:bg-white/80 focus-within:ring-2 ${
          state === "error" ? "ring-coral-deep" : "ring-ink/10 focus-within:ring-forest"
        }`}
      >
        <span className="text-[15px] font-semibold text-ink/60" aria-hidden="true">
          $
        </span>
        <input
          id={inputId}
          inputMode="decimal"
          autoComplete="off"
          placeholder="Enter amount"
          value={amount}
          aria-invalid={state === "error"}
          aria-describedby={msgId}
          onChange={(e) => {
            setAmount(e.target.value.replace(/[^\d.]/g, ""));
            if (state === "error") setState("idle");
          }}
          className="num h-full min-w-0 flex-1 bg-transparent pl-1.5 pr-4 text-[15px] font-medium text-ink outline-none focus-visible:outline-none"
        />
        <span className="pr-4 text-[12px] font-semibold uppercase tracking-[0.06em] text-ink/55" aria-hidden="true">
          USD
        </span>
      </div>
      <p id={msgId} className={`mt-3 text-center text-[13px] leading-[1.55] ${state === "error" ? "font-medium text-coral-ink" : "text-ink/70"}`}>
        {state === "error"
          ? "Enter an amount above $0 to continue."
          : "Choose any amount. Monthly gifts help us plan meals and classes ahead."}
      </p>
      <button type="submit" className={pillClass("forest", "mt-5")}>
        Donate now
        <Arrow />
      </button>
    </form>
  );
}

/* ---------------- Count-up number ---------------- */

export function CountUp({ value, suffix = "+", className = "" }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  // Server render shows the real number; the animation only replays it.
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return; // already on screen: leave it
    setShown(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          setShown(Math.round(value * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={`num ${className}`}>
      <span aria-hidden="true">
        {shown.toLocaleString("en-US")}
        {suffix}
      </span>
      <span className="sr-only">
        {value.toLocaleString("en-US")}
        {suffix}
      </span>
    </span>
  );
}

/* ---------------- FAQ accordion ---------------- */

export function Faq() {
  const [open, setOpen] = useState<number | null>(1);
  const base = useId();
  return (
    <ul className="divide-y divide-ink/10">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${base}-q${i}`;
        const panelId = `${base}-a${i}`;
        return (
          <li key={f.q} data-reveal="up">
            <h3 className="font-sans text-[14px] font-bold normal-case leading-snug text-ink [font-variation-settings:normal]">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-4 text-left"
              >
                <span className="transition-colors group-hover:text-forest">{f.q}</span>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                    isOpen ? "bg-ink text-white" : "bg-white text-ink group-hover:bg-pale"
                  }`}
                >
                  {isOpen ? <Minus size={14} strokeWidth={2.4} /> : <Plus size={14} strokeWidth={2.4} />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={`grid transition-[grid-template-rows] duration-500 ease-out-expo ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="max-w-[46ch] pb-5 pr-14 text-[14px] leading-[1.6] text-muted">{f.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
