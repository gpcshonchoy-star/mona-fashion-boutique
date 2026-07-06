import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { newsletterConfig } from "@/data/newsletter";

interface NewsletterSectionProps {
  className?: string;
  /** Override the default section heading. */
  heading?: string;
  subtitle?: string;
}

/**
 * Newsletter sign-up section — a centred call-to-action block
 * with an email input and submit button.
 *
 * **Server Component** — reads copy from `newsletterConfig` data module.
 * The `<form>` is ready for future API integration (no client state).
 */
function NewsletterSection({
  className,
  heading: headingProp,
  subtitle: subtitleProp,
}: NewsletterSectionProps) {
  const { title, description, placeholder, buttonText } = newsletterConfig;

  // Use overrides if provided, otherwise fall back to data config
  const heading = headingProp ?? title;
  const subtitle = subtitleProp ?? description;

  // Bail if no meaningful content to display
  if (!heading && !subtitle) return null;

  return (
    <section className={cn("py-16 sm:py-24", className)} aria-label="Newsletter sign-up">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <SectionHeading title={heading} subtitle={subtitle} centered as="h2" />

          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder={placeholder}
              className={cn(
                "w-full min-w-0 rounded-full border border-border bg-surface px-5 py-3 text-text placeholder:text-muted",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                "sm:min-w-[280px]",
              )}
            />
            <Button type="submit" size="lg">
              {buttonText}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export { NewsletterSection, type NewsletterSectionProps };
