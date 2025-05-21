"use client";

import { scrollToElement } from "@/utils/smoothScroll";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Divisi", href: "#divisions" },
  { name: "Kegiatan", href: "#activities" },
  { name: "Keanggotaan", href: "#membership" },
  { name: "Galeri", href: "#gallery" },
  { name: "Berita", href: "#news" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle navigation click
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Close mobile menu if open
    if (isMenuOpen) setIsMenuOpen(false);

    // Extract id from href
    const id = href.replace("#", "");

    // Scroll to element
    scrollToElement(id);

    // Update active section
    setActiveSection(id);
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentActiveSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const navbarHeight = 90; // Approximate navbar height

        if (sectionTop <= navbarHeight) {
          currentActiveSection = section.id;
        }
      });

      if (currentActiveSection !== activeSection) {
        setActiveSection(currentActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <nav className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-600">
              Karang Taruna
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                ${
                  activeSection === item.href.replace("#", "")
                    ? "text-green-600 font-bold"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-2`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-md shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                ${
                  activeSection === item.href.replace("#", "")
                    ? "text-green-600 bg-gray-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
