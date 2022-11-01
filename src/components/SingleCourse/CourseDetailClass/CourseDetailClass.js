import teacher from "../../../assets/images/Courses/teacher.png";
import price from "../../../assets/images/Courses/price.png";
import timeStart from "../../../assets/images/Courses/timeStart.png";
import student from "../../../assets/images/Courses/student.png";
import opacity from "../../../assets/images/Courses/opacity.png";
import duringCourse from "../../../assets/images/Courses/duringCourse.png";

import { formatDate } from './../../../constants/usefulFunc';

import "./CourseDetailClass.css";
import * as fa from "../../../constants/persianStrings";
import { Progressbar } from "../../Progressbar/Progressbar";
import { Btn } from "../../common/Button/Btn";

const CourseDetailClass = ({ deatilsCouse, detailTeacher, detailLesson }) => {

  return (
    <>
      <div className='aboutCourse'>
        <div className='informCourse'>
          <p> {deatilsCouse.title} </p>
          <hr></hr>
          <div className='information'>
            <div className='teacher'>
              <img src={teacher} />
              <span> {detailTeacher.fullName} </span>
            </div>
            <div className='duringCourse'>
              <img src={duringCourse} />
              <span>{fa.DURING_COURSE}
                <span>05:30 (17 ویدئو)</span>
              </span>
            </div>
            <div className='opacity'>
              <img src={opacity} />
              <span>{fa.OPACITY_COURSE}
                <span>{deatilsCouse.capacity} نفر</span>
              </span>
            </div>
            <div className=' numberStudent'>
              <img src={student} />
              <span>{fa.NUMBER_STUDENT}
                <span>{(deatilsCouse.students && deatilsCouse.students.length > 0) ? `${deatilsCouse.students.length} نفر` : "فاقد دانشجو"} </span>
              </span>
            </div>
            <div className='timeStart'>
              <img src={timeStart} />
              <span>{fa.TIME_START}
                <span> {formatDate(deatilsCouse.startDate)} </span>
              </span>
            </div>
            <div className='price'>
              <img src={price} />
              <span>{fa.PRICE_COURSE}
                <span>{deatilsCouse.cost > 0 ? `${deatilsCouse.cost} ت` : 'دوره رایگان!'} </span>
              </span>
            </div>
          </div>
        </div>
        <div className='photoCourse'>
          <img src={detailLesson.image} />
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
          <Progressbar capacity={deatilsCouse.capacity} student={(deatilsCouse.students && deatilsCouse.students.length > 0) ? deatilsCouse.students.length : 0} message='ظرفیت باقیمانده' size={250} type='capacity' tooltiveMes={(deatilsCouse.students && deatilsCouse.students.length > 0) ? deatilsCouse.capacity - deatilsCouse.students.length : deatilsCouse.capacity - 0} />
        </div>
      </div>
    </>
  );
};
export { CourseDetailClass };
