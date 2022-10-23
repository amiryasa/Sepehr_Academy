import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { CoursesCard } from "../CoursesCard/CoursesCard";

import './HomeCources.css';
import { GeneralContext } from "../../providers/GeneralContext"
import cour01 from './../../assets/images/Courses/native.png';
import cour02 from './../../assets/images/Courses/html.png';
import cour03 from './../../assets/images/Courses/react.png';
import * as fa from '../../constants/persianStrings'
import { getAllCourse } from '../../api/Core/Course';

const HomeCources = () => {
  const [coursesData, setCoursesData] = useState(null)
  const { language, themePage } = useContext(GeneralContext);
  const navigator = useNavigate();

  useEffect(() => {
    getAllCourses()
  }, [])


  const getAllCourses = async () => {
    let response = await getAllCourse();

    if (response.data.result) {
      setCoursesData(response.data.result.slice(0, 4))
    }
  }

  return (
    <>
      <div className={language === 'fa' ? "homeH2 h23" : "homeH2En h23En"} data-aos="fade-up" data-aos-duration="1000">
        <h2 className={`${themePage}Intro`}> {language === 'fa' ? fa.HEADER_COURSE : fa.HEADER_COURSE_EN} </h2>
      </div>
      <div className="courcesCantainer">
        {/* <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="800">
          <CoursesCard
            image={cour03}
            bgColor="#F3FFF8"
            btnColor="detail"
            title={"React native"}
            teacher={"محمد بحرالعلوم"}
            numberOfStudent='10'
            rateOfCourses='4.3'
          />
        </div> */}
        {coursesData != null && coursesData.map((item) => (
          <div data-aos="fade-left" data-aos-delay="1000" data-aos-duration="800">
            <CoursesCard
              image={item.lesson.image}
              bgColor="#F5FCFF"
              btnColor="detail"
              title={item.title}
              teacher={item.teacher.fullName}
              numberOfStudent='5'
              rateOfCourses='4.3'
              id={item._id}
            />
          </div>
        ))}

      </div>

      <p className="homeMore" onClick={() => navigator('/courses')}> {language === 'fa' ? fa.MORE_COURSE : fa.MORE_COURSE_EN}</p>
    </>
  );
};

export { HomeCources };
