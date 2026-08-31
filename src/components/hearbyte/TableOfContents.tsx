import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "chain", label: "My preferred chains" },
  { id: "demands", label: "Enough power?" },
  { id: "phones", label: "Phones & Accessories" },
  { id: "software", label: "Software" },
  { id: "preferences", label: "Finding your preferences" },
  { id: "replaygain", label: "Using ReplayGain" },
  { id: "transfer", label: "Getting music onto your phone" },
  { id: "glossary", label: "Glossary" },
  { id: "links", label: "Links" },
];


const TableOfContents = () => {
  const [active, setActive] = useState<string>(sections[0].id);
  const [scrolled, setScrolled] = useState(false);
  const barRef = useRef<HTMLUListElement | null>(null);
  const chipRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  // Keep the active chip visible inside the horizontal bar (mobile/tablet).
  useEffect(() => {
    const bar = barRef.current;
    const chip = chipRefs.current.get(active);
    if (!bar || !chip) return;
    if (bar.scrollWidth <= bar.clientWidth) return;

    const target = chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2;
    const left = Math.max(0, Math.min(target, bar.scrollWidth - bar.clientWidth));
    if (Math.abs(left - bar.scrollLeft) < 4) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    bar.scrollTo({ left, behavior: reduce ? "auto" : "smooth" });
  }, [active]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Reading-line rule: the active section is the last one whose top edge has
  // passed a line ~a third down the viewport. Works for short sections too.
  useEffect(() => {
    let frame = 0;

    const compute = () => {
      frame = 0;
      if (lockUntil.current > Date.now()) return;

      const doc = document.documentElement;
      const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 4;
      if (atBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      const line = window.innerHeight * 0.33;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    lockUntil.current = Date.now() + 700;
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      {/* Desktop: compact floating card on the right */}
      <nav
        aria-label="Page sections"
        className={`pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-300 xl:block ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!scrolled}
      >
        <ul className="pointer-events-auto flex flex-col gap-3 rounded-2xl border border-neon-magenta/25 bg-background/90 px-3 py-4 shadow-card backdrop-blur-md">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id} className="group relative flex items-center justify-end">
                <a
                  href={`#${s.id}`}
                  onClick={(e) => handleClick(e, s.id)}
                  aria-label={`Jump to ${s.label}`}
                  aria-current={isActive ? "true" : undefined}
                  className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-magenta focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span
                    className={`whitespace-nowrap rounded-md border border-neon-cyan/30 bg-background px-2 py-1 text-xs font-semibold uppercase tracking-widest text-neon-cyan opacity-0 shadow-sm transition-opacity group-hover:opacity-100 ${
                      isActive ? "opacity-100" : ""
                    }`}
                  >
                    {s.label}
                  </span>
                  <span
                    className={`block h-3 w-3 rounded-full border transition-all ${
                      isActive
                        ? "scale-125 border-neon-magenta bg-neon-magenta shadow-neon-magenta"
                        : "border-neon-cyan bg-transparent hover:border-neon-cyan"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile/Tablet: horizontal sticky bar at the top */}
      <nav
        aria-label="Page sections"
        className="sticky top-0 z-40 bg-background/95 shadow-[0_1px_0_0_hsl(var(--neon-magenta)/0.12)] backdrop-blur-md xl:hidden"
      >
        <ul
          ref={barRef}
          className="flex gap-2 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  ref={(node) => {
                    if (node) chipRefs.current.set(s.id, node);
                    else chipRefs.current.delete(s.id);
                  }}
                  onClick={(e) => handleClick(e, s.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "border-neon-magenta bg-neon-magenta/10 text-neon-magenta"
                      : "border-neon-cyan/30 text-neon-cyan/80 hover:border-neon-cyan hover:text-neon-cyan"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            );
          })}

        </ul>
      </nav>
    </>
  );
};

export default TableOfContents;