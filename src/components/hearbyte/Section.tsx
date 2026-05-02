import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, className, children }: Props) => (
  <section id={id} className={cn("relative px-6 py-20 sm:py-24", className)}>
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);

export default Section;