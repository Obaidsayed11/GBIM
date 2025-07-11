import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import DesignBanner from './Components/MvDiv'
import Creative from './Components/Creative'
import Discover from './Components/Discover'
import FeaturedWork from './Components/FeaturedWork'
import FaqSection from './Components/FaqSection'
import ClientTestimonials from './Components/ClientTestimonials'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'


function App() {
  

  return (
    <div className='overflow-x-hidden'>
     <Navbar  />
     <Banner />
     <DesignBanner />
     <Creative />
     <Discover />
    <FeaturedWork />
    <FaqSection />
    <ClientTestimonials/>
    <ContactSection />
    <Footer />
     </div>
    
  )
}

export default App
