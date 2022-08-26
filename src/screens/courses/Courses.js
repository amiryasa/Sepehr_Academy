import { CoursesIntro } from "../../components/CoursesIntro/CoursesIntro";
import { CoursesContainer } from "../../components/CoursesContainer/CoursesContainer";

import style from "./Courses.module.css";

const Courses = () => {
  return (
    <div className={style.coursesContainer}>
      <CoursesIntro />
      <CoursesContainer />
    </div>
  );
};

export { Courses };
