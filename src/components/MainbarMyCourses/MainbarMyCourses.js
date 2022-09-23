import { useState } from "react";

import { Paginate } from "../common/Pagination/Paginate";
import { TableCom } from "../TableCom/TableCom";
import "./MainbarMyCourses.css";

const myCoursesData = [
  {
    id: "01",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "02",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "03",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "04",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "05",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "06",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "07",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "08",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "09",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "10",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "11",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "12",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "13",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "14",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
  {
    id: "15",
    name: "دوره پیشرفته  Back-End",
    teacher: "دکتر محمد بحرالعلوم",
    cost: "000 125 ت",
    capacity: 35,
    date: "01/02/25",
  },
];

const MainbarMyCourses = () => {
  const [currentPage_MainbarMyCourses, setCurrentPage_MainbarMyCourses] =
    useState(1);

  const handlePagination_MainbarMyCourses = (e, value) => {
    setCurrentPage_MainbarMyCourses(value);
    console.log(value);
  };

  return (
    <div className="MainbarContainer MainbarContainerInTable">
      <div className="mainbarCourses">
        <div className="mainbarCoursesTopic">
          <p> دوره‌های من </p>
          <hr></hr>
        </div>
        <div className="mainbarCoursesFilter">
          {" "}
          فیلتر فیلتر فیلتر فیلتر فیلتر{" "}
        </div>
        <div className="mainbarCoursesTable">
          <TableCom
            myData={myCoursesData}
            currentPage={currentPage_MainbarMyCourses}
            rowsCount={5}
          />
        </div>
        <div className="mainbarCoursesPaginatin">
          <Paginate 
            allItem={myCoursesData.length}
            eachPageTtem={5}
            handlePagination={handlePagination_MainbarMyCourses}
          />
        </div>
      </div>
    </div>
  );
};

export { MainbarMyCourses };
