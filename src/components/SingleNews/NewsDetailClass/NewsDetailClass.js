import teacher from '../../../assets/images/News/teacher.png'
import articlType from '../../../assets/images/News/type.png'
import articlDate from '../../../assets/images/News/event.png'
import reactNewsSingle from '../../../assets/images/News/newsBg.png';
import "./NewsDetailClass.css"
import * as fa from '../../../constants/persianStrings';


const NewsDetailClass = ({ detailsNews }) => {

    return (<div className='aboutNews'>
        <div className='informNews'>
            <p> {detailsNews.title}  </p>
            <hr></hr>
            <div className='information'>
                <div className='teacher'>
                    <img src={teacher} />
                    <span>دکتر محمدبحرالعلوم</span>
                </div>
                <div className='opacity'>
                    <img src={articlType} />
                    <span> دسته‌بندی:
                        <span>{detailsNews.category === 'news' ? 'اخبار' : 'مقالات'}</span>
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
            <img src={detailsNews.image} />
        </div>
    </div>)
}
export { NewsDetailClass }