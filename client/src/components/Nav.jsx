import React, { useState } from 'react'
import { useCourses } from '../context/CourseContext'
import { Link, useParams } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { Search } from 'lucide-react'

const Nav = () => {
  const { courses: courseList } = useCourses()
  const [search, setSearch] = useState('')
  const [showResults, setShowResults] = useState(false)

  const { id } = useParams()

  const searchResult = courseList.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );


  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setShowResults(value.length > 0);
  };

  return (
    <div className='nav_parent sticky top-0 bg-white z-20'>

      <div>
        <img src={ logo } className='w-28' />
      </div>

      {/* input */}
      <div className="relative z-50 middle_section">
        <input
          type='text'
          placeholder='Search Anything'
          className='search_bar'
          onChange={handleSearchChange}
        />
        
        {showResults && (
          <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md overflow-hidden">
            {searchResult.length > 0 ? (
              searchResult.map((course) => (
                <Link to={`/courses/${course.id}`}
                onClick={() => {
                  setSearch('')
                  setShowResults(false)
                }}>
                  <div key={course.id} className="p-3 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                  >
                    <div className='w-7 h-7 rounded-full bg-gray-300 flex justify-center items-center'>
                      <Search size={15} />
                    </div>
                    <div className='w-[85%]'>
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-gray-600">{course.description}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-3 text-gray-500 italic">No courses found.</div>
            )}
          </div>
        )}
      </div>

      <div className='end_section '>
        <div className='auth_section'>
          <div className='rounded-3xl border-2 border-blue-500 pl-6 pr-6 pt-3 pb-3 text-black'>
            Login
          </div>
        </div>

        <div className='auth_section'>
          <div className='bg-blue-500 rounded-3xl pl-6 pr-6 pt-3 pb-3 text-gray-100'>
            Signup
          </div>
        </div>
      </div>

      {showResults && (
        <div
          className="fixed inset-0 bg-transparent z-40"
          onClick={() => setShowResults(false)}
        ></div>
      )}
    </div>
  )
}

export default Nav;