import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { trackPromise } from "react-promise-tracker";
import { getItem } from "../../api/storage/storage";
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
  const [token, setToken] = useState('c sha');

  useEffect(() => {
    trackPromise(getCourses());
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
        icon: holder.includes(item._id) ? 'gray' : shoppCourse && shoppCourse.includes(item._id) ? 'blue' : 'green',
      }));

      setAllCourse(...[rightData]);


    }
  }






  const handlePagination_MainbarAllCourses = (e, value) => {
    setCurrentPage_MainbarAllCourses(value);
  };


  const handleAddToShop = (courseId) => {
    var index = allCourse.findIndex(item => item.id === courseId);
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
                  if (shoppCourse && shoppCourse.length > 0) {
                    shoppCourse.map((id) => {
                      if (id === courseId) { toast.error('این دوره قبلا اضافه شده!'); return }

                    })
                    setShopCourse(current => [...current, courseId]);
                    handleAddToShop(courseId);
                  } else {
                    setShopCourse(current => [...current, courseId]);
                    handleAddToShop(courseId);
                    toast.success("دوره با موفقیت به سبد خرید اضافه شد!")
                  }
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
