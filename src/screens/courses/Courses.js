import { CoursesIntro } from "../../components/CoursesIntro/CoursesIntro";
import { CoursesContainer } from "../../components/CoursesContainer/CoursesContainer";
import { trackPromise } from "react-promise-tracker";
import style from "./Courses.module.css";
import { useEffect, useState } from "react";
import { countLikeCourse, getAllCourse } from "../../api/Core/Course";

const Courses = () => {

  const [likeCoun, setLikeCoun] = useState([]);

  useEffect(() => {
    trackPromise(getRate());
  }, []);

  const getRate = async () => {
    let response = await getAllCourse();

    if (response.data.result) {

      let allId = response.data.result.map((item) => (
        item._id
      ));

      var likeCount = allId.map(async (item) => (
        await countLikeCourse(item)
      ));

      setLikeCoun([likeCount]);  
      
    }

  }


  return (
    <div className={style.coursesContainer}>
      <CoursesIntro />
      <CoursesContainer likeDats={likeCoun.length > 0 ? likeCoun : ''}/>
    </div>
  );
};

export { Courses };
