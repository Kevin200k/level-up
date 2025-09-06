import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Video,
  FileText,
  HelpCircle,
  Code,
  Globe,
  ChevronDown
} from 'lucide-react'

const CourseDetail = () => {
  const { id } = useParams()

  const [loading, setLoading] = useState(false)
  const [course, setCourse] = useState(null)
  const [error, setError] = useState(null)

  // track which content item is expanded
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    const fetchCourseDetail = async () => {
      setLoading(true)
      try {
        const res = await fetch(`http://localhost:3000/courses/${id}`)

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const data = await res.json()
        setCourse(data)
        setError(null)
      } catch (err) {
        console.error("Failed to fetch course detail:", err)
        setError("Error fetching course data. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchCourseDetail()
    }
  }, [id])

  const getIconForType = (type) => {
    const iconProps = { className: "text-blue-500 w-6 h-6" };
    switch (type) {
      case 'video':
        return <Video {...iconProps} />
      case 'article':
        return <FileText {...iconProps} />
      case 'quiz':
        return <HelpCircle {...iconProps} />
      case 'project':
        return <Code {...iconProps} />
      case 'tutorial':
        return <Globe {...iconProps} />
      default:
        return null
    }
  }

  if (loading) {
    return (
      <div className="loader_container">
        <div className="loader"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center mt-20 text-red-500">
        <p>{error}</p>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="text-center mt-20 text-gray-500">
        <p>No course found for this ID.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen max-w-4xl m-4 bg-white shadow-xl rounded-2xl p-8">
      <h1 className="section_heading">{course.title}</h1>
      <p className="text-lg text-gray-600 mb-4">{course.description}</p>
      <span className="small_background_text inline-block mb-8">
        Duration: {course.duration}
      </span>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Course Roadmap
      </h2>
      
      <div className="relative">
        {course.roadmap.map((stage, stageIndex) => (
          <div key={stageIndex} className="flex mb-10">
            <div className="flex flex-col items-center mr-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm z-10">
                {stageIndex + 1}
              </div>
              {stageIndex < course.roadmap.length - 1 && (
                <div className="w-1 bg-gray-200 flex-grow -mt-2 -mb-2 z-0"></div>
              )}
            </div>

            {/* CourseId Detail */}
            <div className="p-5 rounded-lg flex-grow shadow-sm bg-amber-200">
              <h3 className="font-medium mb-2">{stage.stage}</h3>
              <p className="in_container_medium_description mb-4">
                Topics: {stage.topics.join(', ')}
              </p>
              <div className="space-y-3">
                {stage.content && stage.content.map((contentItem, contentIndex) => {
                  const key = `${stageIndex}-${contentIndex}`
                  const isOpen = expanded === key

                  return (
                    <div
                      key={key}
                      className="p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        {getIconForType(contentItem.type)}
                        <div className="flex-grow hover:underline">
                            <p className="medium_text">{contentItem.lesson}</p>
                          <p className="text-xs text-gray-500 capitalize">
                            {contentItem.type}
                          </p>
                        </div>

                        <div
                          className="rounded-full hover:bg-gray-200 cursor-pointer p-1"
                          onClick={() =>
                            setExpanded(isOpen ? null : key)
                          }
                        >
                          <ChevronDown
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            color="#808080"
                          />
                        </div>
                      </div>

                      {isOpen && (
                        <div className="mt-3 text-gray-600 text-sm border-t pt-2 space-y-3">
                          {contentItem.type === "quiz" ? (
                            <div>
                              <p className="font-semibold text-gray-800 mb-2">Quiz</p>
                              {contentItem.questions && contentItem.questions.map((q, i) => (
                                <div key={i} className="mb-3">
                                  <p className="font-medium">{i + 1}. {q.question}</p>
                                  <div className="ml-4 space-y-1">
                                    {q.options.map((opt, j) => (
                                      <label key={j} className="flex items-center space-x-2">
                                        <input 
                                          type="radio" 
                                          name={`question-${i}`} 
                                          value={opt} 
                                          className="text-blue-500"
                                        />
                                        <span>{opt}</span>
                                      </label>
                                    ))}
                                  </div>
                                  <p className="text-green-600 mt-1 text-xs">
                                    Correct Answer: {q.answer}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : contentItem.type === "project" ? (
                            <div>
                              <p className="font-semibold text-gray-800 mb-1">Project Instructions:</p>
                              <p>{contentItem.instructions}</p>
                            </div>
                          ) : contentItem.type === "video" ? (
                            <div>
                              <p className="font-semibold text-gray-800 mb-2">Video Lesson</p>
                              <div className="aspect-w-4 aspect-h-3">
                                <iframe
                                  src={contentItem.url}
                                  title={contentItem.lesson}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  className="w-full h-full rounded-lg shadow-md"
                                ></iframe>
                              </div>
                              <p className="mt-2 text-gray-600 text-sm">{contentItem.content}</p>
                            </div>
                          ) : (
                            <div>
                              <p>{contentItem.content}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseDetail
