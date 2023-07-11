
import "./PagesImageStyle.css"

import React, { Component } from 'react'

class Image extends Component {
  render(){
  return (
    <div className="page-img" >
        <div className="heading">
           <h1>{this.props.heading}</h1> 
           <p>{this.props.text}</p>
        </div>
      
    </div>
  )
}
}

export default Image
