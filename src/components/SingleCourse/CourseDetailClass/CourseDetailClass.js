import teacher from "../../../assets/images/Courses/teacher.png";
import price from "../../../assets/images/Courses/price.png";
import timeStart from "../../../assets/images/Courses/timeStart.png";
import student from "../../../assets/images/Courses/student.png";
import opacity from "../../../assets/images/Courses/opacity.png";
import duringCourse from "../../../assets/images/Courses/duringCourse.png";
import reactSingle from "../../../assets/images/Courses/reactSingle.png";
import "./CourseDetailClass.css";
import * as fa from "../../../constants/persianStrings";
import { Progressbar } from "../../Progressbar/Progressbar";
import { Btn } from "../../common/Button/Btn";

const CourseDetailClass = () => {
  return (
    <>
      <div className="aboutCourse">
        <div className="informCourse">
          <p> دوره کامل آموزش React JS </p>
          <hr></hr>
          <div className="information">
            <div className="teacher">
              <img src={teacher} />
              <span>دکتر محمدبحرالعلوم</span>
            </div>
            <div className="duringCourse">
              <img src={duringCourse} />
              <span>
                {fa.DURING_COURSE}
                <span>05:30 (17 ویدئو)</span>
              </span>
            </div>
            <div className="opacity">
              <img src={opacity} />
              <span>
                {fa.OPACITY_COURSE}
                <span>40 نفر</span>
              </span>
            </div>
            <div className=" numberStudent">
              <img src={student} />
              <span>
                {fa.NUMBER_STUDENT}
                <span>23 نفر</span>
              </span>
            </div>
            <div className="timeStart">
              <img src={timeStart} />
              <span>
                {fa.TIME_START}
                <span>12 شهریور 1401</span>
              </span>
            </div>
            <div className="price">
              <img src={price} />
              <span>
                {fa.PRICE_COURSE}
                <span>500,000 </span>
                تومان
              </span>
            </div>
          </div>
        </div>
        <div className="photoCourse">
          <img src={reactSingle} />
          <span className="offCourse">
            <span className="offCount">25%</span>
            <span className="offTitle"> {fa.OFF_COURSE} </span>
          </span>
        </div>
      </div>

      <div className="CourseDetailClassActionContainer">
        <div className="CourseDetailClassActionButton">
          {" "}
          <Btn
            color="goal"
            text='افزودن به سبد'
            elementClass="largeBtn"
            variant="contained"
          />
          <Btn
            color="info"
            text='مقایسه دوره'
            margin="0 35px 0 0"
            elementClass="largeBtn"
            variant="contained"
            click=""
          />
        </div>
        <div className="CourseDetailClassActionProgressbar">
          <Progressbar capacity={47}/>
        </div>
      </div>
    </>
  );
};
export { CourseDetailClass };
