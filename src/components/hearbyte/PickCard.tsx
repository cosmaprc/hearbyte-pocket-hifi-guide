import { Badge } from "@/components/ui/badge";
import type { Pick } from "@/data/picks";

const PickCard = ({ item }: { item: Pick }) => (
  <article className="group relative overflow-hidden rounded-xl border border-border bg-card-gradient p-5 transition-smooth hover:-translate-y-1 hover:border-neon-magenta/70 hover:shadow-card-glow">
    <div
      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-neon-magenta/20 opacity-0 blur-2xl transition-smooth group-hover:opacity-100"
      aria-hidden
    />
    <h3 className="font-display text-lg font-bold text-foreground transition-smooth group-hover:text-neon-magenta">
      {item.name}
    </h3>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.blurb}</p>
    {item.pairing && (
      <p className="mt-3 text-xs font-medium text-neon-cyan/90">→ {item.pairing}</p>
    )}
    {item.genres && item.genres.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.genres.map((g) => (
          <Badge
            key={g}
            variant="outline"
            className="border-neon-cyan/40 bg-neon-cyan/5 text-[10px] uppercase tracking-wider text-neon-cyan"
          >
            {g}
          </Badge>
        ))}
      </div>
    )}
  </article>
);

export default PickCard;