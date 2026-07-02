import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardPadding = "none" | "sm" | "md" | "lg";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Render as a different element (defaults to <div>, use "article" for product cards). */
  as?: ElementType;
  /** When true, adds a subtle border. */
  bordered?: boolean;
  /** When true, adds hover elevation effect. */
  elevated?: boolean;
  /** Padding preset. Defaults to "md" (p-6). */
  padding?: CardPadding;
}

const paddingStyles: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

/**
 * Generic content container with consistent background, rounded corners, and shadow.
 *
 * Use `as="article"` for semantic product/review cards.
 * Use `hoverable` on interactive cards that lift on hover.
 */
function Card({
  children,
  className,
  as: Tag = "div",
  bordered = false,
  elevated = false,
  padding = "md",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-xl bg-surface transition-all duration-300",
        bordered
          ? "border border-border shadow-none"
          : elevated
            ? "shadow-elevated"
            : "shadow-sm",
        elevated && "hover:shadow-elevated hover:-translate-y-0.5",
        paddingStyles[padding],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export { Card, type CardProps, type CardPadding };
