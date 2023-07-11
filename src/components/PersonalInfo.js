import "./PersonalInfoStyle.css";

import React from 'react'
import { Link } from "react-router-dom";

import IntroImg from "../assets/poligon2.png"
import photo from "../assets/photo.jpg"

const PersonalInfo = () => {
  return (
    <div className="self">
        <div className="mask">
            <img src={IntroImg} alt="IntroImg" className="intro-img" />

        </div>
        <div className="content">
          <div className="row">
            <div className="col">
            <img src={photo} alt="" className="PersonalPhoto"/>

            </div>
            <div className="col hero-name">
            <h1>Hi I'm <span>Kiran.</span></h1>
            <p> MERN STACK DEVELOPER</p>
            </div>
          </div>
           
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>

            </div>
        </div>
      
    </div>
  )
}

export default PersonalInfo
