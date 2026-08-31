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
  const barRef = useRef<HTMLUListElement | null>(null);
  const chipRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const lockUntil = useRef(0);

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
    <nav
      aria-label="Page sections"
      className="sticky top-0 z-40 bg-background/95 shadow-[0_1px_0_0_hsl(var(--neon-magenta)/0.12)] backdrop-blur-md"
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
  );
};

export default TableOfContents;