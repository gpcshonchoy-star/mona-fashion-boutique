import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
}

/**
 * Animated chevron at the bottom of hero sections indicating
 * scrollable content below.
 */
function ScrollIndicator({ className }: ScrollIndicatorProps) {
  return (
    <div
      className={cn(
        "absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce",
        className,
      )}
      aria-hidden="true"
    >
      <ChevronDown size={28} className="text-white/80" />
    </div>
  );
}

export { ScrollIndicator, type ScrollIndicatorProps };
