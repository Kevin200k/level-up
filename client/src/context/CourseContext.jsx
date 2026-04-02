import React, { createContext, useState, useEffect, useContext } from "react"

const CourseContext = createContext()

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true)
        const res = await fetch("http://localhost:3000/courses")
        const data = await res.json()
        setCourses(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  return (
    <CourseContext.Provider value={{ courses, setCourses, loading, setLoading }}>
      {children}
    </CourseContext.Provider>
  )
}

// Custom hook (optional, for cleaner access)
export const useCourses = () => useContext(CourseContext)
