import { Paginate } from "../common/Pagination/Paginate";
import { TableCom } from "../TableCom/TableCom";
import "./MainbarAllCourses.css";

const MainbarAllCourses = () => {
  return (
    <div className="MainbarContainerInTable">
    <div className="mainbarAllCourses">
      <div className="mainbarAllCoursesTopic">
        <p> لیست دوره‌ها </p>
        <hr></hr>
      </div>
      <div className="mainbarAllCoursesFilter">  فیلتر فیلتر فیلتر فیلتر فیلتر{" "}
      </div>
      <div className="mainbarAllCoursesTable"><TableCom /></div>
      <div className="mainbarAllCoursesPaginatin"><Paginate /></div>
    </div>
    </div>
  );
};

export { MainbarAllCourses };
