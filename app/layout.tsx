import type { Metadata, Viewport } from "next";
import { Big_Shoulders, DM_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  // Next has no metric overrides for this family; the CSS stack falls back to Arial Narrow.
  adjustFontFallback: false,
});

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Building brighter, safe futures`,
  description: `${site.name} is a concept charity website: food, health, education and disaster relief programs for communities across Africa. Portfolio demo.`,
};

export const viewport: Viewport = {
  themeColor: "#eaebdd",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
