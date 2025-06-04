import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BuyMeCoffeeBtn } from "./index.js";

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
    setMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  const navLinks = [
    { name: "Projects", to: "/#projects" },
    { name: "Experience", to: "/#experience" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 flex justify-between items-center">
        {/* === Logo === */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-700 hover:text-blue-900 transition-all"
        >
          Chirag Rathod
        </Link>

        {/* === Desktop Nav === */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {name}
            </Link>
          ))}

          <Link
            to="/Chirag_Rathod_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Resume
          </Link>

          <div className="ml-2">
            <BuyMeCoffeeBtn />
          </div>
        </nav>

        {/* === Mobile Menu Icon === */}
        <button
          className={`md:hidden text-blue-700 transition-all duration-300 ease-in-out transform ${
            menuOpen
              ? "rotate-90 scale-110 opacity-80"
              : "rotate-0 scale-100 opacity-100"
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === Mobile Menu === */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-medium">
            {navLinks.map(({ name, to }) => (
              <Link
                onClick={() => setMenuOpen(false)}
                key={name}
                to={to}
                className="hover:text-blue-600 transition"
              >
                {name}
              </Link>
            ))}
            <Link
              to="/Chirag_Rathod_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Resume
            </Link>

            <div className="mt-2">
              <BuyMeCoffeeBtn />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
