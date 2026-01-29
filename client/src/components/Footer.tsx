import { Link, useLocation } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";
import { cn } from "@/lib/utils";
// import {navLinks} from "../constants/common";

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

export function Footer() {
  const [location] = useLocation();

  return (
    <footer className="bg-[#1C395C] text-white pt-20 pb-10 font-poppins">
      <div className="max-w-56 md:max-w-full md:mx-auto px-4 sm:px-6 lg:px-16">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"> */}
        <div className="flex flex-col md:flex-row md:justify-between mb-16">
          {/* Brand */}
          <div className="space-y-6 md:w-2/12 mb-6 md:mb-0">
            {/* <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                IH
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">
                  Impact Hub
                </span>
                <span className="text-sm font-medium text-white/60 leading-none">
                  Ibadan
                </span>
              </div>
            </div> */}
            <Link href="/" className="flex gap-2 group">
              <div className="h-9 md:h-[74px] pt-2 md:pt-4 bg-transparent border-white border-[3px] px-3 flex flex-col justify-center items-center text-white font-bold shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-[6px] md:text-xs leading-none">IMPACT</span>
                <span className="text-xs md:text-2xl leading-none">HUB</span>
              </div>
              <div className="flex flex-col justify-end pb-1 md:pb-2">
                <span className="font-display font-bold text-sm md:text-3xl leading-none text-white">
                  Ibadan
                </span>
              </div>
            </Link>
            {/* <p className="text-white/70 text-sm leading-relaxed">
              We are a member of the Impact Hub Global Network, a rapidly expanding, diverse, global collective that is accelerating sustainable innovation at scale.
            </p> */}
            <p className="text-xl font-semibold">
            Inclusive and sustainable innovation - at scale.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-8/12">
            <div className="hidden md:flex items-center space-x-10 mb-5">
              {navLinks.map((link) => {
                const isActive =
                  location === link.href ||
                  (link.subMenu && link.subMenu.some((item) => location === item.href));

                if (link.subMenu) {
                  return (
                    <div key={link.label} className="relative group">
                      <button
                        className={cn(
                          "flex items-center gap-1 text-base font-medium relative py-1 px-3",
                          "transition-colors",
                          // underline container
                          "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:rounded-full after:scale-x-0 after:origin-left",
                          "after:transition-transform after:duration-200",
                          // show underline when group hovered
                          "group-hover:after:scale-x-100",
                          // show underline when active
                          isActive && "after:scale-x-100 after:bg-gray-800",
                          // default underline color
                          !isActive && "after:bg-gray-800"
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
                        className="absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2
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
                                  "flex w-full items-center px-5 py-4 text-sm font-normal whitespace-nowrap transition-colors",
                                  "hover:bg-muted",
                                  isFirst && "hover:rounded-t-2xl",
                                  isLast && "hover:rounded-b-2xl",
                                  isSubActive
                                    ? "bg-muted text-white rounded-2xl"
                                    : "text-foreground"
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
                      "relative py-1 text-base font-medium pb-2",
                      "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gray-800 after:rounded-full after:scale-x-0 after:origin-left after:transition-transform",
                      isActive && "after:scale-x-100",
                      "hover:after:scale-x-100"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="hidden md:flex justify-center gap-2">
              <SocialLink icon={<Instagram className="w-7 h-7 text-[#1C395C]" />} href="#" />
              <SocialLink icon={<Linkedin className="w-7 h-7 text-[#1C395C]" />} href="#" />
              <SocialLink icon={<Facebook className="w-7 h-7 text-[#1C395C]" />} href="#" />
              <SocialLink icon={<Twitter className="w-7 h-7 text-[#1C395C]" />} href="#" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-2/12">
              <p className="text-base text-white  md:text-right mb-6">
                Impact Hub Ibadan
                <br />
                No.1 Simeon Adebo Street, Iyaganku GRA Ibadan
                <br />
                Oyo State, Nigeria
              </p>
            <ul className="space-y-4 text-sm text-white/70">
              {/* <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>No.1 Simeon Adebo Street,<br />Iyaganku GRA Ibadan,<br />Oyo State, Nigeria</span>
              </li> */}
              <li className="flex items-center md:justify-between gap-3">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span className="text-white">+234 803 324 3803</span>
              </li>
              <li className="flex items-center md:justify-between gap-3">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span className="text-white">ibadan@impacthub.net</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h4 className="font-display font-bold text-lg mb-6">Impact in your inbox!</h4>
            <p className="text-sm text-white/70 mb-4">
              Sign up for our free global membership perks, incredible opportunities and updates!
            </p>
            <NewsletterForm />
          </div> */}
        </div>

        {/* <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Impact Hub Ibadan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href}
      className="h-14 w-14 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 hover:text-[#1C395C] transition-all duration-300 border border-white/10"
    >
      {icon}
    </a>
  );
}
