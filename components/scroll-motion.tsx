"use client";

import { useEffect } from "react";

/**
 * Scroll-triggered reveals.
 *
 * - `data-reveal="<style>"` marks an element that animates in once it scrolls
 *   into view. Styles live in globals.css (up, left, right, scale, fade,
 *   clip, clip-left, rise).
 * - `data-stagger` on a container reveals all its own `data-reveal`
 *   descendants together, one after another. Used for card rows and
 *   sliders, so cards that are off to the side of a carousel still appear.
 *
 * Content is only hidden when <html> has the `motion` class, which an inline
 * script in the layout adds before first paint (and never for visitors who
 * prefer reduced motion). If this component never mounts, that script
 * removes the class again so nothing stays hidden.
 */
export function ScrollMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");
    if (!root.classList.contains("motion")) return;

    const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-stagger]"));
    const grouped = new Set<Element>();
    const membersOf = (g: HTMLElement) =>
      Array.from(g.querySelectorAll<HTMLElement>("[data-reveal]")).filter((el) => el.closest("[data-stagger]") === g);

    for (const g of groups) {
      const step = Number(g.dataset.stagger) || 90;
      membersOf(g).forEach((el, i) => {
        el.style.setProperty("--reveal-delay", `${Math.min(i, 6) * step}ms`);
        grouped.add(el);
      });
    }

    // Clip-path reveals start with zero visible area, which the browser never
    // reports as intersecting, so those are watched through their parent.
    const proxied = new Map<Element, HTMLElement[]>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          proxied.get(el)?.forEach((p) => p.classList.add("is-in"));
          if (el.hasAttribute("data-stagger")) {
            membersOf(el).forEach((m) => m.classList.add("is-in"));
          }
          if (el.hasAttribute("data-reveal")) el.classList.add("is-in");
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    groups.forEach((g) => io.observe(g));
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (grouped.has(el)) return;
      const kind = el.dataset.reveal ?? "";
      const parent = el.parentElement;
      if ((kind.startsWith("clip") || kind === "rise") && parent) {
        proxied.set(parent, [...(proxied.get(parent) ?? []), el]);
        io.observe(parent);
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);

  return null;
}

/** Runs before first paint: opt in to motion unless the visitor prefers less. */
export const motionBootScript = `(function(){try{var d=document.documentElement;if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('motion');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.remove('motion')},3000)}}catch(e){}})();`;
