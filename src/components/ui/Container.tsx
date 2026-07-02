import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerMaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "7xl";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** When true, removes horizontal padding for full-bleed sections. */
  fluid?: boolean;
  /** Max-width preset. Defaults to "7xl". */
  maxWidth?: ContainerMaxWidth;
}

const maxWidthStyles: Record<ContainerMaxWidth, string> = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  "2xl": "max-w-7xl",
  "7xl": "max-w-7xl",
};

/**
 * Max-width centred wrapper.
 * Use as the outermost element of every section to
 * enforce consistent horizontal rhythm across the page.
 */
function Container({
  children,
  className,
  fluid = false,
  maxWidth = "7xl",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidthStyles[maxWidth],
        fluid && "px-0 sm:px-0 lg:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { Container, type ContainerProps, type ContainerMaxWidth };
