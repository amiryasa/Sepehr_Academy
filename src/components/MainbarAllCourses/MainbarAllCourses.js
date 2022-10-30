import { useEffect, useState } from "react";

import { Paginate } from "../common/Pagination/Paginate";
import { TableCom } from "../TableCom/TableCom";

import { getAllCourse } from "./../../api/Core/Course";
import { getStudentById } from "./../../api/Core/Student_Manage"

import "./MainbarAllCourses.css";

const allCoursesData = [
  {
    id: "01",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "02",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "03",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "04",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "05",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "06",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "07",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "08",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "09",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "10",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "11",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "12",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "13",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "14",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "15",
    name: "دوره پیشرفته  Front-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
];



const MainbarAllCourses = () => {
  const [currentPage_MainbarAllCourses, setCurrentPage_MainbarAllCourses] = useState(1);

  const [studentInfo, setStudentInfo] = useState();

  const getCourses = async () => {
    let response = await getAllCourse();

    if(response.data.result){
      setStudentInfo(response.data.result);
    }
  }

  useEffect(() => {
    getCourses();
  }, []);

  const handlePagination_MainbarAllCourses = (e, value) => {
    setCurrentPage_MainbarAllCourses(value);
    console.log(value);
  };

  return (
    <div className="MainbarContainerInTable">
      <div className="mainbarAllCourses">
        <div className="mainbarAllCoursesTopic">
          <p> لیست دوره‌ها </p>
          <hr></hr>
        </div>
        <div className="mainbarAllCoursesFilter">
          فیلتر فیلتر فیلتر فیلتر فیلتر
        </div>
        <div className="mainbarAllCoursesTable">
          <TableCom 
          lastColumnTitle={'خرید دوره'}
          myData={studentInfo ? studentInfo : ""}
          currentPage={currentPage_MainbarAllCourses} 
          rowsCount={5}/>
        </div>
        <div className="mainbarAllCoursesPaginatin">
          <Paginate 
            allItem={studentInfo ? studentInfo.length : 5}
            eachPageTtem={5}
            handlePagination={handlePagination_MainbarAllCourses}
          />
        </div>
      </div>
    </div>
  );
};

export { MainbarAllCourses };
