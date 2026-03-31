import React, { useRef } from "react";
import { Header, Footer, ScrollToHashElement, ScrollToTop } from "./components/index.js";
import "./App.css";
import { useOutlet, useLocation } from "react-router-dom";
import { useTheme } from "./context/ThemeContext.jsx";
import { AnimatePresence, motion } from "framer-motion";
import CursorSpotlight from "./components/CursorSpotlight.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";

/**
 * AnimatedOutlet — production-safe page transitions.
 *
 * Key insight: <Outlet/> is a SINGLE React element that swaps its
 * internal content when the route changes. AnimatePresence can't
 * detect this swap reliably because the component identity doesn't
 * change — only its rendered output does.
 *
 * Fix: useOutlet() returns the actual rendered element for the
 * current route. We freeze it via useRef so the exiting animation
 * keeps rendering the OLD page content while the new one enters.
 *
 * We also avoid mode="wait" entirely — it causes blank pages when
 * users navigate rapidly because exit-before-enter gets interrupted.
 */

function AnimatedOutlet() {
  const location = useLocation();
  const outlet = useOutlet();

  // Freeze the current outlet so exit animation renders the old content
  const outletRef = useRef(outlet);
  // Only update the ref when the pathname actually changes
  if (outletRef.current !== outlet) {
    outletRef.current = outlet;
  }

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        style={{ minHeight: "100vh" }}
      >
        {outletRef.current}
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const { theme } = useTheme();

  return (
    <>
      <ScrollToHashElement />
      <ScrollToTop />
      <CursorSpotlight />
      <div
        data-theme={theme}
        className="min-h-screen"
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <ScrollProgressBar />
        <Header />
        <main>
          <AnimatedOutlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
