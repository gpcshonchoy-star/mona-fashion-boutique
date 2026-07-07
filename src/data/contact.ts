import type { ContactInfo } from "@/types";

/**
 * Contact page configuration for Mona Fashion Boutique (Australia).
 *
 * ── PRE-LAUNCH ─────────────────────────────────────────────
 * The business email, phone number, and street address are not
 * yet available.  Replace each "TODO:" placeholder below once
 * the boutique's contact details are confirmed.
 *
 * Business: Mona Fashion Boutique
 * Region:   Australia (AUD / en-AU)
 */

/**
 * Contact details displayed on the Contact page and in the footer.
 *
 * The `ContactInfo` type supports:
 * - label, value, icon — displayed to the customer
 * - href — optional deep link (e.g. `mailto:`, `tel:`)
 *
 * Post-launch, this array can also be fetched from a CMS.
 */
export const contactDetails: ContactInfo[] = [
  {
    label: "Email",
    value: "TODO: hello@monafashionboutique.com.au",
    icon: "Mail",
    href: "mailto:TODO:hello@monafashionboutique.com.au",
  },
  {
    label: "Phone",
    value: "TODO: +61 X XXXX XXXX",
    icon: "Phone",
    href: "tel:TODO:+61XXXXXXXXX",
  },
  {
    label: "Location",
    value: "TODO: Suburb, State, Australia",
    icon: "MapPin",
  },
  {
    label: "Business Hours",
    value: "TODO: e.g. Mon–Fri 9:00–17:00 AEST",
    icon: "Clock",
  },
];

/**
 * Customer support message displayed alongside the contact form.
 */
export const supportMessage: string =
  "TODO: Write a short customer support message (e.g. 'We typically respond within 24 hours during business days.').";

/**
 * Placeholder business address object — ready for CMS / admin
 * integration once the physical location is confirmed.
 */
export const businessAddress: {
  street: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
} = {
  street: "TODO: Street address",
  city: "TODO: City / Suburb",
  state: "TODO: State (e.g. NSW, VIC, QLD)",
  postcode: "TODO: Postcode",
  country: "Australia",
};

/**
 * Contact page heading, description, and form field definitions.
 *
 * The form fields are defined here so the Contact page component
 * can render them without hardcoded labels.  The component is
 * responsible for wiring up submission / validation logic.
 */
export const contactPage = {
  title: "Get in Touch",
  description:
    "We'd love to hear from you. Whether you have a styling question, need sizing advice, or just want to say hello — drop us a line.",
  formFields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
      placeholder: "Your full name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      required: true,
      placeholder: "your@email.com",
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      required: false,
      placeholder: "How can we help?",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
      placeholder: "Tell us more about your enquiry…",
    },
  ] as const,
};
