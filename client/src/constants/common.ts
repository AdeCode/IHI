export type NavLink = {
  href?: string;
  ref?: string;
  label: string;
  subMenu?: {
    href: string;
    label: string;
  }[];
};

export const navLinks: NavLink[] = [
  {
    ref: "/our-story",
    label: "About Us",
    subMenu: [
      { href: "/our-story", label: "Our Story" },
      { href: "/meet-the-team", label: "Meet the Team" },
    ],
  },
  {
    ref: "/impact-brochure",
    label: "Impact Report",
    subMenu: [
      { href: "/impact-brochure", label: "2024 Impact Brochure" },
      { href: "/impact-brochure", label: "2025-2026 Ibadan Impact Brochure" },
      { href: "/impact-brochure", label: "Network Impact Brochure" },
    ],
  },
  { href: "/contact-us", label: "Contact Us" },
];
