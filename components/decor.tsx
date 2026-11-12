import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

/** 8-petal flower / asterisk accent. */
export function Flower({ className, ...props }: P) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false" {...props}>
      <g fill="currentColor">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx="20" cy="10.5" rx="5" ry="9" transform={`rotate(${i * 45} 20 20)`} />
        ))}
        <circle cx="20" cy="20" r="6" />
      </g>
    </svg>
  );
}

/** Hand-drawn loop scribble used across the impact section. */
export function Scribble({ className, ...props }: P) {
  return (
    <svg viewBox="0 0 900 520" fill="none" className={className} aria-hidden="true" focusable="false" {...props}>
      <path
        d="M10 60c120 10 230-20 300-10 70 10 120 60 100 130-18 64-102 80-128 30-24-48 30-100 108-108 110-12 186 80 258 92 80 14 150-40 140-110-8-56-74-70-104-26-34 50 6 130 76 168 74 40 120 120 120 290"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Small curved arrow doodle. */
export function ArrowDoodle({ className, ...props }: P) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={className} aria-hidden="true" focusable="false" {...props}>
      <path
        d="M4 6c6 14 18 24 40 26"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M36 24.5 45 32l-10 4.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Organic blob that sits behind testimonial cut-outs. */
export function Blob({ className, ...props }: P) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false" preserveAspectRatio="none" {...props}>
      <path
        fill="currentColor"
        d="M44 18c22-14 54-8 76-14 26-7 46 6 52 30 5 20-8 32 2 52 12 24 26 40 18 66-8 25-34 38-58 36-20-2-34-14-54-10-24 5-46 0-58-20-11-19 2-38-4-58C12 78 8 60 16 44c6-12 16-18 28-26Z"
      />
    </svg>
  );
}
