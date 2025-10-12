// ExploreCourseComponent.jsx
import React from 'react'
import { motion } from 'framer-motion'
import trophy from '../assets/images/trophy.png'

const ExploreCourseComponent = () => {
  return (
    <motion.section
      className="w-full px-8 py-5 bg-white shadow-sm sticky top-0 z-10"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex justify-between items-center">
        {/* Left */}
        <h1 className="text-2xl font-bold text-green-700">Explore Courses</h1>

        {/* Right */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <motion.span
            className="cursor-pointer hover:text-green-600 transition"
            whileHover={{ scale: 1.05 }}
          >
            My Courses
          </motion.span>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition"
          >
            <img src={trophy} alt="Trophy" className="w-5 h-5" />
            <span>My Progress</span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default ExploreCourseComponent
