import React from "react"
import { motion } from "framer-motion"
import { useCourses } from "../context/CourseContext"
import { Code, Route, MoveLeft } from "lucide-react"

const RoadmapHead = ({ courseId }) => {

  const {courses: courseList} = useCourses()

  const findCourse = courseList.find( course => course.id === courseId )


  return (
    <div className="p-6 bg-gradient-to-r from-purple-50 to-white shadow-sm border border-gray-200 flex justify-center items-center">
      <div className="">

          <motion.div className="flex flex-row gap-3 text-gray-700 hover:underline ">
            <MoveLeft />
            All Rodmaps
          </motion.div>
        {/* Title section */}
        <div className="flex items-center gap-3 mb-3">
          <Code className="text-gray-700 w-8 h-8" />
          <h1 className="text-5xl font-bold text-purple-800">{ findCourse.title }</h1>
        </div>

        {/* Subtitle */}
        <h2 className="text-lg font-medium text-gray-700 flex items-center gap-2 mb-2">
          <Route className="text-gray-700 w-5 h-5" />
          Step-by-Step Learning Journey
        </h2>
      </div>
      

      

      {/* Progress bar */}
      {/* <div className="mt-5">
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-green-600 w-[45%] transition-all duration-500"></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">Progress: 45% Complete</p>
      </div> */}
    </div>
  )
}

export default RoadmapHead
