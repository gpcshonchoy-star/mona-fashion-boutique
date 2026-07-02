"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNav } from "@/data/navigation";

interface NavigationProps {
  className?: string;
  /**
   * When true, renders in a vertical stacked layout (mobile menu).
   * When false, renders as a horizontal inline list (desktop header).
   */
  mobile?: boolean;
  /** Called after a nav link is clicked (used to close the mobile menu). */
  onNavClick?: () => void;
}

/**
 * Navigation link list — renders as either a horizontal desktop bar
 * or a vertical mobile menu.
 */
function Navigation({ className, mobile = false, onNavClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        mobile ? "flex flex-col gap-1" : "hidden items-center gap-1 md:flex",
        className,
      )}
      aria-label="Main navigation"
    >
      {mainNav.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavClick}
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              mobile && "px-4 py-3 text-base",
              isActive
                ? "text-primary"
                : "text-text hover:text-primary hover:bg-border/30",
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export { Navigation, type NavigationProps };
