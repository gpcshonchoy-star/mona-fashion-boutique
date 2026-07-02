import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/lib/icons";
import { features } from "@/data/features";

interface WhyChooseUsSectionProps {
  className?: string;
  /** Override the default section heading. */
  heading?: string;
  subtitle?: string;
}

/**
 * "Why Choose Us" section — a grid of brand differentiator cards
 * displayed on the landing page.
 *
 * **Server Component** — reads all content from `src/data/features.ts`.
 */
function WhyChooseUsSection({
  className,
  heading = "Why Choose Us",
  subtitle,
}: WhyChooseUsSectionProps) {
  if (features.length === 0) return null;

  return (
    <section className={cn("py-16 sm:py-24", className)} aria-labelledby="why-choose-us-heading">
      <Container>
        <SectionHeading title={heading} subtitle={subtitle} centered as="h2" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.id}
              padding="lg"
              elevated
              as="article"
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10"
                aria-hidden="true"
              >
                <Icon name={feature.icon} size={26} className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-text">{feature.title}</h3>

              {/* Description */}
              {feature.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { WhyChooseUsSection, type WhyChooseUsSectionProps };
