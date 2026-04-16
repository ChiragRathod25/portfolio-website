import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { SocialLinks } from "../components/index.js";
import { useForm, ValidationError } from "@formspree/react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "chiragrathod.dev@gmail.com",
    href: "mailto:chiragrathod.dev@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Vallabh Vidyanagar, Gujarat, India",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/ChiragRathod25",
    href: "https://github.com/ChiragRathod25",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/chiragrathod25",
    href: "https://www.linkedin.com/in/chiragrathod25",
  },
];

const inputStyle = {
  background: "var(--input-bg)",
  border: "1px solid var(--input-border)",
  color: "var(--input-text)",
};

function Contact() {
  const [state, handleSubmit, reset] = useForm("xblylyld");

  const handleFocus = (e) => { e.target.style.borderColor = "#6366f1"; };
  const handleBlur = (e) => { e.target.style.borderColor = "var(--input-border)"; };

  if (state.succeeded) {
    return (
      <section
        className="min-h-screen flex items-center justify-center px-6 py-24"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <motion.div
          className="glass rounded-3xl p-12 text-center max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="font-space text-3xl font-bold gradient-text mb-3">
            Message Sent!
          </h2>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            Thanks for reaching out! I'll get back to you shortly.
          </p>
          <div className="flex justify-center mb-8">
            <SocialLinks size={24} />
          </div>
          <button onClick={() => reset()} className="btn-primary">
            Send Another
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 md:px-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="dot-grid fixed inset-0 opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Connect
          </h1>
          <div className="section-divider mb-4" />
          <p className="max-w-xl mx-auto text-lg" style={{ color: "var(--text-secondary)" }}>
            Whether you have an idea, a project, or just want to say hello — feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Info Panel */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-7">
              <h3 className="font-space text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                Get in touch
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                I'm currently open to internship opportunities, collaborations,
                and interesting projects. My inbox is always open — whether it's
                a quick question or a detailed project discussion.
              </p>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="p-2.5 glass rounded-xl text-indigo-400">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs mb-0.5" style={{ color: "var(--text-muted)" }}>{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-indigo-400 transition-colors"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: "var(--text-primary)" }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6">
              <p className="text-sm mb-4 font-medium" style={{ color: "var(--text-muted)" }}>Find me on</p>
              <SocialLinks size={24} />
            </div>

            {/* Resume Download */}
            <div className="glass rounded-2xl p-6">
              <p className="text-sm mb-4 font-medium" style={{ color: "var(--text-muted)" }}>View Resume</p>
              <a
                href="/Chirag_Rathod_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2.5 w-full justify-center"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-7 flex flex-col gap-5"
            >
              <h3 className="font-space text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                Send a message
              </h3>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Chirag Rathod"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none focus:ring-2 focus:ring-indigo-500/30"
                  style={{ ...inputStyle, "::placeholder": { color: "var(--input-placeholder)" } }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Let's build something awesome together!"
                  className="w-full px-4 py-3 rounded-xl text-sm transition-all outline-none resize-none"
                  style={inputStyle}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
