import { CardInCourses } from "../CardInCourses/CardInCourses";
import { Paginate } from "../common/Pagination/Paginate";
import { CoursesFilter } from "../CoursesFilter/CoursesFilter";
import { CoursesIntro } from "../CoursesIntro/CoursesIntro";
import "./CoursesContainer.css";
import * as fa from '../../constants/persianStrings';

import cour03 from "./../../assets/images/Courses/react.png";

const CoursesContainer = () => {
  return (
    <div>
      <div className="homeH2 c21">
        <h2> {fa.TITLE_COURSES} </h2>
      </div>
      <CoursesFilter />
      <div className="CardIncoursesContainer">
        <CardInCourses
          image={cour03}
          bgColor="#F3FFF8"
          btnColor="detail"
          title={"React native"}
          teacher={"محمد بحرالعلوم"}
        />
        <CardInCourses
          image={cour03}
          bgColor="#F5FCFF"
          btnColor="detail"
          title={"React native"}
          teacher={"محمد بحرالعلوم"}
        />
        <CardInCourses
          image={cour03}
          bgColor="#F3FFF8"
          btnColor="detail"
          title={"React native"}
          teacher={"محمد بحرالعلوم"}
        />
        <CardInCourses
          image={cour03}
          bgColor="#F5FCFF"
          btnColor="detail"
          title={"React native"}
          teacher={"محمد بحرالعلوم"}
        />
        <CardInCourses
          image={cour03}
          bgColor="#F5FCFF"
          btnColor="detail"
          title={"React native"}
          teacher={"محمد بحرالعلوم"}
        />
        <CardInCourses
          image={cour03}
          bgColor="#F3FFF8"
          btnColor="detail"
          title={"React native"}
          teacher={"محمد بحرالعلوم"}
        />
        <CardInCourses
          image={cour03}
          bgColor="#F5FCFF"
          btnColor="detail"
          title={"React native"}
          teacher={"محمد بحرالعلوم"}
        />
        <CardInCourses
          image={cour03}
          bgColor="#F3FFF8"
          btnColor="detail"
          title={"React native"}
          teacher={"محمد بحرالعلوم"}
        />
      </div>
      <Paginate />
    </div>
  );
};

export { CoursesContainer };
