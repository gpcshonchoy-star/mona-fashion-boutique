/**
 * SEO configuration for Mona Fashion Boutique.
 *
 * Provides default Next.js Metadata, Open Graph, Twitter Card, and
 * JSON-LD structured data. Import these values in layout.tsx and
 * any page that needs custom SEO overrides.
 */

import type { Metadata } from "next";
import { siteConfig } from "./site";

/**
 * Default metadata applied to every page.
 * Individual pages override title/description via `generateMetadata`.
 *
 * Uses `siteConfig.siteUrl` as the metadataBase so OG images and
 * canonical URLs resolve correctly in every environment.
 */
export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.brandName,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.brandName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.seo.twitterHandle,
    creator: siteConfig.seo.twitterHandle,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * JSON-LD structured data — ClothingStore.
 *
 * Injected into the root layout via <script type="application/ld+json">.
 * Helps search engines display rich results (knowledge panel, local listing).
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: siteConfig.brandName,
  description: siteConfig.seo.defaultDescription,
  url: siteConfig.siteUrl,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.street,
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.state,
    postalCode: siteConfig.contact.address.zip,
    addressCountry: siteConfig.contact.address.country,
  },
  openingHours: siteConfig.contact.hours,
  sameAs: siteConfig.socialLinks.map((link) => link.url),
};

/**
 * JSON-LD structured data — WebSite.
 *
 * Adds SearchAction so Google can show site search in rich results.
 */
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.brandName,
  url: siteConfig.siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};
