import React from 'react'
import logo from '../assets/images/logo.png'
import heroIllustration from '../assets/images/heroIllus.svg'

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] flex flex-col md:flex-row justify-center items-center gap-10 bg-gradient-to-b from-green-50 via-white to-green-50 px-8 md:px-16 py-10">
      
      {/* LEFT SIDE - Text Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
        {/* Logo */}
        <img 
          src={logo}
          alt="Levelup Logo"
          className="mb-5 drop-shadow-md"
        />

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Learn Smarter. Build Faster. <br /> 
          <span className="text-green-600">Level Up Your Future 🚀</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Personalized learning powered by <span className="text-green-600 font-semibold">AI</span> — 
          study at your own pace, track your progress, and follow a smart roadmap that helps you grow step-by-step.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-700 transition-transform hover:scale-105">
            Get Started
          </button>
          <button className="border border-green-600 text-green-700 font-semibold py-3 px-8 rounded-full hover:bg-green-600 hover:text-white transition-transform hover:scale-105">
            Explore Courses
          </button>
        </div>
      </div>

      {/* RIGHT SIDE - Illustration */}
      <div className="max-w-lg w-full flex justify-center">
        <img 
          src={heroIllustration}
          alt="Learning Illustration"
          className="w-[500px] object-contain"
        />
      </div>

    </section>
  )
}

export default Hero
