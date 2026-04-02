// CourseMainPage.jsx
import React from 'react'
import CourseIntro from '../components/CourseIntro'
import SelectCourses from '../components/SelectCourses'

const CourseMainPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <CourseIntro />
      <SelectCourses />
    </div>
  )
}

export default CourseMainPage
