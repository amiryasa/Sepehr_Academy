import React from 'react'
import { ContactUsCourse } from '../ContactUsCourse/ContactUsCourse';
import { ContactUsIdea } from '../ContactUsIdea/ContactUsIdea';
import { ContactUsTeacher } from '../ContactUsTeacher/ContactUsTeacher';

import './ContactUsIntro.css';

const ContactUsIntro = () => {
  return (
    <>
      <div className="ContactUsIntroContainer">
        <div className='ContactUsIntroContainerDes'>
          <h2> ارتباط با اموزشگاه بحر </h2>
          <hr></hr>
          <p> آموزشگاه کدنویسی بحر با بیش از دو دهه تجربه ، نامی آشنا در حوزه‌ی پرورش نیروی متخصص محسوب می‌شود.  </p>
        </div>

        <div className='ContactUsIntroContainerPic'></div>

      </div>

      <div className="homeH2 n21 ContactUsContainerTitle">
        <h2> راه‌های ارتباطی </h2>
      </div>

      <div className='ContactUsIntroFormHolder'>
        <ContactUsIdea />
        <ContactUsCourse />
        <ContactUsTeacher />
      </div>
    </>
  )
}

export { ContactUsIntro };