import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "About", to: "/#about" },
    { name: "Skills", to: "/#skills" },
    { name: "Projects", to: "/#projects" },
    { name: "Experience", to: "/#experience" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
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
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group"
            >
              {name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* Resume Dropdown */}
          <div className="relative group">
            <button className="btn-primary text-sm py-2 px-5">
              Resume ↓
            </button>
            <div className="absolute right-0 top-full mt-2 w-52 glass rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl shadow-black/50">
              <a
                href="/Chirag_Rathod_Resume_Short.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                📄 Short Version
              </a>
              <div className="border-t border-white/5" />
              <a
                href="/Chirag_Rathod_Resume_Full.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                📋 Full Version
              </a>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden glass border-t border-white/5 shadow-2xl">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map(({ name, to }) => (
              <Link
                onClick={() => setMenuOpen(false)}
                key={name}
                to={to}
                className="py-3 px-4 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
              >
                {name}
              </Link>
            ))}
            <div className="border-t border-white/5 mt-2 pt-3 flex flex-col gap-2">
              <a
                href="/Chirag_Rathod_Resume_Short.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 text-center text-sm text-slate-300 border border-white/10 rounded-lg hover:border-indigo-500/50 hover:text-white transition-all"
              >
                📄 Short Resume
              </a>
              <a
                href="/Chirag_Rathod_Resume_Full.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 text-center text-sm btn-primary"
              >
                📋 Full Resume
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
