import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  /** Visual style variant. */
  variant?: "solid" | "dashed" | "dotted";
  /** When true, adds a decorative accent line in the centre. */
  decorative?: boolean;
}

const variantStyles: Record<string, string> = {
  solid: "border-t border-border",
  dashed: "border-t-2 border-dashed border-border/60",
  dotted: "border-t-2 border-dotted border-border/60",
};

/**
 * Visual separator between sections or content blocks.
 *
 * Use `decorative` on landing-page dividers that should feel special
 * (e.g. between the hero and featured collections).
 */
function Divider({ className, variant = "solid", decorative = false }: DividerProps) {
  return (
    <div className={cn("relative my-12 w-full", className)} role="separator" aria-orientation="horizontal">
      <div className={cn("w-full", variantStyles[variant])} />
      {decorative && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
          <span className="block h-1 w-12 rounded-full bg-accent" />
        </div>
      )}
    </div>
  );
}

export { Divider, type DividerProps };
