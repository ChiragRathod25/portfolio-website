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
        borderColor: "var(--border-subtle)",
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
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Full Stack Developer &amp; ML Engineer building scalable digital
              solutions with clean code and creative thinking.
            </p>
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
              <Code size={14} className="text-indigo-500" />
              Built with React, Tailwind &apos; Vite
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Research", to: "/research" },
                { label: "Projects", to: "/projects" },
                { label: "Experience", to: "/experience" },
                { label: "Skills", to: "/skills" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-sm w-fit hover:text-indigo-400 transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Let's Connect</h4>
            <a
              href="mailto:chiragrathod.dev@gmail.com"
              className="flex items-center gap-2 text-sm mb-5 hover:text-indigo-400 transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              <Mail size={14} />
              chiragrathod.dev@gmail.com
            </a>
            <SocialLinks size={20} />
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-divider flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Chirag Rathod · All rights reserved
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 glass rounded-full flex items-center justify-center hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
            style={{ color: "var(--text-muted)" }}
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
