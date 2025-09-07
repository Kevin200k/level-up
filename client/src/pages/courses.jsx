import React, { useState } from "react"
import { useCourses } from "../context/CourseContext"
import { X } from "lucide-react" // 👈 make sure lucide-react is installed

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const { courses: courseList, loading } = useCourses()

  if (loading) {
    return (
      <div className="loader_container">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen grid grid-cols-[1fr_2fr] gap-6 p-6 bg-gray-100">
      {/* Course List Section */}
      <section className="bg-white shadow-md rounded-xl p-4">
        <h1 className="section_heading border-b pb-2">Quests</h1>

        <div className="space-y-3">
          {(courseList || []).map((course) => (
            <div
              key={course.id}
              className={`p-3 rounded-lg cursor-pointer transition ${
                selectedCourse?.id === course.id
                  ? "bg-blue-100 border border-blue-400"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCourse(course)}
            >
              {selectedCourse?.id === course.id ? (
                <div className="">
                  {/* Title Row with Close Button */}
                  <h2 className="medium_text flex items-center justify-between">
                    <span>
                      {course.title}
                    </span>

                    {/* Close button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation() // prevent reopening on click
                        setSelectedCourse(null)
                      }}
                      className="ml-2 p-1 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                    </button>
                  </h2>

                  <p className="in_container_medium_description">
                    {course.description}
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="medium_text">
                    {course.title}{" "}
                  </h2>
                  <p className="in_container_medium_description">
                    {course.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="bg-white shadow-md rounded-xl p-6 animate-all">
        {selectedCourse ? (
          <>
            <h2 className="text-2xl font-bold mb-4">
              {selectedCourse.title} Roadmap
            </h2>
            <div className="space-y-6">
              {selectedCourse.roadmap.map((step, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[30px_1fr] gap-4 justify-items-start"
                >
                  {/* Dot + line */}
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white shadow-md"></div>
                    {index !== selectedCourse.roadmap.length - 1 && (
                      <div className="w-[2px] flex-1 bg-gray-300"></div>
                    )}
                  </div>

                  {/* Step Content */}
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {step.stage}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.topics.join(", ")}
                    </p>
                    <p className="text-xs text-gray-500">{step.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 italic">
            Select a course to view its roadmap
          </div>
        )}
      </section>
    </div>
  )
}

export default Courses
