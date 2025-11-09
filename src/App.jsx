import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import LoadingProgressBar from './components/LoadingProgress'

const App = () => {
  const location = useLocation()

  return (
    <div className='overflow-hidden poppins-medium'>
      <LoadingProgressBar/>
      <Navbar/>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ 
            type: "spring",
            stiffness: 400,
            damping: 30,
            mass: 0.8
          }}
          className="min-h-screen"
        >
          <Routes location={location}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blog' element={<Blogs/>}/>
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App