import { toast } from "react-toastify";
import teacher from "../../../assets/images/Courses/teacher.png";
import price from "../../../assets/images/Courses/price.png";
import timeStart from "../../../assets/images/Courses/timeStart.png";
import student from "../../../assets/images/Courses/student.png";
import opacity from "../../../assets/images/Courses/opacity.png";
import duringCourse from "../../../assets/images/Courses/duringCourse.png";
import { formatDate } from './../../../constants/usefulFunc';
import * as fa from "../../../constants/persianStrings";
import { Progressbar } from "../../Progressbar/Progressbar";
import { Btn } from "../../common/Button/Btn";
import { useContext } from "react";
import { GeneralContext } from "../../../providers/GeneralContext";
import like from "../../../assets/images/CourseDetails/like-mood.png"
import disLike from "../../../assets/images/CourseDetails/dislike-mood.png"
import disLikeAction from "../../../assets/images/CourseDetails/dislike-action.png"
import likeAction from "../../../assets/images/CourseDetails/like-action.png"

import "./CourseDetailClass.css";

const CourseDetailClass = (
  { countLike,
    countDislike,
    actionDislike,
    actionLike,
    AddToShop,
    deatilsCouse,
    detailTeacher,
    detailLesson,
    likeCourses,
    disLikeCourses
  }) => {
  const { setCompairCourse, compairCourse } = useContext(GeneralContext)

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
        <div className="actionsPhoto">
          <div className='photoCourse'>
            <img src={detailLesson.image} />
          </div>
          <div className="likeDislikeCourse">
            <div className="actions like">
              <p>{countLike}</p>
              <img
                src={likeCourses === false ? like : likeAction}
                width={40}
                height={40}
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  actionLike()
                }} />
            </div>
            <div className="actions dislike">
              <p>{countDislike}</p>
              <img
                src={disLikeCourses === false ? disLike : disLikeAction}
                width={40}
                height={40}
                onClick={() => {
                  actionDislike()
                }} />
            </div>
          </div>
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
            onChange={() => {
              AddToShop(deatilsCouse._id)
            }}
          />
          <Btn
            color="info"
            text='مقایسه دوره'
            margin="0 35px 0 0"
            elementClass="largeBtn"
            variant="contained"
            onChange={() => {
              if (compairCourse.length === 2) toast.error("امکان اضافه کردن بیشتر از دو دوره را ندارید.")
              if (compairCourse.length > 0 && compairCourse[0].topic != detailLesson.topics[0]) toast.error("امکان اضافه کردن این دوره وجود ندارد.");
              else {
                const compairData = {
                  id: deatilsCouse._id,
                  topic: detailLesson.topics[0]
                }
                setCompairCourse((prev) => [...prev, (compairData)])
              }
            }}
          />
        </div>
        <div className="CourseDetailClassActionProgressbar">

          <Progressbar
            capacity={deatilsCouse.capacity}
            student={(deatilsCouse.students && deatilsCouse.students.length > 0) ? deatilsCouse.students.length : 0}
            message='ظرفیت باقیمانده'
            size={250}
            type='capacity'
            tooltiveMes={(deatilsCouse.students && deatilsCouse.students.length > 0)
              ? deatilsCouse.capacity - deatilsCouse.students.length :
              deatilsCouse.capacity - 0}
          />
        </div>
      </div>
    </>
  );
};
export { CourseDetailClass };
