import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** When true, centres text on the page (hero sections, intro blocks). */
  centered?: boolean;
  className?: string;
  /** Optional icon or badge rendered above the title. */
  adornment?: ReactNode;
  /** Override the heading-level element (h2 by default). */
  as?: "h1" | "h2" | "h3";
}

/**
 * Reusable section heading block.
 *
 * Renders a title + optional subtitle with consistent spacing.
 * Use `centered` for sections where the heading sits above a grid of cards.
 */
function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  adornment,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl space-y-3 sm:mb-12",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {adornment && <div className="mb-2">{adornment}</div>}
      <Tag className="text-3xl font-semibold leading-tight tracking-tight text-text sm:text-4xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export { SectionHeading, type SectionHeadingProps };
