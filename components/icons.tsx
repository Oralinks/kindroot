import type { SVGProps } from "react";
import type { ProgramIcon, WayIcon } from "@/lib/site";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

// One stroke system for every icon: 24px grid, 1.8 stroke, round caps.
function Base({ size = 24, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Base>
  );
}

export function Close(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Base>
  );
}

export function Menu(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </Base>
  );
}

export function Plus(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 6v12M6 12h12" />
    </Base>
  );
}

export function Minus(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 12h12" />
    </Base>
  );
}

export function Check(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Base>
  );
}

/* ---------- Program icons ---------- */

export function ProgramGlyph({ name, ...props }: IconProps & { name: ProgramIcon }) {
  switch (name) {
    case "bowl":
      return (
        <Base {...props}>
          <path d="M3.5 11.5h17a8.5 8.5 0 0 1-17 0Z" />
          <path d="M9 20h6" />
          <path d="M9 8c0-1.2 1-1.6 1-2.8M13 8c0-1.2 1-1.6 1-2.8" />
        </Base>
      );
    case "heart":
      return (
        <Base {...props}>
          <path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10Z" />
          <path d="M12 10.5v5M9.5 13h5" />
        </Base>
      );
    case "book":
      return (
        <Base {...props}>
          <path d="M12 6.5C10.3 5.2 7.7 4.8 4 5v13c3.7-.2 6.3.2 8 1.5 1.7-1.3 4.3-1.7 8-1.5V5c-3.7-.2-6.3.2-8 1.5Z" />
          <path d="M12 6.5v13" />
        </Base>
      );
    case "shelter":
      return (
        <Base {...props}>
          <path d="M3.5 11 12 4l8.5 7" />
          <path d="M5.5 9.5V20h13V9.5" />
          <path d="M12 17.5s-3-1.8-3-4a1.6 1.6 0 0 1 3-.9 1.6 1.6 0 0 1 3 .9c0 2.2-3 4-3 4Z" />
        </Base>
      );
  }
}

/* ---------- "Ways to help" icons ---------- */

export function WayGlyph({ name, ...props }: IconProps & { name: WayIcon }) {
  switch (name) {
    case "donate":
      return (
        <Base {...props}>
          <path d="M3 15.5h3l4.5 1.5h3.2a1.5 1.5 0 0 0 0-3H11" />
          <path d="m13.7 17 5-2a1.6 1.6 0 0 1 1.3 2.9L13.5 21 6 19.5" />
          <path d="M3 13.5v7.5" />
          <circle cx="14" cy="7" r="3.5" />
          <path d="M14 5.6v2.8" />
        </Base>
      );
    case "volunteer":
      return (
        <Base {...props}>
          <path d="M12 20s-7.5-4.4-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10Z" />
          <path d="m8.5 11.5 3.5 3 3.5-3" />
        </Base>
      );
    case "sponsor":
      return (
        <Base {...props}>
          <circle cx="12" cy="5" r="2.2" />
          <path d="M5 8.5 9.5 10h5L19 8.5" />
          <path d="M9.5 10v4.5L8 21M14.5 10v4.5L16 21M9.5 14.5h5" />
        </Base>
      );
    case "fundraise":
      return (
        <Base {...props}>
          <rect x="4" y="8" width="16" height="12.5" rx="2" />
          <path d="M8 8V6a4 4 0 0 1 8 0v2" />
          <path d="M12 11.5v6M9.5 13.2c0-1 1.1-1.7 2.5-1.7s2.5.6 2.5 1.6c0 2.2-5 1.2-5 3.3 0 1 1.1 1.6 2.5 1.6s2.5-.7 2.5-1.7" />
        </Base>
      );
    case "story":
      return (
        <Base {...props}>
          <path d="M4.5 5.5h15v10h-8l-4.5 4v-4h-2.5z" />
          <path d="M9 9.5h6M9 12.5h3.5" />
        </Base>
      );
    case "event":
      return (
        <Base {...props}>
          <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
          <path d="m12 12.6.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2-1.45-1.4 2-.3Z" />
        </Base>
      );
  }
}

/* ---------- Feature icons (Consistency section) ---------- */

export function Sprout(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 20v-8" />
      <path d="M12 12c0-3.5-2.5-6-7-6 0 4 2.5 6 7 6Z" />
      <path d="M12 14.5c0-3 2-5.5 7-5.5 0 3.5-2.5 5.5-7 5.5Z" />
    </Base>
  );
}

export function Loop(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M20 12a8 8 0 0 1-14.3 4.9" />
      <path d="M4 12A8 8 0 0 1 18.3 7.1" />
      <path d="M18.5 3.5v3.8h-3.8M5.5 20.5v-3.8h3.8" />
    </Base>
  );
}

/* ---------- Social ---------- */

export function Facebook(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M14.5 8.5H17V5h-2.5A3.5 3.5 0 0 0 11 8.5V11H8.5v3.5H11V21h3.5v-6.5H17l.5-3.5h-3V9a.5.5 0 0 1 .5-.5Z" />
    </Base>
  );
}

export function XLogo(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4.5 4h4l11 16h-4Z" />
      <path d="M19.5 4 13.4 11M10.6 13 4.5 20" />
    </Base>
  );
}

export function Instagram(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r=".6" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6.5 10v8.5" />
      <circle cx="6.5" cy="6.3" r=".9" fill="currentColor" stroke="none" />
      <path d="M11 18.5V10M11 13.7c0-2.2 1.4-3.7 3.4-3.7 1.9 0 3.1 1.3 3.1 3.6v4.9" />
    </Base>
  );
}

/* ---------- Brand mark: cupped hands holding a sprout ---------- */

export function LogoMark({ size = 32, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path
        d="M20 22.5c0-5.2-3-8.7-8.5-9.2.2 5.5 3.3 8.8 8.5 9.2Z"
        fill="currentColor"
      />
      <path
        d="M20 22.5c0-6.5 3.5-11.3 10-12.3-.2 7-4 11.6-10 12.3Z"
        fill="currentColor"
      />
      <path d="M20 22.5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M4.5 21.5c2.3 0 4 .9 5.6 2.4l4 3.7c1 .9 2.6.9 3.5-.1.8-.9.7-2.3-.2-3.1l-3.6-3.1M4.5 21.5V31l9 3.2c2.2.8 4.6.6 6.5-.6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.5 21.5c-2.3 0-4 .9-5.6 2.4l-4 3.7c-1 .9-2.6.9-3.5-.1-.8-.9-.7-2.3.2-3.1l3.6-3.1M35.5 21.5V31l-9 3.2c-2.2.8-4.6.6-6.5-.6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
