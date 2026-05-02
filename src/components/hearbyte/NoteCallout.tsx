import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  accent?: "magenta" | "cyan";
}

const NoteCallout = ({ icon: Icon, title, children, accent = "magenta" }: Props) => {
  const ring = accent === "magenta" ? "border-neon-magenta/50" : "border-neon-cyan/50";
  const text = accent === "magenta" ? "text-neon-magenta" : "text-neon-cyan";
  const glow = accent === "magenta" ? "hover:shadow-neon-magenta" : "hover:shadow-neon-cyan";
  return (
    <div className={`relative overflow-hidden rounded-2xl border ${ring} bg-card-gradient p-6 transition-smooth ${glow} sm:p-8`}>
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${ring} bg-background/50 ${text}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className={`font-display text-xl font-bold ${text}`}>{title}</h3>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
        {children}
      </div>
    </div>
  );
};

export default NoteCallout;