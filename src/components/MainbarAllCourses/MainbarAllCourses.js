import { useContext, useEffect, useRef, useState } from "react";
import { getItem, removeItem, setItem } from "../../api/storage/storage";
import { GeneralContext } from "../../providers/GeneralContext";
import { Paginate } from "../common/Pagination/Paginate";
import { TableCom } from "../TableCom/TableCom";
import { getAllCourse } from "./../../api/Core/Course";
import { getStudentById } from "./../../api/Core/Student_Manage"
import "./MainbarAllCourses.css";

const MainbarAllCourses = () => {
  const userId = JSON.parse(getItem('id'))
  const courseNew = JSON.parse(getItem('NewCourse'))
  const [currentPage_MainbarAllCourses, setCurrentPage_MainbarAllCourses] = useState(1);
  const [studentInfo, setStudentInfo] = useState();
  const [buyCourseLast, setBuyCourseLast] = useState();
  const { setConfirmPopupOpen, onConfirmSetter } = useContext(GeneralContext)
  const newCourse = useRef([])

  useEffect(() => {
    getCourses();
    getMyCourse();
  }, []);

  // useEffect(() => {
  //   let c;
  //   console.log(courseNew, "++++++++++++");
  //   if (courseNew && studentInfo) {
  //     studentInfo.map((allCourse) => {
  //       c = courseNew.map((item) => {
  //         console.log(item, allCourse._id, "33333333333333");
  //         if (item === allCourse._id) return allCourse
  //       })
  //     })
  //     console.log(c, "________________");
  //   }


  // }, [courseNew, studentInfo])

console.log(buyCourseLast,"buyCourseLast");

  const getCourses = async () => {
    let response = await getAllCourse();
    if (response.data.result) {
      let acceptData = response.data.result.map((item) => ({
        title: item.title,
        teacher: item.teacher.fullName,
        cost: item.cost,
        id: item._id,
        endDate: item.endDate,
        startDate: item.startDate,
        action: false
      }));

      setStudentInfo(response.data.result);
    }
  }

  const handlePagination_MainbarAllCourses = (e, value) => {
    setCurrentPage_MainbarAllCourses(value);
  };

  const addNewCourse = () => {
    const courseNew = JSON.parse(getItem('NewCourse'))
    if (newCourse.current.length > 0) {
      if (courseNew) removeItem('NewCourse')
      setItem("NewCourse", JSON.stringify(newCourse.current))
      if (buyCourseLast.length > 0) {
        setBuyCourseLast((prev) => [...prev, (newCourse.current)])
      }
      else {
        setBuyCourseLast(newCourse.current)
      }
    }
  }

  const getMyCourse = async () => {
    let response = await getStudentById(userId);
    if (response.data.result) {
      let rightData = response.data.result.courses.map((item) => {
        return item._id
      });
      setBuyCourseLast(rightData)
    }
  }

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
            buyCourseLast={buyCourseLast}
            allCourse
            lastColumnTitle={'خرید دوره'}
            myData={studentInfo ? studentInfo : ""}
            currentPage={currentPage_MainbarAllCourses}
            rowsCount={5}
            onClick={(courseId) => {
              onConfirmSetter("آیا برای اضافه کردن دوره به سبد خرید خود اطمینان دارید؟",
                () => {
                  if (newCourse.current.length > 0) {
                    newCourse.current.push(courseId)
                  }
                  else {
                    newCourse.current = [courseId]
                  }
                  setTimeout(() => addNewCourse(), 1000);
                }, () => {
                  setConfirmPopupOpen(false)
                })
              setConfirmPopupOpen(true)
            }} />
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
