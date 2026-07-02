/**
 * Contact page configuration.
 *
 * Includes the page heading, form field definitions, and any static
 * contact details displayed alongside the form.
 *
 * @todo Replace placeholder values with real content. Update form
 *   fields once the contact form component is built.
 */
export const contactPage = {
  title: "TODO: Contact page heading",
  description: "TODO: Contact page description.",
  formFields: [
    {
      name: "name",
      label: "TODO: Name field label",
      type: "text",
      required: true,
      placeholder: "TODO: Name placeholder",
    },
    {
      name: "email",
      label: "TODO: Email field label",
      type: "email",
      required: true,
      placeholder: "TODO: Email placeholder",
    },
    {
      name: "message",
      label: "TODO: Message field label",
      type: "textarea",
      required: true,
      placeholder: "TODO: Message placeholder",
    },
  ] as const,
};
