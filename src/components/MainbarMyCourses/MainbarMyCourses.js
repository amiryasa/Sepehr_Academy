import { Paginate } from "../common/Pagination/Paginate";
import { TableCom } from "../TableCom/TableCom";
import "./MainbarMyCourses.css";

const MainbarMyCourses = () => {
  return (
    <div className="MainbarContainer MainbarContainerInTable">
    <div className="mainbarCourses">
      <div className="mainbarCoursesTopic">
        <p> دوره‌های من </p>
        <hr></hr>
      </div>
      <div className="mainbarCoursesFilter">  فیلتر فیلتر فیلتر فیلتر فیلتر{" "}
      </div>
      <div className="mainbarCoursesTable"><TableCom /></div>
      <div className="mainbarCoursesPaginatin"><Paginate /></div>
    </div>
    </div>
  );
};

export { MainbarMyCourses };
