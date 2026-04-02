import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Courses from './pages/courses'
import CourseMainPage from './pages/CourseMainPage'
import Homepage from './pages/Homepage'
import ExploreCourses from './pages/ExploreCourses'
import CourseDetail from './pages/courseDetail'
// import Roadmap from './components/roadmap/Roadmap'
import AllRoadmaps from './pages/AllRoadmaps'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index path='/homepage' element={<Homepage />} />
      {/* <Route path='/courses?' element={<CourseMainPage />} /> */}
      <Route path='/explorecourses' element={<ExploreCourses />} />
      <Route path='/roadmap/:courseId' element={<Courses />} />
      <Route path='/courses/:id' element={<CourseDetail />} />
      <Route path='/allroadmaps' element={<AllRoadmaps />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
