import { useNavigate } from 'react-router-dom';

import { CoursesCard } from "../CoursesCard/CoursesCard";

import './HomeCources.css';

import cour01 from './../../assets/images/Courses/native.png';
import cour02 from './../../assets/images/Courses/html.png';
import cour03 from './../../assets/images/Courses/react.png';

const HomeCources = () => {

    const navigator = useNavigate();

  return (
    <>
      <div className="homeH2 h23" data-aos="fade-up" data-aos-duration="1000">
        <h2> دوره‌ها </h2>
      </div>
      <div className="courcesCantainer">
        <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="800">
          <CoursesCard
            image={cour03}
            bgColor="#F3FFF8"
            btnColor="detail"
            title={"React native"}
            teacher={"محمد بحرالعلوم"}
            numberOfStudent='10'
            rateOfCourses='4.3'
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="1000" data-aos-duration="800">
          <CoursesCard
            image={cour01}
            bgColor="#F5FCFF"
            btnColor="detail"
            title={"React native"}
            teacher={"محمد بحرالعلوم"}
            numberOfStudent='10'
            rateOfCourses='4.3'
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="1500" data-aos-duration="800">
          <CoursesCard
            image={cour02}
            bgColor="#F3FFF8"
            btnColor="detail"
            title={"React native"}
            teacher={"محمد بحرالعلوم"}
            numberOfStudent='10'
            rateOfCourses='4.3'
          />
        </div>
        <div
          className="courcesResponsiveTab"
          data-aos="fade-left"
          data-aos-delay="2000"
          data-aos-duration="800"
        >
          <CoursesCard
            image={cour01}
            bgColor="#F5FCFF"
            btnColor="detail"
            title={"React native"}
            teacher={"محمد بحرالعلوم"}
            numberOfStudent='10'
            rateOfCourses='4.3'
          />
        </div>
      </div>

      <p className="homeMore" onClick={() => navigator('/courses')}> لیست کامل دوره‌ها ...</p>
    </>
  );
};

export { HomeCources };
