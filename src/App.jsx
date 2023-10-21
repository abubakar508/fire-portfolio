import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import About from './Pages/About'
import Services from './Pages/Services'
import Ambitions from './Pages/Ambitions'
import Testimonials from './Pages/Testimonials'
import Work from './Pages/Work'
import Contact from './Pages/Contact'
import ProjectView from './Pages/ProjectView'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/Ambitions' element={<Ambitions/>} />
          <Route path='/Testimonials' element={<Testimonials/>} />
          <Route path='/Work' element={<Work/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/ProjectView' element={<ProjectView />} />
        </Routes>
       </Router>
    </div>
  )
}

export default App