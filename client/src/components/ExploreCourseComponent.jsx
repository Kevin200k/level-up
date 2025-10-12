import React from 'react'
import trophy from '../assets/images/trophy.png'

const ExploreCourseComponent = () => {
  return (
    <section className="w-full px-8 py-5 bg-white shadow-sm sticky top-0 z-10">
      <div className="flex justify-between items-center">
        {/* Left */}
        <h1 className="text-2xl font-bold text-green-700">Explore Courses</h1>

        {/* Right */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <span className="cursor-pointer hover:text-green-600 transition">
            My Courses
          </span>

          <div className="flex items-center gap-2 cursor-pointer hover:text-green-600 transition">
            <img src={trophy} alt="Trophy" className="w-5 h-5" />
            <span>My Progress</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreCourseComponent
