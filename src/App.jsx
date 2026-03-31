import React from "react";
import { Header, Footer, ScrollToHashElement, ScrollToTop } from "./components/index.js";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "./context/ThemeContext.jsx";
import { AnimatePresence, motion } from "framer-motion";
import CursorSpotlight from "./components/CursorSpotlight.jsx";
import ScrollProgressBar from "./components/ScrollProgressBar.jsx";

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function AnimatedOutlet() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
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
