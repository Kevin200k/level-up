import React from 'react'
import ExploreCourseComponent from '../components/ExploreCourseComponent'
import ExploreCourseBody from '../components/ExploreCourseComponentBody'
import { useCourses } from '../context/CourseContext'

const ExploreCourses = () => {
  const { courses: courseList } = useCourses()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ExploreCourseComponent />
      <ExploreCourseBody courseList={courseList} />
    </div>
  )
}

export default ExploreCourses
