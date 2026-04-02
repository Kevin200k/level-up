import React from 'react'
import { motion } from 'framer-motion'
import ExploreCourseComponent from '../components/ExploreCourseComponent'
import ExploreCourseBody from '../components/ExploreCourseComponentBody'
import { useCourses } from '../context/CourseContext'

const ExploreCourses = () => {
  const { courses: courseList } = useCourses()

  return (
    <motion.div
      className="min-h-screen bg-gray-50 flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <ExploreCourseComponent />
      <ExploreCourseBody courseList={courseList} />
    </motion.div>
  )
}

export default ExploreCourses
