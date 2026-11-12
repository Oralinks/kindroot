import type { Metadata, Viewport } from "next";
import { Big_Shoulders, DM_Sans } from "next/font/google";
import { site } from "@/lib/site";
import { ScrollMotion, motionBootScript } from "@/components/scroll-motion";
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
    // The boot script adds a class to <html> before hydration, hence the warning opt-out.
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootScript }} />
      </head>
      <body>
        {children}
        <ScrollMotion />
      </body>
    </html>
  );
}
