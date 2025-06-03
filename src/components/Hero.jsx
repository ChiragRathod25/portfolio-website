import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
   <>
     <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <img
        src="https://avatars.githubusercontent.com/u/124911968?v=4" 
        alt="Chirag Rathod"
        className="w-32 h-32 rounded-full shadow-xl object-cover mb-6"
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Chirag Rathod</h1>
      <TypeAnimation
        sequence={[
          'Full Stack Developer 💻',
          1500,
          'ML Enthusiast 🤖',
          1500,
          'Cybersecurity Explorer 🔐',
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-2xl text-blue-600"
      />
    </section>
   </>
  )
}

export default Hero