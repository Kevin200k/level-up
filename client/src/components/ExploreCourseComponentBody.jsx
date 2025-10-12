import React, { useEffect, useState } from 'react'
import image from '../assets/images/T&C.png'

const ExploreCourseBody = ({ courseList }) => {
  const [activeCategory, setActiveCategory] = useState("Technology and Computing")

  useEffect(() => {
    console.log(courseList)
  }, [courseList])

  // Extract unique categories
  const uniqueCategories = [...new Set(courseList.map(course => course.type))]

  // Filter courses based on active category
  const filteredCourses = activeCategory
    ? courseList.filter(course => course.type === activeCategory)
    : []

  return (
    <section className="flex flex-grow w-full min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="w-[20rem] bg-white border-r border-gray-200 p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-green-700 mb-6 tracking-wide">
          Categories
        </h2>

        <div className="space-y-2">
          {uniqueCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`p-3 rounded-lg font-medium cursor-pointer transition-all duration-300
                ${
                  activeCategory === category
                    ? 'bg-green-600 text-white shadow-md scale-[1.02]'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                }`}
            >
              {category}
            </div>
          ))}
        </div>
      </aside>

      {/* Right Content Area */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          {activeCategory ? (
            <>
              <h2 className="text-3xl font-bold text-green-700 mb-8 capitalize">
                {activeCategory} Courses
              </h2>

              {filteredCourses.length > 0 ? (
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredCourses.map((course) => (
                    <div
                      key={course.id}
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
                        <h3 className="font-semibold text-gray-800 text-lg leading-snug line-clamp-1">
                          {course.title}
                        </h3>
                        <button className="text-sm text-green-600 hover:text-green-700 hover:underline transition">
                          View Roadmap
                        </button>

                        <p className="text-gray-600 text-sm line-clamp-3">
                          {course.description}
                        </p>

                        {/* Progress Bar */}
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Progress</p>
                          <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500 rounded-full"
                              style={{ width: '70%' }}
                            ></div>
                          </div>
                        </div>

                        <p className='text-gray-500 text-[13px] content-end'>
                          70%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No courses in this category yet.
                </p>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-20 text-gray-600">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Explore Courses
              </h2>
              <p className="max-w-md text-gray-500 leading-relaxed">
                Select a course category from the left panel to explore available
                courses, view their details, and track your learning progress.
              </p>
            </div>
          )}
        </div>
      </main>
    </section>
  )
}

export default ExploreCourseBody
