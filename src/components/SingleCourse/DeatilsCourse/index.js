import './index.scss';

const DetailCourse = (props) => {
    return (
        <div className='descriptionCourse'>
            <p>توضیحات دوره</p>
            <div>
                <header>{props.deatils[0].name} چیست</header>
                <span>{props.deatils[0].describe}</span>
            </div>
            <div>
                <header>بازار کار{props.deatils[1].name}</header>
                <span>{props.deatils[1].describe}</span>
            </div>
            <div>
                <header>{props.deatils[2].end}</header>
                <span>{props.deatils[2].describe}</span>
            </div>
        </div>
    );
}

export { DetailCourse }