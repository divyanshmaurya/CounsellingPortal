"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Find Mentors", href: "/mentors" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Become a Mentor", href: "/become-mentor" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-primary"
            >
              <path
                d="M8 24V12L16 4L20 8V6H24V12L16 20L12 16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 20V28"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-2xl font-bold text-dark font-heading">
              Futurly
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-dark transition-colors cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                EN
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-0 top-8 bg-white shadow-lg rounded-xl border border-gray-100 py-2 min-w-[160px]"
                  >
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                      {"\uD83C\uDDEC\uD83C\uDDE7"} English
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                      {"\uD83C\uDDFA\uD83C\uDDFF"} O&apos;zbek
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer">
                      {"\uD83C\uDDF7\uD83C\uDDFA"} {"\u0420\u0443\u0441\u0441\u043A\u0438\u0439"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Button variant="primary" size="sm" href="/mentors">
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-dark" />
            ) : (
              <Menu className="w-6 h-6 text-dark" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-gray-700 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-gray-100" />
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="text-sm font-medium text-gray-600">
                  Sign In
                </Link>
                <Button variant="primary" size="md" href="/mentors">
                  Get Started
                </Button>
              </div>
              <div className="flex gap-3 text-sm text-gray-500 pt-2">
                <span>{"\uD83C\uDDEC\uD83C\uDDE7"} EN</span>
                <span>{"\uD83C\uDDFA\uD83C\uDDFF"} UZ</span>
                <span>{"\uD83C\uDDF7\uD83C\uDDFA"} RU</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
