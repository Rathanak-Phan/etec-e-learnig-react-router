import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Courses from './page/Courses'
import Pricing from './page/Pricing'
import NotFound from './page/NotFound'
import Header from './components/Header'
import LayoutProfile from './components/LayoutProfile'
import Overviews from './page/Overviews'
import Account from './page/Account'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Header */}
        <div className='w-full bg-gray-800 text-gray-50'>
          <Header />
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/pricing' element={<Pricing />} />

          <Route path='/profile' element={<LayoutProfile />}>
            <Route path='/profile' element={<Overviews />} />
            <Route path='/profile/account' element={<Account />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
