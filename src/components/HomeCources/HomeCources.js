import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { CoursesCard } from "../CoursesCard/CoursesCard";

import './HomeCources.css';
import { GeneralContext } from "../../providers/GeneralContext"
import * as fa from '../../constants/persianStrings'
import { getAllCourse } from '../../api/Core/Course';
import { trackPromise } from "react-promise-tracker";
import { formatDate } from '../../constants/usefulFunc';

const HomeCources = () => {
  const [coursesData, setCoursesData] = useState(null)
  const { language, themePage } = useContext(GeneralContext);
  const navigator = useNavigate();

  useEffect(() => {
    trackPromise(getAllCourses())
  }, [])

  const duringSeter = (item1, item2) => {

    var d = new Date(item1);
    let month01 = d.getMonth() + 1;

    var e = new Date(item2);
    let month02 = e.getMonth() + 1;


    return (month01 - month02);

  }

  const getAllCourses = async () => {
    let response = await getAllCourse();
    if (response.data.result) {
      setCoursesData(response.data.result.slice(0, 4))
    }

    console.log('ya ali',response.data.result);
  }

  return (
    <>
      <div className={language === 'fa' ? "homeH2 h23" : "homeH2En h23En"} data-aos="fade-up" data-aos-duration="1000">
        <h2 className={`${themePage}Intro`}> {language === 'fa' ? fa.HEADER_COURSE : fa.HEADER_COURSE_EN} </h2>
      </div>
      <div className="courcesCantainer">
        {coursesData != null && coursesData.map((item) => (
          <div data-aos="fade-left" data-aos-delay="1000" data-aos-duration="800" key={item._id} >
            <CoursesCard
              image={item.lesson.image}
              bgColor="#F5FCFF"
              btnColor="detail"
              title={item.title}
              teacher={item.teacher.fullName}
              numberOfStudent={item.capacity}
              rateOfCourses={duringSeter(formatDate(item.endDate),formatDate(item.startDate))}
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
