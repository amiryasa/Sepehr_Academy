import './DetailCourse.css';
import * as fa from '../../../constants/persianStrings';

const DetailCourse = (props) => {
    return (
        <div className='descriptionCourse'>
            <p> {fa.TITLE_DETAIL_COURSE} </p>
            <div>
                <span>{props.deatils[0].describe}</span>
            </div>
            <div>
                <span>{props.deatils[1].describe}</span>
            </div>
            <div>
                <span>{props.deatils[2].describe}</span>
            </div>
        </div>
    );
}

export { DetailCourse }