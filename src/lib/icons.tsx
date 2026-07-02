import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { BrandIcons } from "./brand-icons";
import type { FC, SVGProps } from "react";

/**
 * Map of icon string names to lucide-react components.
 * Add new icons here as the project grows.
 */
const iconMap: Record<string, LucideIcon | FC<SVGProps<SVGSVGElement>>> = {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram: BrandIcons.Instagram,
  Facebook: BrandIcons.Facebook,
  Twitter: BrandIcons.Twitter,
  Pinterest: BrandIcons.Pinterest,
};

type IconProps = {
  name: string;
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};

/**
 * Renders an icon by string name.
 * Supports lucide-react icons and custom brand SVG icons.
 */
function Icon({ name, className, size = 20, ...props }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Fallback placeholder for unknown icon names
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className={className}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  }

  return <IconComponent size={size} className={className} aria-hidden="true" {...(props as any)} />;
}

export { Icon, type IconProps };
