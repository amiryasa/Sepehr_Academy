import { useContext, useEffect, useRef, useState } from "react";
import { getItem, removeItem, setItem } from "../../api/storage/storage";
import { GeneralContext } from "../../providers/GeneralContext";
import { Paginate } from "../common/Pagination/Paginate";
import { TableCom } from "../TableCom/TableCom";
import { getAllCourse } from "./../../api/Core/Course";
import { getStudentById } from "./../../api/Core/Student_Manage"
import "./MainbarAllCourses.css";


const MainbarAllCourses = () => {

  const [currentPage_MainbarAllCourses, setCurrentPage_MainbarAllCourses] = useState(1);
  const [buyCourseLast, setBuyCourseLast] = useState();
  const { setConfirmPopupOpen, onConfirmSetter, shoppCourse, setShopCourse } = useContext(GeneralContext)

  const userId = JSON.parse(getItem('id'))
  const [allCourse, setAllCourse] = useState();

  useEffect(() => {
    getCourses();
  }, []);


  const getCourses = async () => {
    let response = await getAllCourse();

    let response02 = await getStudentById(userId);
    if (response02.data.result && response) {

      let holder = response02.data.result.courses;
      holder = holder.map(item => item._id);

      let rightData = response.data.result.map((item) => ({
        title: item.title,
        teacher: item.teacher.fullName,
        startDate: item.startDate,
        endDate: item.endDate,
        cost: item.cost,
        id: item._id,
        icon: holder.includes(item._id) ? 'gray' : 'green',
      }));

      setAllCourse(...[rightData]);
    }
  }

  const handlePagination_MainbarAllCourses = (e, value) => {
    setCurrentPage_MainbarAllCourses(value);
  };


  const handleAddToShop = (event) => {
    var index = allCourse.findIndex(item => item.id === event);
    allCourse[index].icon = 'blue';
    setAllCourse([...allCourse]);
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
            myCourses={allCourse ? allCourse : ''}
            currentPage={currentPage_MainbarAllCourses}
            rowsCount={5}
            comFrom={'all'}
            onClick={(courseId) => {
              onConfirmSetter("آیا برای اضافه کردن دوره به سبد خرید خود اطمینان دارید؟",
                () => {
                  setShopCourse(current => [...current, courseId]);
                  handleAddToShop(courseId);
                }, () => {
                  setConfirmPopupOpen(false)
                })
              setConfirmPopupOpen(true)
            }}
          />
        </div>
        <div className="mainbarAllCoursesPaginatin">
          <Paginate
            allItem={allCourse ? allCourse.length : 5}
            eachPageTtem={5}
            handlePagination={handlePagination_MainbarAllCourses}
          />
        </div>
      </div>
    </div>
  );
};

export { MainbarAllCourses };
