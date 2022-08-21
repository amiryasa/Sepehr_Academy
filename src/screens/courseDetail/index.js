import './index.scss'

const CourseDetail = () => {

    return (
        <>
            <div className='aboutCourse'>
                <div className='informCourse'>
                    <h2> دوره کامل آموزش  React JS  </h2>
                    <div className='information'>
                        <div className='teacher'></div>
                        <div className='opacity'></div>
                        <div className='timeStart'></div>
                        <div className='duringCourse'></div>
                        <div className='numberStudent'></div>
                        <div className='price'></div>
                    </div>
                </div>
                <div className='photoCourse'></div>
            </div>
            <div className='descriptionCourse'></div>
            <div className='comments'></div>

        </>
    );
}
export { CourseDetail }