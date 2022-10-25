import './DetailCourse.css';
import * as fa from '../../../constants/persianStrings';

const DetailCourse = ( {detailLesson} ) => {
    return (
        <div className='descriptionCourse'>
            <p> {fa.TITLE_DETAIL_COURSE} </p>
            <div>
                <span>{detailLesson.description.split('.')[0]}</span>
            </div>
            <div>
                <span>{detailLesson.description.split('.')[1]}</span>
            </div>
            <div>
                <span>{detailLesson.description.split('.')[2]}</span>
            </div>
        </div>
    );
}

export { DetailCourse }