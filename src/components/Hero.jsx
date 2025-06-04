import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="bg-blue-50 px-6 sm:px-10 md:px-24 pt-28 md:py-28 mb-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 
  md:min-h-screen 
  "
    >
      {/* === Left Text Section === */}
      <motion.div
        className="text-center md:text-left flex-1"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-snug tracking-tight">
          Hi <span className="inline-block animate-wave">👋</span>, I’m
          <span className="block text-blue-600">Chirag Rathod</span>
        </h1>

        <div className="py-6 md:py-0 flex flex-col items-center md:items-start gap-2 md:gap-0">
          <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-800 mb-4">
            I design and build{" "}
            <span className="text-blue-600 font-semibold">
              scalable digital solutions
            </span>{" "}
            that merge clean code with creative thinking.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 max-w-xl mx-auto md:mx-0">
            I turn ideas into fast, user-friendly web apps — built to scale,
            crafted for impact.
          </p>

   
          {/* CTA Button */}
          <div className="flex justify-center md:justify-start mt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              Let’s Connect
              <Send size={18} />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* === Right Profile Image Section === */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/profile.jpg" // Replace with actual image path
          alt="Chirag Rathod"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
