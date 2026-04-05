import Link from "next/link";
import { Camera, Link2, Play, Send } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Find Mentors", href: "/mentors" },
    { label: "Become a Mentor", href: "/become-mentor" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "/pricing#faq" },
    { label: "Help Center", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Play, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <svg
                width="28"
                height="28"
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
              <span className="text-xl font-bold font-heading">Futurly</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Your Future, Guided by Those Who&apos;ve Been There. Connecting
              students and professionals in Uzbekistan with world-class mentors.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 text-white/80">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              We accept Payme, Click, Uzum, Visa, Mastercard
            </p>
            <p className="text-xs text-gray-500">
              &copy; 2026 Futurly. All rights reserved. Made in Uzbekistan{" "}
              {"\uD83C\uDDFA\uD83C\uDDFF"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
