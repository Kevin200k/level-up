import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import image from '../assets/images/T&C.png'
import { useLocation, Link, useParams } from 'react-router-dom'

const ExploreCourseBody = ({ courseList }) => {
  const location = useLocation()
  const { roadmapId } = useParams()
  const queryParams = new URLSearchParams(location.search)
  const initialCategory = queryParams.get('category')
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'Technology and Computing')

  const uniqueCategories = [...new Set(courseList.map((course) => course.type))]
  const filteredCourses = activeCategory
    ? courseList.filter((course) => course.type === activeCategory)
    : []

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="flex flex-grow w-full min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <motion.aside
        className="w-[20rem] bg-white border-r border-gray-200 p-6 shadow-sm"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 tracking-wide">
          Categories
        </h2>

        <div className="space-y-2">
          {uniqueCategories.map((category, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              className={`p-3 rounded-lg font-medium cursor-pointer transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-green-600 text-white shadow-md scale-[1.02]'
                  : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              {category}
            </motion.div>
          ))}
        </div>
      </motion.aside>

      {/* Right Content Area */}
      <main className="flex-1">
        <motion.div
          className="  p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {activeCategory ? (
            <>
              <motion.h2
                className="text-3xl font-bold text-green-700 mb-8 capitalize"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {activeCategory} Courses
              </motion.h2>

              {filteredCourses.length > 0 ? (
                <motion.div
                  className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredCourses.map((course) => (
                    <motion.div
                      key={course.id}
                      variants={cardVariants}
                      whileHover={{ scale: 1.03 }}
                      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      {/* Course Image */}
                      <div className="relative w-full h-44 bg-green-50">
                        <img
                          src={image}
                          alt={course.title}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      {/* Course Info */}
                      <div className="p-5 space-y-4">
                        <Link
                          to={`/courses/${course.id}`}
                          className="font-semibold text-gray-800 text-lg leading-snug line-clamp-1"
                        >
                          <h3>{course.title}</h3>
                        </Link>
                        <Link
                          to={`roadmap/${course.id}`}
                          className="text-sm text-green-600 hover:text-green-700 hover:underline transition"
                        >
                          View Roadmap
                        </Link>

                        <p className="text-gray-600 text-sm line-clamp-3">
                          {course.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <p className="text-gray-500 italic">
                  No courses in this category yet.
                </p>
              )}
            </>
          ) : (
            <motion.div
              className="flex flex-col items-center justify-center text-center py-20 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Explore Courses
              </h2>
              <p className="max-w-md text-gray-500 leading-relaxed">
                Select a course category from the left panel to explore available
                courses, view their details, and track your learning progress.
              </p>
            </motion.div>
          )}
        </motion.div>
      </main>
    </section>
  )
}

export default ExploreCourseBody
