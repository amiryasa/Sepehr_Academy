import './DetailCourse.css';
import * as fa from '../../../constants/persianStrings';

const DetailCourse = ( {detailLesson} ) => {
    return (
        <div className='descriptionCourse'>
            <p> {fa.TITLE_DETAIL_COURSE} </p>
            <div>
                <span>{detailLesson.description}</span>
            </div>
            <div>
                <span>{detailLesson.description}</span>
            </div>
            <div>
                <span>{detailLesson.description}</span>
            </div>
        </div>
    );
}

export { DetailCourse }