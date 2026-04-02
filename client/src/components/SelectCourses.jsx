// SelectCourses.jsx
import React from 'react'
import techSVG from '../assets/images/technologyAndComputing.svg'

const SelectCourses = () => {
  return (
    <div className="space-y-4">

      {/* Course Title */}
      <h1 className="text-2xl font-semibold text-gray-800">Technology & Computing</h1>

      {/* Course Card */}
      <div className="max-w-md bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">

        {/* Image Container */}
        <div className="h-48 bg-green-50 flex justify-center items-center">
          <img
            src={techSVG}
            alt="Technology illustration"
            className="object-cover w-3/4 h-3/4"
          />
        </div>

        {/* Course Info */}
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-gray-800">Frontend Development</span>
            <button className="text-blue-600 hover:underline text-sm font-medium">
              View Roadmap
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1">
            <span className="text-sm text-gray-600">Progress</span>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div className="w-[70%] h-full bg-green-500 rounded-full transition-all duration-500"></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">70% completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectCourses
