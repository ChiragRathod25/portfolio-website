import React from "react";
import { Code, Mail, ArrowUp } from "lucide-react";
import { SocialLinks } from "../components/index.js";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative border-t"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      {/* Gradient Line at top */}
      <div className="h-px w-full" style={{ background: "var(--gradient-primary)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-space text-xl font-bold gradient-text mb-3 inline-block">
              Chirag Rathod
            </Link>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              Full Stack Developer & ML Engineer building scalable digital
              solutions with clean code and creative thinking.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Code size={14} className="text-indigo-500" />
              Built with React, Tailwind & Vite
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About", to: "/#about" },
                { label: "Skills", to: "/#skills" },
                { label: "Projects", to: "/#projects" },
                { label: "Experience", to: "/#experience" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-sm text-slate-500 hover:text-indigo-400 transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-4">Let's Connect</h4>
            <a
              href="mailto:chiragrathod.dev@gmail.com"
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-400 transition-colors mb-5"
            >
              <Mail size={14} />
              chiragrathod.dev@gmail.com
            </a>
            <SocialLinks size={20} />
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Chirag Rathod · All rights reserved
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 glass rounded-full flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
