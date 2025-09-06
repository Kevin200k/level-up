import React, { createContext, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CourseIdContext = createContext()

export const CourseIdProvider = ({ children }) => {
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        setLoading(true)
        const res = await fetch(`http://localhost:3000/courses/${id}`)

        if (!res.ok) {
          throw new Error(`Http Error! Status: ${res.status}`)
        }

        const data = await res.json()
        setCourse(data)

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

  if (error) {
    return (
      <div className="text-center mt-20 text-red-500">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <CourseIdContext.Provider value={{ loading, setLoading, course, setCourse, error, setError }}>
      {children}
    </CourseIdContext.Provider>
  )
}

export const useCourseId = () => useContext(CourseIdContext)
