import React, { useState, useEffect } from 'react'
import { CirclePlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const AllRoadmapBody = ({ courseList, loading }) => {
  const [roadmaps, setRoadmaps] = useState([])

  useEffect(() => {
    if (!loading && courseList.length > 0) {
      const roadmapTitle = courseList.map((course) => course.title)
      setRoadmaps(roadmapTitle)
    }
  }, [courseList, loading])

  if (loading) {
    return (
      <div className='loader_container'>
        <div className='loader'></div>
      </div>
    )
  }

  return (
    <>
      {/* HEADER SECTION */}
      <section className='h-52 w-full bg-gradient-to-r from-green-500 to-purple-500 flex flex-col justify-center items-center text-center shadow-md'>
        <h1 className='text-5xl font-bold text-white tracking-wide drop-shadow-md'>
          All Roadmaps
        </h1>
        <p className='text-lg text-gray-100 mt-3 max-w-xl leading-relaxed'>
          Step-by-step learning journeys powered by AI — learn, test, and grow smarter every day.
        </p>
      </section>

      {/* ROADMAP CARDS */}
      <section className='bg-gray-50 grid gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {roadmaps.map((title, index) => (
          <Link to={`/roadmap/${index}`}>
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className='h-14 border border-gray-200 p-4 rounded-xl cursor-pointer bg-white hover:bg-gradient-to-r hover:from-green-500 hover:to-purple-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-300 flex justify-between items-center group'
            >
              <span className='font-semibold text-lg tracking-tight'>
                {title}
              </span>
              <CirclePlus className='w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300' />
            </motion.div>
          </Link>
        ))}
      </section>
    </>
  )
}

export default AllRoadmapBody
