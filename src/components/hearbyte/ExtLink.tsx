import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  className?: string;
  showIcon?: boolean;
  children: React.ReactNode;
};

const ExtLink = ({ href, className, showIcon = false, children }: Props) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={typeof children === "string" ? `${children} (opens in new tab)` : undefined}
    className={cn(
      "underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/60 rounded-sm",
      className
    )}
  >
    {children}
    {showIcon && <ArrowUpRight className="ml-0.5 inline h-3 w-3 align-baseline" aria-hidden />}
  </a>
);

export default ExtLink;
