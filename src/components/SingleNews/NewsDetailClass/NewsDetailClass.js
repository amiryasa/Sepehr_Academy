import teacher from '../../../assets/images/News/teacher.png'
import articlType from '../../../assets/images/News/type.png'
import articlDate from '../../../assets/images/News/event.png'
import reactNewsSingle from '../../../assets/images/News/newsBg.png';
import "./NewsDetailClass.css"
import * as fa from '../../../constants/persianStrings';

const NewsDetailClass = () => {
    return (<div className='aboutNews'>
        <div className='informNews'>
            <p> آشنایی با کتابخانه‌ی قدرتمند React  </p>
            <hr></hr>
            <div className='information'>
                <div className='teacher'>
                    <img src={teacher} />
                    <span>دکتر محمدبحرالعلوم</span>
                </div>
                <div className='opacity'>
                    <img src={articlType} />
                    <span> دسته‌بندی:
                        <span>مقاله</span>
                    </span>
                </div>
                <div className=' numberStudent'>
                    <img src={articlDate} />
                    <span>تاریخ انتشار:
                        <span>12 شهریور 1401</span>
                    </span>
                </div>
            </div>
        </div>
        <div className='photoNews'>
            <img src={reactNewsSingle} />
            <span className='offNews'>
                <span className='offCount'>افزایش دانش</span>
                <span className='offTitle'>اطلاعات و آگاهی</span>
            </span>
        </div>
    </div>)
}
export { NewsDetailClass }