import React, { useState } from 'react'
import { useCourses } from '../context/CourseContext'
import { Link, useParams } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { Search, ChevronDown } from 'lucide-react'

const Nav = () => {
  const { courses: courseList } = useCourses()
  const [search, setSearch] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [showItems, setShowItems] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // <-- Default false for demo
  const { id } = useParams()

  const searchResult = courseList.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearch(value)
    setShowResults(value.length > 0)
  }

  const handleShowItems = () => {
    setShowItems(prev => !prev)
  }

  return (
    <nav className="sticky top-0 z-30 bg-white shadow-sm border-b border-gray-100">
      <div className="w-full px-4 py-3 flex justify-between items-center relative">
        {/* Logo and Dropdown */}
        <div className="flex items-center gap-2">
          <Link to="/homepage" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-24 h-auto" />
          </Link>

          <button
            className={`relative p-1 rounded-full hover:bg-gray-100 transition ${isActive ? 'bg-gray-200' : ''}`}
            aria-label="Expand menu"
            onClick={() => {
              setIsActive(!isActive)
              handleShowItems()
            }}
          >
            <ChevronDown size={20} className="text-gray-700" />
          </button>

          {showItems && (
            <div className="absolute top-full mt-2 left-3 bg-white shadow-lg rounded-lg border border-gray-100 w-48 z-50">
              <div className="px-4 py-3 text-gray-500 italic">Not Available</div>
            </div>
          )}
        </div>

        {/* Middle Section (Search or Message) */}
        <div className="relative flex-1 max-w-md">
          {isLoggedIn ? (
            <>
              {/* Search Bar */}
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search Anything..."
                  value={search}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                />
              </div>

              {/* Search Results */}
              {showResults && (
                <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 z-50">
                  {searchResult.length > 0 ? (
                    searchResult.map((course) => (
                      <Link
                        key={course.id}
                        to={`/courses/${course.id}`}
                        onClick={() => {
                          setSearch('')
                          setShowResults(false)
                        }}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-green-50 transition"
                      >
                        <div className="w-7 h-7 rounded-full bg-green-100 flex justify-center items-center">
                          <Search size={14} className="text-green-600" />
                        </div>
                        <div className="w-[85%]">
                          <h3 className="font-semibold text-gray-800">{course.title}</h3>
                          <p className="text-sm text-gray-500 truncate">
                            {course.description}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500 italic">No courses found.</div>
                  )}
                </div>
              )}

              {/* Overlay to close search results */}
              {showResults && (
                <div
                  className="fixed inset-0 bg-transparent z-40"
                  onClick={() => setShowResults(false)}
                ></div>
              )}
            </>
          ) : (
            <div className="text-gray-500 flex justify-between items-center">
              <div className="cursor-pointer hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-500 hover:text-white text-gray-500 px-3 py-1 rounded transition flex justify-center items-center">
                Home
                <button>
                  <ChevronDown size={20} className="text-gray-700" />
                </button>
                </div>
              <div className="cursor-pointer hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-500 hover:text-white text-gray-500 px-3 py-1 rounded transition">
                About Us
              </div>
              <div className="cursor-pointer hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-500 hover:text-white text-gray-500 px-3 py-1 rounded transition">
                Courses
              </div>
              <div className="cursor-pointer hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-500 hover:text-white text-gray-500 px-3 py-1 rounded transition">
                Contact
              </div>
              <div className="cursor-pointer hover:bg-gradient-to-r hover:from-green-400 hover:to-purple-500 hover:text-white text-gray-500 px-3 py-1 rounded transition">
                Help
              </div>

            </div>
          )}
        </div>

        {/* Auth Buttons */}
        <div>
          {!isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="px-5 py-2 rounded-full border border-green-600 text-green-700 font-medium hover:bg-green-50 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-gray-700">
              <span className="font-medium">Hi, Dammy 👋</span>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-sm text-red-500 hover:underline"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
