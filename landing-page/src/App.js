import React from 'react'
import Home from './Components/Home'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Testimonial from './Components/Testimonial'
import Work from './Components/Work'

const App = () => {
  return (
    <div className='App'>
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
