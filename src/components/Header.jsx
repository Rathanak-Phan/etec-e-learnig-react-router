import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='w-7xl h-20 mx-auto flex justify-between items-center'>
          <div></div>
          
          <ul className='flex gap-10'>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>

          <Link to="/profile" className='w-14 h-14 rounded-full overflow-hidden'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/017/800/528/small/user-simple-flat-icon-illustration-vector.jpg" alt="" />
          </Link>
    </header>
  )
}

export default Header