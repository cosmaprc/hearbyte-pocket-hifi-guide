import { cn } from "@/lib/utils";

export type TagKind = "reviews" | "measurements" | "forum";

const styles: Record<TagKind, string> = {
  reviews: "border-neon-cyan/50 text-neon-cyan",
  measurements: "border-neon-magenta/50 text-neon-magenta",
  forum: "border-neon-purple/50 text-neon-purple",
};

const Tag = ({ kind }: { kind: TagKind }) => (
  <span
    className={cn(
      "ml-1 inline-flex items-center rounded-full border bg-background/40 px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wider",
      styles[kind]
    )}
  >
    {kind}
  </span>
);

export default Tag;