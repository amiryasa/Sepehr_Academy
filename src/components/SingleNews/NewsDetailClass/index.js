import teacher from '../../../assets/images/Courses/teacher.png'
import student from '../../../assets/images/Courses/student.png'
import opacity from '../../../assets/images/Courses/opacity.png'
import reactSingle from '../../../assets/images/Courses/reactSingle.png'
import "./index.scss"
import * as fa from '../../../constants/persianStrings';

const NewsDetailClass = () => {
    return (<div className='aboutNews'>
        <div className='informNews'>
            <p> دوره کامل آموزش  React JS  </p>
            <hr></hr>
            <div className='information'>
                <div className='teacher'>
                    <img src={teacher} />
                    <span>دکتر محمدبحرالعلوم</span>
                </div>
                <div className='opacity'>
                    <img src={opacity} />
                    <span> {fa.OPACITY_COURSE}
                        <span>40 نفر</span>
                    </span>
                </div>
                <div className=' numberStudent'>
                    <img src={student} />
                    <span>{fa.NUMBER_STUDENT}
                        <span>23 نفر</span>
                    </span>
                </div>
            </div>
        </div>
        <div className='photoNews'>
            <img src={reactSingle} />
            <span className='offNews'>
                <span className='offCount'>افزایش دانش</span>
                <span className='offTitle'>اطلاعات و آگاهی</span>
            </span>
        </div>
    </div>)
}
export { NewsDetailClass }