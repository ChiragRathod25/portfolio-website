import React from "react";
import {
  Header,
  Footer,
  ScrollToHashElement,
  ScrollToTop,
  BuyMeCoffeeBtn,
} from "./components/index.js";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToHashElement />
      <ScrollToTop />
      <div className="bg-blue-50 min-h-screen min-h-screen font-poppins text-gray-900">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8 ">
          <Outlet />
        </main>
        <div className="flex justify-center items-center ">
          <BuyMeCoffeeBtn />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
