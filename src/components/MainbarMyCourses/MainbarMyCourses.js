import { useEffect, useState } from "react";
import { Paginate } from "../common/Pagination/Paginate";
import { TableCom } from "../TableCom/TableCom";
import { getItem } from "./../../api/storage/storage";
import { getStudentById } from "./../../api/Core/Student_Manage";
import "./MainbarMyCourses.css";


const MainbarMyCourses = () => {
  const [currentPage_MainbarMyCourses, setCurrentPage_MainbarMyCourses] = useState(1);

  const [studentInfo, setStudentInfo] = useState();

  const getUserId = async () => {
    let result = JSON.parse(getItem('id'));
    let response = await getStudentById(result);

    if(response){
      setStudentInfo(response.data.result);
    }
  }

  useEffect(() => {
    getUserId();
  }, []);

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
          {studentInfo ? "yes" : "no"}
        </div>
        <div className="mainbarCoursesTable">
          <TableCom
            lastColumnTitle={'حذف دوره'}
            myData={studentInfo ? studentInfo.courses : ""}
            currentPage={currentPage_MainbarMyCourses}
            rowsCount={5}
          />
        </div>
        <div className="mainbarCoursesPaginatin">
          <Paginate 
            allItem={studentInfo ? studentInfo.courses.length : 5}
            eachPageTtem={5}
            handlePagination={handlePagination_MainbarMyCourses}
          />
        </div>
      </div>
    </div>
  );
};

export { MainbarMyCourses };
