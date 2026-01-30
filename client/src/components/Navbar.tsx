import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import {navLinks} from "../constants/common";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      ref: "/our-story",
      label: "About Us",
      subMenu: [
        { href: "/our-story", label: "Our Story" },
        { href: "/meet-the-team", label: "Meet the Team" },
      ]
    },
    {
      ref: "/impact-brochure",
      label: "Impact Report",
      subMenu: [
        { href: "/impact-brochure", label: "2024 Impact Brochure" },
        { href: "/impact-brochure", label: "2025-2026 Ibadan Impact Brochure" },
        { href: "/impact-brochure", label: "Network Impact Brochure" },
      ]
    },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50 py-3 md:py-2"
          : "bg-white/95 py-3"
      )}
    >
      <div className="max-w-7xl lg:max-w-full mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex gap-2 group">
            <div className="h-9 md:h-16 pt-2 md:pt-4 bg-[#750000] px-3 flex flex-col justify-center items-center text-white font-bold shadow-lg transition-transform">
              <span className="text-[6px] md:text-xs leading-none">IMPACT</span>
              <span className="text-xs md:text-2xl leading-none">HUB</span>
            </div>
            <div className="flex flex-col justify-end pb-1 md:pb-2">
              <span className="font-display font-bold text-sm md:text-3xl leading-none text-foreground">
                Ibadan
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive =
                location === link.href ||
                (link.subMenu && link.subMenu.some((item) => location === item.href));

              if (link.subMenu) {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      className={cn(
                        "flex items-center gap-1 text-base font-extrabold relative py-1 px-3",
                        "transition-colors",

                        // underline container
                        "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:rounded-full after:scale-x-0 after:origin-left",
                        "after:transition-transform after:duration-200",

                        // show underline when group hovered
                        "group-hover:after:scale-x-100",

                        // show underline when active
                        isActive && "after:scale-x-100 after:bg-black",

                        // default underline color
                        !isActive && "after:bg-black"
                      )}
                    >
                      {link.label}
                      <svg
                        className="w-4 h-4 mt-0.5 transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                      className="absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-200"
                    >
                      <div className="bg-white shadow-xl border border-border/50 rounded-2xl inline-block overflow-hidden">
                        {link.subMenu.map((item, index) => {
                          const isFirst = index === 0
                          const isLast = index === link.subMenu.length - 1
                          const isSubActive = location === item.href

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={cn(
                                "flex w-full items-center px-5 py-4 text-sm font-bold whitespace-nowrap transition-colors",
                                "hover:bg-muted",
                                isFirst && "hover:rounded-t-2xl",
                                isLast && "hover:rounded-b-2xl",
                              )}
                            >
                              {item.label}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              // NORMAL LINK
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-base font-bold",
                    "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black after:rounded-full after:scale-x-0 after:origin-left after:transition-transform",
                    isActive && "after:scale-x-100",
                    "hover:after:scale-x-100"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 text-foreground bg-[#0000000D]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-base font-medium p-2 rounded-md hover:bg-muted transition-colors",
                  location === link.href ? "text-primary bg-primary/5" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full bg-primary text-white">Join Us</Button>
          </div>
        </div>
      )} */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-xl animate-in slide-in-from-top-5 rounded-[32px]">
          <div className="flex flex-col py-4 space-y-4">
            {/* {navLinks.map((link) => {
              const path =
                link.href ??
                link.subMenu?.[0]?.href; // fallback for dropdown parents

              if (!path) return null;

              return (
                <Link
                  key={link.label}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-bold px-2 py-3 rounded-md hover:bg-muted transition-colors text-center",
                    location === path
                      ? "text-black bg-[#EDEFF2] rounded-t-2xl"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })} */}
            {navLinks.map((link) => {
              const hasSubMenu = !!link.subMenu?.length;
              const isOpen = openSubMenu === link.label;

              return (
                <div key={link.label} className="flex flex-col">
                  {/* Parent item */}
                  {hasSubMenu ? (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSubMenu(isOpen ? null : link.label)
                      }
                      className="flex items-center justify-center gap-5 text-base font-bold px-2 py-3 rounded-md hover:bg-muted transition-colors text-foreground"
                    >
                      <span>{link.label}</span>

                      <ChevronDown
                        className={cn(
                          "w-5 h-5 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.href!}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-base font-bold px-2 py-3 rounded-md hover:bg-muted transition-colors text-center",
                        location === link.href
                          ? "text-black bg-[#EDEFF2] rounded-t-2xl"
                          : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Submenu */}
                  {hasSubMenu && isOpen && (
                    <div className="mt-2 flex flex-col space-y-2 border-l border-muted">
                      {link.subMenu!.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "text-base font-bold px-2 py-2 hover:bg-muted transition-colors text-center rounded-3xl",
                            location === sub.href
                            && " bg-muted"
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* <Button className="w-full bg-primary text-white">
              Join Us
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
}
