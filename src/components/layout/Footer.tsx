import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/common/SocialLinks";
import { siteConfig } from "@/config/site";
import { footerColumns, socialLinks, footerBottom } from "@/data/navigation";
import { contactInfo } from "@/data/footer";
import { Icon } from "@/lib/icons";

interface FooterProps {
  className?: string;
}

/**
 * Full site footer with newsletter placeholder, quick links, policies,
 * contact info, social links, and copyright.
 */
function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("mt-auto border-t border-border bg-surface", className)}>
      <Container className="py-12 sm:py-16">
        {/* Newsletter signup placeholder */}
        <div className="mb-10 rounded-xl bg-background p-6 sm:p-8">
          <div className="mx-auto max-w-lg text-center">
            <h3 className="text-xl font-semibold text-text">TODO: Newsletter heading</h3>
            <p className="mt-2 text-sm text-muted">
              TODO: Newsletter description
            </p>
            {/* Newsletter form */}
            <div className="mt-4 flex gap-2">
              <div className="flex-1 rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-muted">
                TODO: Email placeholder
              </div>
              <div className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-primary/50 px-6 py-2.5 text-sm font-medium text-white">
                TODO: Subscribe
              </div>
            </div>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <Link
              href="/"
              className={cn(
                "text-lg font-semibold text-text transition-colors hover:text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              )}
            >
              {siteConfig.brandName}
            </Link>
            <p className="text-sm leading-relaxed text-muted">{siteConfig.description}</p>
            <SocialLinks links={socialLinks} variant="muted" />
          </div>

          {/* Dynamic columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm text-muted transition-colors hover:text-primary",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info row */}
        <div className="mt-8 flex flex-wrap gap-4 border-t border-border pt-8">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-center gap-2 text-sm text-muted">
              <Icon name={info.icon} size={16} className="shrink-0 text-primary" />
              {info.href ? (
                <Link
                  href={info.href}
                  className={cn(
                    "transition-colors hover:text-primary",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  )}
                >
                  {info.value}
                </Link>
              ) : (
                <span>{info.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">{footerBottom.copyright}</p>
          <div className="flex items-center gap-3 text-xs text-muted">
            <span>We accept</span>
            {footerBottom.paymentIcons.map((icon) => (
              <span key={icon} className="rounded-md border border-border px-2 py-1">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer, type FooterProps };
