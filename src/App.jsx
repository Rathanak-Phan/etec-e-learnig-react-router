import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Courses from './page/Courses'
import Pricing from './page/Pricing'
import { Link } from 'react-router-dom'
import NotFound from './page/NotFound'

function App() {

  return (
    <>
      

      <BrowserRouter>
        {/* Header */}
        <header className='w-full h-20 flex justify-center items-center bg-gray-800 text-gray-50'>
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
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
