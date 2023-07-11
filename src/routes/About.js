import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PagesImage from '../components/PagesImage'
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <PagesImage heading="ABOUT ME." text="I'm afull stack deeveloper"/>
      <AboutContent />
      <Footer/>
      
    </div>
  )
}

export default About
