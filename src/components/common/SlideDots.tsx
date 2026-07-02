import { cn } from "@/lib/utils";

interface SlideDotsProps {
  count: number;
  activeIndex: number;
  onDotClick?: (index: number) => void;
  className?: string;
  /** Accessible label for the dot group. */
  label?: string;
}

/**
 * Slide navigation dots (carousel pagination).
 *
 * Use `onDotClick` when wired to a client carousel; otherwise
 * dots render as non-interactive indicators.
 */
function SlideDots({
  count,
  activeIndex,
  onDotClick,
  className,
  label = "Slide navigation",
}: SlideDotsProps) {
  if (count <= 1) return null;

  return (
    <div
      className={cn(
        "absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 gap-2",
        className,
      )}
      role="tablist"
      aria-label={label}
    >
      {Array.from({ length: count }, (_, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={index}
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
            onClick={onDotClick ? () => onDotClick(index) : undefined}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
              isActive
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70 cursor-pointer",
              !onDotClick && "cursor-default",
            )}
          />
        );
      })}
    </div>
  );
}

export { SlideDots, type SlideDotsProps };
