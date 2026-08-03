import { cn } from "@/lib/utils";

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

const DataTable = ({ rows }: Props) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-border bg-card-gradient">
      <table className="w-full min-w-[68rem] border-collapse text-left">
        <thead>
          <tr className="border-b border-border bg-background/60">
            <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neon-cyan">
              Headphone profile
            </th>
            <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neon-cyan">
              Key specifications
            </th>
            <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neon-cyan">
              Primary electrical demand
            </th>
            <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neon-cyan">
              Amplifier target spec
            </th>
            <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neon-cyan">
              What happens with the wrong amp
            </th>
            <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neon-cyan">
              Common examples
            </th>
            <th scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-neon-cyan">
              Sources that drive it
            </th>
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
                className="px-4 py-4 align-top text-sm font-semibold text-neon-magenta"
              >
                {row.profile}
              </th>
              <td className="px-4 py-4 align-top text-sm text-foreground/90">
                {row.specs}
              </td>
              <td className="px-4 py-4 align-top text-sm text-foreground/90">
                {row.demand}
              </td>
              <td className="px-4 py-4 align-top text-sm text-foreground/90">
                {row.target}
              </td>
              <td className="px-4 py-4 align-top text-sm text-foreground/90">
                {row.wrongAmp}
              </td>
              <td className="px-4 py-4 align-top text-sm text-foreground/90">
                {row.examples}
              </td>
              <td className="px-4 py-4 align-top text-sm text-foreground/90">
                {row.sources}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
