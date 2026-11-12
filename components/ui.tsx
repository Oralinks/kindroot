import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

type Tone = "coral" | "ink" | "forest";

const tones: Record<Tone, string> = {
  coral: "bg-coral text-white hover:bg-coral-deep",
  ink: "bg-ink text-white hover:bg-forest",
  forest: "bg-forest text-white hover:bg-ink",
};

export function pillClass(tone: Tone = "coral", extra = "") {
  return [
    "group inline-flex items-center justify-center gap-2 rounded-full",
    "h-10 px-5 text-[12px] font-semibold uppercase tracking-[0.06em] leading-none",
    "transition-[background-color,transform,box-shadow] duration-300 ease-out-expo",
    "hover:-translate-y-px hover:shadow-[0_6px_16px_-6px_rgba(19,42,32,0.45)] active:translate-y-0",
    tones[tone],
    extra,
  ].join(" ");
}

export function Arrow() {
  return (
    <ArrowRight
      size={14}
      strokeWidth={2.2}
      className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5"
    />
  );
}

export function PillLink({
  href,
  children,
  tone = "coral",
  className = "",
  reveal,
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
  /** Scroll-reveal style (see globals.css), e.g. "up". */
  reveal?: string;
}) {
  return (
    <a href={href} className={pillClass(tone, className)} data-reveal={reveal}>
      {children}
      <Arrow />
    </a>
  );
}

/** Small text link with arrow, used under campaign and story cards. */
export function TextLink({ href, children, label }: { href: string; children: ReactNode; label?: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-ink transition-colors hover:text-coral-ink"
    >
      {children}
      <Arrow />
    </a>
  );
}

/** Centred section header: H2 + supporting line. */
export function SectionHeader({
  title,
  sub,
  id,
  className = "",
}: {
  title: ReactNode;
  sub: string;
  id?: string;
  className?: string;
}) {
  return (
    <header data-stagger="120" className={`mx-auto max-w-[620px] text-center ${className}`}>
      <h2 id={id} data-reveal="up" className="text-[40px] leading-[1.02] text-ink sm:text-[52px] lg:text-[56px]">
        {title}
      </h2>
      <p data-reveal="up" className="mx-auto mt-4 max-w-[460px] text-[15px] leading-[1.6] text-muted">{sub}</p>
    </header>
  );
}

export function Mark({ children }: { children: ReactNode }) {
  return <span className="mark">{children}</span>;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1104px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Percent bar used in campaign cards. */
export function Progress({ value, label }: { value: number; label: string }) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className="h-1.5 w-full overflow-hidden rounded-full bg-cream-deep"
    >
      <div className="progress-fill h-full rounded-full bg-ink" style={{ width: `${pct}%` }} />
    </div>
  );
}
