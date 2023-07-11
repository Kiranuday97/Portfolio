import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PagesImage from '../components/PagesImage'
import ContactComponent from '../components/ContactComponent';


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <PagesImage heading="CONTACT ME." text="Let's have a chat" /> 
      <ContactComponent/>

     
    
      
    </div>
  )
}

export default Contact
