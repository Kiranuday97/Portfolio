import React from 'react';
import Navbar from '../components/Navbar';
import PersonalInfo from '../components/PersonalInfo'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
       <Navbar />
       <PersonalInfo></PersonalInfo>
       <Footer/>
      
    </div>
  )
}

export default Home
