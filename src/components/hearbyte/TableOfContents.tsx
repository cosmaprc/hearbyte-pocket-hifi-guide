import { useEffect, useState } from "react";

const sections = [
  { id: "source", label: "Source" },
  { id: "software", label: "Software" },
  { id: "headphones", label: "Headphones" },
  { id: "replaygain", label: "ReplayGain" },
  { id: "glossary", label: "Glossary" },
  { id: "links", label: "Links" },
];

const TableOfContents = () => {
  const [active, setActive] = useState<string>(sections[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      {/* Desktop: vertical sticky nav on the right */}
      <nav
        aria-label="Page sections"
        className={`pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-300 lg:block ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!scrolled}
      >
        <ul className="pointer-events-auto flex flex-col gap-3 rounded-full border border-neon-magenta/30 bg-background/60 px-3 py-4 backdrop-blur-md">
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
                    className={`whitespace-nowrap rounded-md border border-neon-cyan/30 bg-background/80 px-2 py-1 text-xs font-semibold uppercase tracking-widest text-neon-cyan opacity-0 transition-opacity group-hover:opacity-100 ${
                      isActive ? "opacity-100" : ""
                    }`}
                  >
                    {s.label}
                  </span>
                  <span
                    className={`block h-3 w-3 rounded-full border transition-all ${
                      isActive
                        ? "scale-125 border-neon-magenta bg-neon-magenta shadow-neon-magenta"
                        : "border-neon-cyan/60 bg-transparent hover:border-neon-cyan"
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
        className="sticky top-0 z-40 border-b border-neon-magenta/20 bg-background/80 backdrop-blur-md lg:hidden"
      >
        <ul className="flex gap-2 overflow-x-auto px-4 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
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