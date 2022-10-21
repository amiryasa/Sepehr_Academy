import teacher from '../../../assets/images/Courses/teacher.png'
import price from '../../../assets/images/Courses/price.png'
import timeStart from '../../../assets/images/Courses/timeStart.png'
import student from '../../../assets/images/Courses/student.png'
import opacity from '../../../assets/images/Courses/opacity.png'
import duringCourse from '../../../assets/images/Courses/duringCourse.png'
import reactSingle from '../../../assets/images/Courses/reactSingle.png'
import "./CourseDetailClass.css"
import * as fa from '../../../constants/persianStrings'

const CourseDetailClass = ({ deatilsCouse, detailTeacher, detailLesson }) => {

    return (
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
                            <span>{deatilsCouse.student && deatilsCouse.students.length} نفر</span>
                        </span>
                    </div>
                    <div className='timeStart'>
                        <img src={timeStart} />
                        <span>{fa.TIME_START}
                            <span> {deatilsCouse.startDate.split("T")[0]} </span>
                        </span>
                    </div>
                    <div className='price'>
                        <img src={price} />
                        <span>{fa.PRICE_COURSE}
                            <span>{deatilsCouse.cost} </span>
                            تومان
                        </span>
                    </div>
                </div>
            </div>
            <div className='photoCourse'>
                <img src={detailLesson.image} />
                <span className='offCourse'>
                    <span className='offCount'>25%</span>
                    <span className='offTitle'> {fa.OFF_COURSE} </span>
                </span>
            </div>
        </div>
    )
}
export { CourseDetailClass }