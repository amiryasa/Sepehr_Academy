import React from 'react';

import './PropertyAbout.css'

const PropertyAbout = (props) => {
  return (
    <div className="PropertyAbout">
        <div className="PropertyAboutPic"><img src={props.pic} alt=""/></div>
        <p className="PropertyAboutTitle"> {props.teacherName} </p>
        <p  className="PropertyAboutDescption"> {props.teacherDescription} </p>
    </div>
  )
}

export {PropertyAbout};