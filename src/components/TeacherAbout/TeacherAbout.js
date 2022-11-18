import React from 'react';

import './TeacherAbout.css'
import bhr from './../../assets/images/AboutUs/bhr.jpg';



const TeacherAbout = (props) => {
  return (
    <div className="teacherAbout">
        <div className="teacherAboutPic"><img src={props.pic} alt=""/></div>
        <p className="teacherAboutTitle"> {props.teacherName} </p>
        <p  className="teacherAboutDescption"> {props.teacherDescription} </p>
    </div>
  )
}

export {TeacherAbout};