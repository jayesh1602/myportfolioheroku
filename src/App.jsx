import React from 'react'
import { Header } from './components/header/Header'
import { Nav } from './components/nav/Nav'
import { About } from './components/about/About'
import { Portfolio } from './components/portfolio/Portfolio'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { Experiance } from './components/experiance/Experiance'
import { Testimonial } from './components/testimonial/Testimonial'


const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experiance/>
        <Portfolio/>
        {/* <Testimonial/> */}
        <Contact/>
        <Footer/>  
    </>
  )
}

export default App
//rafc = for this instead of sfc