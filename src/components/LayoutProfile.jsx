import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function LayoutProfile() {
  return (
    <div className='flex'>
        {/* Navigation */}
        <div className='w-84 h-screen bg-blue-900'>
            <div className='py-5 px-3 text-3xl text-gray-100'>
                Admin dashboard
            </div>
            <div className='flex flex-col '>
                <Link to="/profile" className='bg-blue-800 py-3 px-3'>Overviews</Link>
                <Link to="/profile/account" className='bg-blue-800 py-3 px-3'>Account</Link>
            </div>
        </div>

        {/* main content */}
        <main className='p-5'>
            <Outlet />
        </main>
    </div>
  )
}

export default LayoutProfile