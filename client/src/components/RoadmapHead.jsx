import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useCourses } from "../context/CourseContext"
import { Code, Route, MoveLeft } from "lucide-react"

const RoadmapHead = ({ courseId }) => {
  const { courses: courseList, loading } = useCourses()
  const [roadmapTitle, setRoadmapTitle] = useState("")

  useEffect(() => {
    if (!loading && courseList.length > 0) {
      const foundCourse = courseList.find(
        (course) => String(course.id) === String(courseId)
      )

      if (foundCourse) {
        setRoadmapTitle(foundCourse.title)
      }
    }
  }, [courseList, courseId, loading])

  useEffect(() => console.log("Course id:", courseId), [courseId])

  if (loading) {
    return (
      <div className="loader_container">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gradient-to-r from-purple-50 to-white shadow-sm border border-gray-200 flex justify-center items-center">
      <div>
        <motion.div className="flex flex-row gap-3 text-gray-700 hover:underline cursor-pointer">
          <MoveLeft />
          All Roadmaps
        </motion.div>

        {/* Title section */}
        <div className="flex items-center gap-3 mb-3">
          <Code className="text-gray-700 w-8 h-8" />
          <h1 className="text-5xl font-bold text-purple-800">
            {roadmapTitle || "Untitled"}
          </h1>
        </div>

        {/* Subtitle */}
        <h2 className="text-lg font-medium text-gray-700 flex items-center gap-2 mb-2">
          <Route className="text-gray-700 w-5 h-5" />
          Step-by-Step Learning Journey
        </h2>
      </div>
    </div>
  )
}

export default RoadmapHead
