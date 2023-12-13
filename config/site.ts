export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Blog",
  description: "A blog built with Next.js and Tailwind.css",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Category",
      href: "/category",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Category",
      href: "/category",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
};
