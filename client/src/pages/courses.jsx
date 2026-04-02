import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useCourses } from "../context/CourseContext"
import { X } from "lucide-react"
import Roadmap from "../components/roadmap/Roadmap"
import RoadmapHead from "../components/RoadmapHead"

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const { courses: courseList, loading } = useCourses()

  const { courseId } = useParams()
  // const findCourse = courseList.find( course => course.id === courseId )

  if (loading) {
    return (
      <div className="loader_container">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <section>
      <RoadmapHead courseId={ courseId } />

      <Roadmap courseId={courseId} />
    </section>
  )
}

export default Courses
