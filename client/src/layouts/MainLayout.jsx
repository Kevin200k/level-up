import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const MainLayout = () => {
  return (
    <div className='min-h-screen'>
      <Nav />

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout