
import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import react1 from "../assets/react1.jpg";
import Mern from "../assets/Mern.webp"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a MERN stact developer. I create responsive secure websites for my clients</p>
            <Link ti="/contact" >
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stact top">
                    <img src={react1} className="img" alt="true" />
                </div>
            </div>
            <div className="img-container">
                <div className="img-stact bottom">
                    <img src={Mern} className="img" alt="true" />
                </div>
            </div>

        </div>
       
    </div>
    
  )
}

export default AboutContent
