import React from "react";
import {
  Header,
  Footer,
  ScrollToHashElement,
  ScrollToTop,
} from "./components/index.js";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToHashElement />
      <ScrollToTop />
      <div
        style={{ backgroundColor: "var(--bg-primary)" }}
        className="min-h-screen text-slate-100"
      >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
