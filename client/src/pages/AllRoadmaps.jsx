import React from 'react'
import AllRoadmapBody from '../components/AllRoadmapBody'
import { useCourses } from '../context/CourseContext'

const AllRoadmaps = () => {

  const { courses: courseList, loading } = useCourses()

  return (
    <>
      <AllRoadmapBody courseList={ courseList } loading={loading} />
    </>
  )
}

export default AllRoadmaps