import { cn } from "@/lib/utils";
import { Icon } from "@/lib/icons";
import type { SocialLink } from "@/types";

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
  /** Icon size in pixels. */
  iconSize?: number;
  /** Visual style variant. */
  variant?: "default" | "muted";
}

const variantStyles = {
  default: "text-text hover:text-primary",
  muted: "text-muted hover:text-primary",
};

/**
 * Renders a row of social media icon links.
 */
function SocialLinks({ links, className, iconSize = 20, variant = "default" }: SocialLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center justify-center transition-colors duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            variantStyles[variant],
          )}
          aria-label={link.platform}
        >
          <Icon name={link.icon} size={iconSize} />
        </a>
      ))}
    </div>
  );
}

export { SocialLinks, type SocialLinksProps };
