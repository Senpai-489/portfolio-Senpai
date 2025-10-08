'use client'

import React from 'react'
import Navbar from '../Components/Navbar'
import HomeContent from '../Components/HomeContent'
import AboutMe from '../Components/AboutMe'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import LoadingPage from '../Components/LoadingPage'
import Prices from '../Components/Prices'



const Home = () => {
  return (
    <div >
      <LoadingPage/>
            <Navbar />
        <HomeContent/>
        <AboutMe/>
        <Projects/>
        <Prices/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home