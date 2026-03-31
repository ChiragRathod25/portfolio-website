import React from "react";
import { Header, Footer, ScrollToHashElement, ScrollToTop } from "./components/index.js";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "./context/ThemeContext.jsx";
import { AnimatePresence, motion } from "framer-motion";
import CursorSpotlight from "./components/CursorSpotlight.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";

/**
 * Page transition strategy:
 *
 * We use NO `mode` (defaults to "sync") instead of mode="wait".
 *
 * Why: mode="wait" blocks the entering page until the exiting page fully
 * animates out. When the user navigates rapidly, new navigation events
 * interrupt the exit animation midway — AnimatePresence gets stuck, and
 * the new page renders at opacity:0 and never transitions in (blank page).
 *
 * With default mode="sync", the exit and enter animations run simultaneously.
 * If the user navigates again mid-animation, the new key instantly takes
 * over without waiting, so nothing ever gets stuck.
 *
 * We also use opacity-only (no y-transform) during exit to avoid layout
 * jumps when both pages briefly overlap during the crossfade.
 */

const enterVariant = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const exitVariant = {
  exit: {
    opacity: 0,
    transition: { duration: 0.15 }, // fast exit so overlap is minimal
  },
};

function AnimatedOutlet() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{ ...enterVariant, ...exitVariant }}
      >
        <Outlet />
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
