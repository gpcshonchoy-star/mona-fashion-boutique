"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Navigation } from "./Navigation";
import { socialLinks } from "@/data/social";
import { SocialLinks } from "@/components/common/SocialLinks";
import { Icon } from "@/lib/icons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Full-screen overlay mobile navigation menu.
 * Handles body scroll lock and focus trapping on open.
 */
function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  // Focus trap — focus the close button when opening
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const closeBtn = menuRef.current.querySelector<HTMLButtonElement>("button");
      closeBtn?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-50 flex flex-col bg-background md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Close button */}
      <div className="flex items-center justify-between border-b border-border px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold text-text"
          onClick={onClose}
          tabIndex={-1}
        >
          {siteConfig.brandName}
        </Link>
        <button
          onClick={onClose}
          className={cn(
            "rounded-lg p-2 text-text transition-colors hover:bg-border/30",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          )}
          aria-label="Close menu"
        >
          <Icon name="X" size={24} />
        </button>
      </div>

      {/* Navigation links */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <Navigation mobile onNavClick={onClose} />
      </div>

      {/* Utility icons */}
      <div className="flex items-center justify-center gap-6 border-t border-border px-4 py-4">
        <Link
          href="/search"
          onClick={onClose}
          className={cn(
            "p-2 text-text transition-colors hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          )}
          aria-label="Search products"
        >
          <Icon name="Search" size={22} />
        </Link>
        <Link
          href="/wishlist"
          onClick={onClose}
          className={cn(
            "p-2 text-text transition-colors hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          )}
          aria-label="View wishlist"
        >
          <Icon name="Heart" size={22} />
        </Link>
        <Link
          href="/cart"
          onClick={onClose}
          className={cn(
            "p-2 text-text transition-colors hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          )}
          aria-label="View shopping cart"
        >
          <Icon name="ShoppingBag" size={22} />
        </Link>
        <Link
          href="/account"
          onClick={onClose}
          className={cn(
            "p-2 text-text transition-colors hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          )}
          aria-label="Your account"
        >
          <Icon name="User" size={22} />
        </Link>
      </div>

      {/* Social links */}
      <div className="flex justify-center border-t border-border px-4 py-4">
        <SocialLinks links={socialLinks} variant="muted" />
      </div>
    </div>
  );
}

export { MobileMenu, type MobileMenuProps };
