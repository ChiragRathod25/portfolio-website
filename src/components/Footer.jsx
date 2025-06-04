import React from 'react'
import { Github, Linkedin, Mail, Code } from 'lucide-react'
import {SocialLinks} from '../components/index.js'
function Footer() {
  return (
    <footer className="bg-blue-100 text-gray-700 px-6 py-10 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left: Signature and Tech */}
        <div>
          <h3 className="text-xl font-semibold text-blue-900">Chirag Rathod</h3>
          <p className="text-sm mt-1 text-gray-600">
            Full Stack Developer · Lifelong Learner · Creative Thinker
          </p>
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <Code size={16} className="text-blue-700" />
            <span>Built with React, Tailwind, and Vite</span>
          </div>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-blue-800">Let’s Connect</h4>

          <div className="flex items-center gap-4">
            <SocialLinks size={26} className="gap-6" />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-blue-200 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Chirag Rathod · All rights reserved
      </div>
    </footer>
  )
}

export default Footer
