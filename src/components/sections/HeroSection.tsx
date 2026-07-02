import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ScrollIndicator } from "@/components/common/ScrollIndicator";
import { SlideDots } from "@/components/common/SlideDots";
import { heroSlides } from "@/data/hero";

/**
 * Hero section — full-width banner carousel.
 *
 * This is a **Server Component** that renders all slides into the DOM.
 * Inactive slides use cross-fade CSS transitions (`.crossfade-*`) so a
 * client wrapper can switch the active slide by toggling classes.
 *
 * Props:
 * - `activeSlide`   — pass in a slide index to render a specific slide as
 *                     active (defaults to 0 when omitted / used as a Server
 *                     Component).
 * - `onSlideChange` — not used in the server component; exposed on the
 *                     interface so a client wrapper can pass it through
 *                     without type errors.
 *
 * @example
 *   // Server-side usage (static first slide):
 *   <HeroSection />
 *
 *   // Client-side carousel usage (future):
 *   <HeroSection activeSlide={current} onSlideChange={setCurrent} />
 */

// ─── Alignment maps ─────────────────────────────────────────

const alignClasses = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
} as const;

const contentAlignClasses = {
  left: "items-start",
  center: "items-center",
  right: "items-end",
} as const;

// ─── Props ──────────────────────────────────────────────────

interface HeroSectionProps {
  className?: string;
  /** Index of the currently active slide (0-based). Server-rendered default = 0. */
  activeSlide?: number;
  /**
   * Callback fired when a slide navigation dot is clicked.
   * Client wrapper passes `setActiveIndex` here.
   */
  onSlideChange?: (index: number) => void;
}

// ─── Component ──────────────────────────────────────────────

function HeroSection({
  className,
  activeSlide = 0,
  onSlideChange,
}: HeroSectionProps) {
  const slides = heroSlides;
  if (slides.length === 0) return null;

  const activeIndex = activeSlide;

  return (
    <section
      className={cn("relative min-h-[80vh] overflow-hidden sm:min-h-screen", className)}
      aria-label="Hero banner"
    >
      {/* ── Slides container ────────────────────── */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.id}
              data-slide-id={slide.id}
              data-active={isActive}
              data-campaign-id={slide.campaignId ?? undefined}
              className={cn(
                "absolute inset-0",
                isActive
                  ? "crossfade-enter-active"
                  : "crossfade-exit-active pointer-events-none",
              )}
            >
              {/* Background image */}
              <div className="absolute inset-0 bg-primary/20">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt ?? slide.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              {/* Overlay */}
              {slide.overlay && (
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: slide.overlay }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Content ─────────────────────────────── */}
      <div className="relative z-10 flex min-h-[80vh] sm:min-h-screen">
        <Container
          className={cn(
            "flex w-full py-20",
            alignClasses[slides[activeIndex]?.align ?? "left"],
          )}
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={slide.id}
                className={cn(
                  "flex max-w-2xl flex-col gap-6",
                  isActive
                    ? "crossfade-enter-active"
                    : "hidden",
                )}
              >
                {/* Eyebrow */}
                {slide.eyebrow && (
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                    {slide.eyebrow}
                  </p>
                )}

                {/* Heading */}
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                {slide.subtitle && (
                  <p className="max-w-lg text-base leading-relaxed text-white/90 sm:text-lg">
                    {slide.subtitle}
                  </p>
                )}

                {/* CTAs */}
                <div
                  className={cn(
                    "mt-2 flex flex-wrap gap-4",
                    slide.align === "center" && "justify-center",
                    slide.align === "right" && "justify-end",
                  )}
                >
                  {/* Primary CTA */}
                  {slide.ctaText && slide.ctaHref && (
                    <Link
                      href={slide.ctaHref}
                      className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-lg font-medium leading-tight text-white transition-colors duration-200",
                        "bg-accent hover:bg-accent/90",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
                      )}
                    >
                      {slide.ctaText}
                    </Link>
                  )}

                  {/* Secondary CTA */}
                  {slide.secondaryCtaText && slide.secondaryCtaHref && (
                    <Link
                      href={slide.secondaryCtaHref}
                      className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-lg font-medium leading-tight text-white transition-colors duration-200",
                        "border-2 border-white/40 hover:border-white hover:bg-white/10",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
                      )}
                    >
                      {slide.secondaryCtaText}
                    </Link>
                  )}
                </div>

                {/* Trust badges */}
                {slide.trustBadges && slide.trustBadges.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    {slide.trustBadges.map((badge) => (
                      <span
                        key={badge.label}
                        className="flex items-center gap-1.5 text-sm font-medium text-white/70"
                      >
                        {badge.icon && (
                          <span aria-hidden="true">{badge.icon}</span>
                        )}
                        {badge.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </Container>
      </div>

      {/* ── Navigation dots ─────────────────────── */}
      <SlideDots
        count={slides.length}
        activeIndex={activeIndex}
        onDotClick={onSlideChange}
      />

      {/* ── Scroll indicator ────────────────────── */}
      <ScrollIndicator />
    </section>
  );
}

export { HeroSection, type HeroSectionProps };
