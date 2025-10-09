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
import CourseDetail from './pages/courseDetail'
import Roadmap from './components/roadmap/Roadmap'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/courses?' element={<CourseMainPage />} />
      <Route path='course' element={<Courses />} />
      <Route path='courses/:id' element={<CourseDetail />} />
      <Route path='/roadmap' element={<Roadmap />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
