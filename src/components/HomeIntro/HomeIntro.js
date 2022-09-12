import { useNavigate } from 'react-router-dom';

import { Btn } from '../../components/common/Button/Btn';
import { Scrool } from '../../components/Scrool/Scrool';

import './HomeIntro.css';

const HomeIntro = () => {

    const navigator = useNavigate();

    return (    
        <div className="introContainer">
            <h1 onClick={() => navigator('/courses')}> آکادمی کدنویسی بحر </h1>
            <hr></hr>
            <p> برای یادگیری کامل و اصولی برنامه‌نویسی به همراه اساتید مجرب، با ما همراه شوید. </p>
            <div className='btn-home'>
                <Btn
                    color='goal'
                    text='شروع یادگیری'
                    elementClass='largeBtn'
                    variant="contained"
                />
                <Btn
                color='info'
                text='مشاهده دوره‌ها'
                margin='0 -65px 0 0'
                elementClass='largeBtn'
                variant="contained"
                click='courses'
                />
            </div>

            <Scrool onClick = {() => console.log('test')}/>
        </div>
    );


}

export {HomeIntro};