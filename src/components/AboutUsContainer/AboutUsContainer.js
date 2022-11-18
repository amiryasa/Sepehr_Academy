import React from 'react';
import { PropertyAbout } from '../PropertyAbout/PropertyAbout';
import { TeacherAbout } from '../TeacherAbout/TeacherAbout';

import './AboutUsContainer.css'

const AboutUsContainer = (props) => {
  return (
    <div className="aboutUsContainer">
        <div className="homeH2 n21 aboutUsContainerTitle">
            <h2> اساتید باتجربه </h2>
        </div>

        <div className="AboutUsContainerteacherContainer">
          {props.data.map((data) => 
          <TeacherAbout teacherName={data.name} teacherDescription={data.description} pic={data.picture}/>
          )}
        </div>

        <div className="homeH2 n21 aboutUsContainerTitle">
            <h2> ویژگی‌های ما </h2>
        </div>

        <div className="AboutUsContainerpropertyContainer">
          {props.properties.map((data) => 
          <PropertyAbout teacherName={data.name} teacherDescription={data.description} pic={data.picture}/>
          )}
        </div>
    </div>
  )
}

export {AboutUsContainer};