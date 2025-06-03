import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <a
          href="#"
          className="text-2xl font-bold text-blue-700 hover:text-blue-900 transition"
          onClick={() => setMenuOpen(false)}
        >
          Chirag Rathod
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
          <a
            href="/Chirag_Rathod_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-blue-700 hover:text-blue-900 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-6 font-medium text-gray-700">
            {navLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </a>
            ))}
            <a
              href="/Chirag_Rathod_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 transition text-center"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
