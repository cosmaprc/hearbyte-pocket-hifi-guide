import { cn } from "@/lib/utils";
import { MoveHorizontal } from "lucide-react";

type Row = {
  profile: string;
  specs: string;
  demand: string;
  target: string;
  wrongAmp: string;
  examples: React.ReactNode;
  sources: React.ReactNode;
};

type Props = {
  rows: Row[];
};

const columns: { key: keyof Row; label: string }[] = [
  { key: "specs", label: "Key specifications" },
  { key: "demand", label: "Primary electrical demand" },
  { key: "target", label: "Amplifier target spec" },
  { key: "wrongAmp", label: "What happens with the wrong amp" },
  { key: "examples", label: "Common examples" },
  { key: "sources", label: "Sources that drive it" },
];

const DataTable = ({ rows }: Props) => {
  return (
    <>
      {/* Mobile: one stacked card per profile */}
      <div className="space-y-4 lg:hidden">
        {rows.map((row, i) => (
          <article
            key={i}
            className="rounded-xl border border-border bg-card-gradient p-4"
          >
            <h3 className="font-display text-base font-bold text-neon-magenta">
              {row.profile}
            </h3>
            <dl className="mt-3 space-y-3">
              {columns.map((c) => (
                <div key={c.key}>
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-widest text-neon-cyan">
                    {c.label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/90">{row[c.key]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      {/* Desktop: full table with a pinned profile column */}
      <div className="hidden lg:block">
        <p className="mb-2 flex items-center gap-2 text-xs text-foreground/60">
          <MoveHorizontal className="h-3.5 w-3.5 text-neon-cyan" aria-hidden />
          Scroll the table sideways to see every column — the profile column stays pinned.
        </p>
        <div className="w-full overflow-x-auto rounded-xl border border-border bg-card-gradient">
          <table className="w-full min-w-[68rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-background/60">
                <th
                  scope="col"
                  className="sticky left-0 z-10 bg-background/95 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neon-cyan backdrop-blur"
                >
                  Headphone profile
                </th>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    scope="col"
                    className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neon-cyan"
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={cn(
                    "border-b border-border transition-smooth hover:bg-background/40",
                    i === rows.length - 1 && "border-b-0"
                  )}
                >
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-background/95 px-4 py-4 align-top text-sm font-semibold text-neon-magenta backdrop-blur"
                  >
                    {row.profile}
                  </th>
                  {columns.map((c) => (
                    <td
                      key={c.key}
                      className="px-4 py-4 align-top text-sm text-foreground/90"
                    >
                      {row[c.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataTable;
