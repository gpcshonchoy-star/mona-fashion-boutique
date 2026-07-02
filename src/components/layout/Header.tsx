"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Navigation } from "./Navigation";
import { MobileMenu } from "./MobileMenu";
import { Icon } from "@/lib/icons";

interface HeaderProps {
  className?: string;
}

/**
 * Sticky header with brand logo, desktop navigation, utility icons,
 * and a hamburger toggle for the mobile menu.
 */
function Header({ className }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-sm",
          className,
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Mobile menu toggle */}
          <button
            onClick={openMobileMenu}
            className={cn(
              "rounded-lg p-2 text-text transition-colors hover:bg-border/30 md:hidden",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            )}
            aria-label="Open navigation menu"
          >
            <Icon name="Menu" size={24} />
          </button>

          {/* Logo / Brand */}
          <Link
            href="/"
            className={cn(
              "text-lg font-semibold tracking-tight text-text transition-colors hover:text-primary",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
            )}
          >
            {siteConfig.brandName}
          </Link>

          {/* Desktop navigation */}
          <Navigation className="absolute left-1/2 hidden -translate-x-1/2 md:flex" />

          {/* Utility icons (desktop) */}
          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/search"
              className={cn(
                "rounded-lg p-2 text-text transition-colors hover:text-primary hover:bg-border/30",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              )}
              aria-label="Search products"
            >
              <Icon name="Search" size={20} />
            </Link>
            <Link
              href="/wishlist"
              className={cn(
                "rounded-lg p-2 text-text transition-colors hover:text-primary hover:bg-border/30",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              )}
              aria-label="View wishlist"
            >
              <Icon name="Heart" size={20} />
            </Link>
            <Link
              href="/cart"
              className={cn(
                "rounded-lg p-2 text-text transition-colors hover:text-primary hover:bg-border/30",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              )}
              aria-label="View shopping cart"
            >
              <Icon name="ShoppingBag" size={20} />
            </Link>
            <Link
              href="/account"
              className={cn(
                "rounded-lg p-2 text-text transition-colors hover:text-primary hover:bg-border/30",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              )}
              aria-label="Your account"
            >
              <Icon name="User" size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}

export { Header, type HeaderProps };
