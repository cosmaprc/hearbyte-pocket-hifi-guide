import PickCard from "./PickCard";
import type { PickGroup } from "@/data/picks";

const PickGroupBlock = ({ group }: { group: PickGroup }) => (
  <div className="mb-12 last:mb-0">
    <div className="mb-5 flex items-baseline justify-between border-b border-border/60 pb-3">
      <h3 className="font-display text-xl font-bold text-neon-cyan text-glow-cyan sm:text-2xl">
        {group.title}
      </h3>
      {group.subtitle && (
        <p className="hidden text-sm text-muted-foreground sm:block">{group.subtitle}</p>
      )}
    </div>
    {group.subtitle && (
      <p className="mb-5 -mt-3 text-sm text-muted-foreground sm:hidden">{group.subtitle}</p>
    )}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {group.items.map((item) => (
        <PickCard key={item.name} item={item} />
      ))}
    </div>
  </div>
);

export default PickGroupBlock;