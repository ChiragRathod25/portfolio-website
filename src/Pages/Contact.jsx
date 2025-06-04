import React from "react";
import { Send } from "lucide-react";
import { SocialLinks } from "../components/index.js";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit, reset] = useForm("xblylyld");
  if (state.succeeded) {
    return (
      <section className="bg-white px-6 py-16 md:px-24 lg:px-32">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Thank You!
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Your message has been sent successfully. I will get back to you
            soon!
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <SocialLinks size={26} className="gap-6" />
        </div>
        <div className="text-center">
          <button
            onClick={() => reset()}
            className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="bg-white px-6 py-16 md:px-24 lg:px-32 transition-all"
    >
      <div
        className="
        max-w-xl mx-auto text-center flex flex-col items-center 
        "
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Let’s Connect
        </h2>

        <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto">
          Whether you have an idea, a project, or just want to say hello — feel
          free to reach out!
        </p>

        {/* Social Links */}
        <div className="flex justify-center mb-10">
          <SocialLinks size={26} className="gap-6" />
        </div>

        {/* Contact Form */}
        <form
          className="grid gap-6 text-left w-full max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              placeholder="Chirag Rathod"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              placeholder="Let's build something awesome together!"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-all w-fit"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>

        {/* Optional Email */}
        <div className="mt-10 text-gray-500 text-sm">
          Prefer direct email? Reach out at{" "}
          <a
            href="mailto:chiragrathod.dev@gmail.com"
            className="text-blue-600 underline underline-offset-2"
          >
            chiragrathod.dev@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
