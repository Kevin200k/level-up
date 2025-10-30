import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Laptop, Database, Sigma, FlaskConical } from 'lucide-react'

const CourseLayout = () => {

  const courses = [
    {
      title: 'Technology and Computing',
      color: 'from-green-400 to-emerald-600',
      icon: <Laptop size={60} strokeWidth={1.5} />,
      description: "Learn coding and tech with AI-driven roadmaps that guide your growth step by step."
    },
    {
      title: 'Data and Analytics',
      color: 'from-blue-400 to-indigo-600',
      icon: <Database size={60} strokeWidth={1.5} />,
      description: "Turn data into insight with personalized AI lessons and visual learning paths."
    },
    {
      title: 'Mathematics',
      color: 'from-amber-400 to-orange-500',
      icon: <Sigma size={60} strokeWidth={1.5} />,
      description: "Master math through interactive, AI-tailored lessons that adapt to your pace."
    },
    {
      title: 'Science',
      color: 'from-purple-400 to-fuchsia-600',
      icon: <FlaskConical size={60} strokeWidth={1.5} />,
      description: "Explore science through smart, AI-powered content that makes learning fun and clear."
    },
  ]

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.19 },
    },
  }

  const card = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 15 },
    },
  }

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-green-50 flex flex-col items-center text-center px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Select a Course to Get Started
        </h1>
        {/* <p className="text-gray-600 text-lg mb-3">or</p> */}
        <Link to='/explorecourses'>
          <motion.button
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="text-green-600 font-semibold hover:underline flex items-center gap-2 mx-auto text-lg"
          >
            Explore Courses with Built-in Roadmaps
            <ArrowRight size={18} />
          </motion.button>
        </Link>
      </motion.div>

      {/* Course Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl"
      >
        {courses.map((course, index) => (
          <Link key={index} to={`/explorecourses?category=${encodeURIComponent(course.title)}`}>
            <motion.div
              variants={card}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              className={`bg-gradient-to-br ${course.color} text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer h-[22rem] flex flex-col overflow-hidden`}
            >
              <div className="h-[60%] flex justify-center items-center bg-gradient-to-b from-white/10 to-white/0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                  className="bg-white/30 backdrop-blur-md p-6 rounded-full shadow-inner hover:bg-white/40 transition-all duration-300"
                >
                  {course.icon}
                </motion.div>
              </div>

              <div className="h-[40%] bg-white text-gray-800 flex flex-col justify-center items-center border-t border-gray-100">
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-sm text-gray-500">
                  {course.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

    </section>
  )
}

export default CourseLayout
