import type { ReactNode } from "react";
import ExtLink from "./ExtLink";

type Props = {
  title: string;
  href?: string;
  children?: ReactNode;
};

const Card = ({ title, href, children }: Props) => (
  <article className="flex h-full flex-col rounded-xl border border-border bg-card-gradient p-6 transition-smooth hover:border-neon-magenta/60 hover:shadow-card-glow">
    <h3 className="font-display text-xl font-bold text-neon-magenta text-glow-magenta">
      {href ? (
        <ExtLink
          href={href}
          showIcon
          className="text-neon-magenta underline-offset-4 hover:underline"
        >
          {title}
        </ExtLink>
      ) : (
        title
      )}
    </h3>
    {children && (
      <div className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-foreground/90">
        {children}
      </div>
    )}
  </article>
);

export default Card;