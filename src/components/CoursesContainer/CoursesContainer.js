import { useEffect, useState } from "react";

import * as fa from "../../constants/persianStrings";

import { CardInCourses } from "../CardInCourses/CardInCourses";
import { Paginate } from "../common/Pagination/Paginate";
import { CoursesFilter } from "../CoursesFilter/CoursesFilter";
import { CoursesIntro } from "../CoursesIntro/CoursesIntro";
import "./CoursesContainer.css";

import cour03 from "./../../assets/images/Courses/react.png";
import { getAllCourse } from "../../api/Core/Course";

// const CoursesData = [
//   {
//     title: "React native 01",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 12,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 02",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 15,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 03",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 10,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 04",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 12,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 05",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 32,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 06",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 19,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 07",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 47,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 08",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 63,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 09",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 15,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 10",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 28,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 11",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 53,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 12",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 29,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 13",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 36,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 14",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 72,
//     rate: 4.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 15",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 61,
//     rate: 1.4,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 16",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 34,
//     rate: 2.2,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 17",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 49,
//     rate: 5,
//     cost: "000 150 ت",
//   },
//   {
//     title: "React native 18",
//     image: cour03,
//     teacher: "محمد بحرالعلوم",
//     studentCount: 12,
//     rate: 3.7,
//     cost: "000 150 ت",
//   },
// ];

const CoursesContainer = () => {
  const [coursesData, setCoursesData] = useState(null)
  const [currentPage_CoursesContainer, setCurrentPage_CoursesContainer] = useState(1);

  useEffect(() => {
    getAllCourses()
  }, [])


  const getAllCourses = async () => {
    let response = await getAllCourse()
    if (response.data.result) {
      setCoursesData(response.data.result)
    }
  }

  const handlePagination_CoursesContainer = (e, value) => {
    setCurrentPage_CoursesContainer(value);
    console.log(value);
  };



  return (
    <div>
      <div className="homeH2 c21">
        <h2> {fa.TITLE_COURSES} </h2>
      </div>
      <CoursesFilter />
      <div className="CardIncoursesContainer">
        {coursesData != null && coursesData.slice((currentPage_CoursesContainer * 4) - 4, currentPage_CoursesContainer * 4).map((item, index) => (
          <CardInCourses
            image={item.lesson.image}
            bgColor="#F3FFF8"
            btnColor="detail"
            title={item.title}
            teacher={item.teacher.fullName}
            studentCount={item.student && item.student.length}
            // rate={item.rate}
            cost={item.cost}
            id={item._id}
          />
        ))}
      </div>
      <Paginate
        allItem={coursesData && coursesData.length}
        eachPageTtem={4}
        handlePagination={handlePagination_CoursesContainer}
      />
    </div>
  );
};

export { CoursesContainer };
