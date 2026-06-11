"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleDark = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  const linkClass = (section: string) =>
    `transition-all duration-300 px-3.5 py-2 rounded-lg text-sm md:text-base ${
      active === section
        ? "text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-950/40"
        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
    }`;

  const links = [
    { href: "#about", label: "À propos", id: "about" },
    { href: "#timeline", label: "Parcours", id: "timeline" },
    { href: "#projects", label: "Projets", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 border-b border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center px-8 md:px-20 py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-black dark:text-white">
          Bruno Kevin
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex gap-2 items-center">
          {links.map((link) => (
            <Link key={link.id} href={link.href} className={linkClass(link.id)}>
              {link.label}
            </Link>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            aria-label="Changer de thème"
            className="ml-2 p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 transition-all duration-200"
          >
            {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Boutons mobile (dark mode + hamburger) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Changer de thème"
            className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 transition-all duration-200"
          >
            {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
            className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-95 transition-all duration-200"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-1 border-t border-gray-100 dark:border-gray-800">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={linkClass(link.id)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}