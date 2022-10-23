import * as React from "react";
import _ from "lodash";
import { useState, useEffect } from "react";

import { CardInCourses } from "../CardInCourses/CardInCourses";
import { Paginate } from "../common/Pagination/Paginate";
import { CoursesFilter } from "../CoursesFilter/CoursesFilter";
import { CoursesIntro } from "../CoursesIntro/CoursesIntro";

import * as fa from "../../constants/persianStrings";

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


  const [coursesData01, setCoursesData01] = useState(coursesData);


  const [coursesCurrentData, setCoursesCurrentData] = useState("title");

  // up or down
  const [upOrDownData, setupOrDownData] = useState("desc");

  // pagination
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
  };

  // *
  // *
  // * 
  // * 
  // * 

  //Main filter

  const sianat = (type, value) => {


  }

  // *
  // *
  // * 
  // * 
  // * 

  //Filtering sortby

  // const [sortby, setSortby] = React.useState([]);

  const sortbyItem = ["عنوان", "امتیاز", "قیمت", "تعداد دانشجو", "مدرس دوره"];

  const handleSelectboxSortby = (event) => {
    // const {
    //   target: { value },
    // } = event;
    // setSortby(
    //   // On autofill we get a stringified value.
    //   typeof value === "string" ? value.split(",") : value
    // );

    // if (event.target.value === "عنوان") {
    //   var movieOriginal = _.orderBy(coursesData01, ["title"], [upOrDownData]);
    //   setCoursesData01([...movieOriginal]);
    //   setCoursesCurrentData("title");
    // } else if (event.target.value === "امتیاز") {
    //   var movieOriginal = _.orderBy(coursesData01, ["rate"], [upOrDownData]);
    //   setCoursesData01([...movieOriginal]);
    //   setCoursesCurrentData("rate");
    // } else if (event.target.value === "قیمت") {
    //   var movieOriginal = _.orderBy(coursesData01, ["cost"], [upOrDownData]);
    //   setCoursesData01([...movieOriginal]);
    //   setCoursesCurrentData("cost");
    // } else if (event.target.value === "تعداد دانشجو") {
    //   var movieOriginal = _.orderBy(
    //     coursesData01,
    //     ["studentCount"],
    //     [upOrDownData]
    //   );
    //   setCoursesData01([...movieOriginal]);
    //   setCoursesCurrentData("studentCount");
    // } else if (event.target.value === "مدرس دوره") {
    //   var movieOriginal = _.orderBy(coursesData01, ["teacher"], [upOrDownData]);
    //   setCoursesData01([...movieOriginal]);
    //   setCoursesCurrentData("teacher");
    // }
  };

  // *
  // *
  // * 
  // * 
  // * 

  //Filtering up/down

  const [upOrDown, setUpOrDown] = React.useState([]);

  const upOrDownItem = ["صعودی", "نزولی"];

  const handleSelectboxUpOrDown = (event) => {
    // const {
    //   target: { value },
    // } = event;
    // setUpOrDown(
    //   // On autofill we get a stringified value.
    //   typeof value === "string" ? value.split(",") : value
    // );

    // if (event.target.value === "صعودی") {
    //   setupOrDownData("asc");
    //   var movieOriginal = _.orderBy(coursesData01, [coursesCurrentData], ["asc"]);
    //   setCoursesData01([...movieOriginal]);
    // } else if (event.target.value === "نزولی") {
    //   setupOrDownData("desc");
    //   var movieOriginal = _.orderBy(
    //     coursesData01,
    //     [coursesCurrentData],
    //     ["desc"]
    //   );
    //   setCoursesData01([...movieOriginal]);
    // }
  };

  // *
  // *
  // * 
  // * 
  // * 

  // progress 2 step

  // 01
  // 01
  // 01

  // let allCount = coursesData && coursesData.map((a) => a.cost);
  // allCount.sort();

  // const [valueOf2step01, setValueOf2step01] = React.useState([allCount[0] / 1000, (allCount[allCount.length - 1]) / 1000]);

  const handleProgress2step01 = (event, newValue) => {

    // let newData;

    // if ((teacherName).length > 0) {
    //   newData =coursesData&& coursesData.filter(item =>
    //     (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1]) &&
    //     (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1]) &&
    //     (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1]) &&
    //     ((teacherName).includes(item.teacher)));
    // }
    // else {
    //   newData =coursesData&& coursesData.filter(item =>
    //     (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1]) &&
    //     (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1]) &&
    //     (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1]));
    // }

    // setCoursesData01([...newData]);

    // setValueOf2step01(newValue);

  };


  // 02
  // 02
  // 02

  // let allRate =coursesData&& coursesData.map((a) => a.rate);
  // allRate.sort();

  const [valueOf2step02, setValueOf2step02] = React.useState([0, 5]);

  const handleProgress2step02 = (event, newValue) => {

    // let newData;

    // if ((teacherName).length > 0) {
    //   newData =coursesData&& coursesData.filter(item =>
    //     (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1]) &&
    //     (item.rate >= newValue[0] && item.rate <= newValue[1]) &&
    //     (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1]) &&
    //     ((teacherName).includes(item.teacher)));
    // }
    // else {
    //   newData = coursesData&&coursesData.filter(item =>
    //     (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1]) &&
    //     (item.rate >= newValue[0] && item.rate <= newValue[1]) &&
    //     (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1]));
    // }


    // setCoursesData01([...newData]);

    // setValueOf2step02(newValue);

    // console.log(newData);
  };


  // 03
  // 03
  // 03

  // let allCapacity =coursesData&& coursesData.map((a) => a.studentCount);
  // allCapacity.sort();

  // const [valueOf2step03, setValueOf2step03] = React.useState([allCapacity[0], allCapacity[allCapacity.length - 1]]);

  const handleProgress2step03 = (event, newValue) => {

    // let newData;

    // if ((teacherName).length > 0) {
    //   newData =coursesData&& coursesData.filter(item =>
    //     (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1]) &&
    //     (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1]) &&
    //     (item.studentCount >= newValue[0] && item.studentCount <= newValue[1]) &&
    //     ((teacherName).includes(item.teacher)));
    // }
    // else {
    //   newData =coursesData&& coursesData.filter(item =>
    //     (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1]) &&
    //     (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1]) &&
    //     (item.studentCount >= newValue[0] && item.studentCount <= newValue[1]));
    // }


    // setCoursesData01([...newData]);

    // setValueOf2step03(newValue);
  };

  // *
  // *
  // * 
  // * 
  // * 

  // Teacher selection

  // let allTeacher = coursesData&&coursesData.map((a) => a.teacher);
  // allTeacher = [...new Set(allTeacher)];

  const [teacherName, setTeacherName] = React.useState([]);

  const handleSelection = (event) => {
    // const {
    //   target: { value },
    // } = event;
    // setTeacherName(
    //   // On autofill we get a stringified value.
    //   typeof value === "string" ? value.split(",") : value
    // );

    // let newData;

    // if ((event.target.value).length > 0 &&coursesData) {
    //   newData = coursesData.filter(item =>
    //     (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1]) &&
    //     (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1]) &&
    //     (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1]) &&
    //     ((event.target.value).includes(item.teacher)));
    // }
    // else {
    //   newData =coursesData&& coursesData.filter(item =>
    //     (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1]) &&
    //     (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1]) &&
    //     (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1]));
    // }


    // setCoursesData01([...newData]);

  };


  return (
    <div className='dfghjhjg'>
      <div className="homeH2 c21">
        <h2> {fa.TITLE_COURSES} </h2>
      </div>

      {/* <CoursesFilter
        handleSelectboxSortby={handleSelectboxSortby}
        selectStateSortby={sortby}
        sortbyItem={sortbyItem}
        sortbyTitle={"مرتب‌سازی"}
        handleSelectboxUpOrDown={handleSelectboxUpOrDown}
        selectStateUpOrDown={upOrDown}
        upOrDownItem={upOrDownItem}
        upOrDownTitle={"روند نمایش"}



        // progress 2 step
        minCount01={allCount[0] / 1000}
        minCount02={0}
        minCount03={allCapacity[0]}

        maxCount01={(allCount[allCount.length - 1]) / 1000}
        maxCount02={5}
        maxCount03={(allCapacity[allCapacity.length - 1])}

        step01={50}
        step02={0.5}
        step03={10}

        handleProgress2step01={handleProgress2step01}
        handleProgress2step02={handleProgress2step02}
        handleProgress2step03={handleProgress2step03}

        valueOf2step01={valueOf2step01}
        valueOf2step02={valueOf2step02}
        valueOf2step03={valueOf2step03}

        titleOf2step01={'قیمت دوره'}
        titleOf2step02={'امتیاز دوره'}
        titleOf2step03={'ظرفیت باقیمانده'}


        //teacher select
        listOfTeacher={allTeacher}
        handleSelection={handleSelection}
        teacherState={teacherName}
      /> */}

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
