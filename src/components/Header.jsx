import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Research", to: "/research" },
    { name: "Projects", to: "/projects" },
    { name: "Experience", to: "/experience" },
    { name: "Skills", to: "/skills" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        backgroundColor: scrolled
          ? theme === "light"
            ? "rgba(250, 251, 255, 0.82)"
            : "rgba(7, 7, 17, 0.78)"
          : "transparent",
        borderBottom: scrolled
          ? theme === "light"
            ? "1px solid rgba(99,102,241,0.12)"
            : "1px solid rgba(255,255,255,0.08)"
          : "none",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.25)" : "none",
        willChange: "backdrop-filter",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="font-space text-xl font-bold gradient-text hover:scale-105 transition-transform"
        >
          Chirag Rathod
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              className="text-sm font-medium transition-colors duration-200 relative group"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
            >
              {name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 glass rounded-xl transition-all hover:scale-110"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <Sun size={17} className="text-amber-400" />
            ) : (
              <Moon size={17} className="text-indigo-500" />
            )}
          </button>

          {/* Download CV */}
          <a
            href="/Chirag_Rathod_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-5"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 glass rounded-xl"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-amber-400" />
            ) : (
              <Moon size={16} className="text-indigo-500" />
            )}
          </button>
          <button
            className="transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden glass border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map(({ name, to }) => (
              <Link
                onClick={() => setMenuOpen(false)}
                key={name}
                to={to}
                className="py-3 px-4 rounded-lg transition-all font-medium hover:bg-white/5"
                style={{ color: "var(--text-secondary)" }}
              >
                {name}
              </Link>
            ))}
            <div className="border-t mt-2 pt-3" style={{ borderColor: "var(--border-subtle)" }}>
              <a
                href="/Chirag_Rathod_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 text-center text-sm btn-primary block"
              >
                Download CV
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
