import { useContext, useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import { Paginate } from "../common/Pagination/Paginate";
import { TableCom } from "../TableCom/TableCom";
import { getItem } from "./../../api/storage/storage";
import { getStudentById } from "./../../api/Core/Student_Manage";
import "./MainbarMyCourses.css";
import { GeneralContext } from "../../providers/GeneralContext";
import { removeStudentToCourse } from "../../api/Core/Course";
import deleteCourse from "../../assets/images/Table/delete.png"

const MainbarMyCourses = () => {
  const userId = JSON.parse(getItem('id'));
  const [currentPage_MainbarMyCourses, setCurrentPage_MainbarMyCourses] = useState(1);
  const [studentInfo, setStudentInfo] = useState();
  const { setConfirmPopupOpen, onConfirmSetter } = useContext(GeneralContext)

  useEffect(() => {
    trackPromise(getUserId());
  }, []);

  const getUserId = async () => {
    let response = await getStudentById(userId);
    if (response) {

      let rightData = response.data.result.courses.map((item) => ({
        title: item.title,
        teacher: item.teacher.fullName,
        startDate: item.startDate,
        endDate: item.endDate,
        cost: item.cost,
        id: item._id,
        icon:'red',
      }));
      
      setStudentInfo(rightData);
    }
  }

  

  const handlePagination_MainbarMyCourses = (e, value) => {
    setCurrentPage_MainbarMyCourses(value);
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
            actionPic={deleteCourse}
            lastColumnTitle={'حذف دوره'}
            myCourses={studentInfo ? studentInfo : ""}
            currentPage={currentPage_MainbarMyCourses}
            rowsCount={5}
            comFrom={'my'}
            onClick={(courseId) => {
              onConfirmSetter('آیا برای حذف دوره اطمینان دارید؟',
                async () => {
                  const updateCourse = {
                    userId: userId,
                    courseId: courseId
                  }
                  let response = await removeStudentToCourse(updateCourse)
                  if (response.data.result) {
                    getUserId()
                  }
                }, () => { setConfirmPopupOpen(false) })
              setConfirmPopupOpen(true)
            }}
          />
        </div>
        <div className="mainbarCoursesPaginatin">
          <Paginate
            allItem={studentInfo ? studentInfo.length : 5}
            eachPageTtem={5}
            handlePagination={handlePagination_MainbarMyCourses}
          />
        </div>
      </div>
    </div>
  );
};

export { MainbarMyCourses };
