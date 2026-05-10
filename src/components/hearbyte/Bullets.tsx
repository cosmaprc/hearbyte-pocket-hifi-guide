import type { ReactNode } from "react";

const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex gap-2">
        <span
          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan"
          aria-hidden
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default Bullets;