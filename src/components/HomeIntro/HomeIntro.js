import { useContext } from "react";
import { Btn } from '../../components/common/Button/Btn';
import { Scrool } from '../../components/Scrool/Scrool';
import * as fa from "../../constants/persianStrings";
import { GeneralContext } from "../../providers/GeneralContext"

import './HomeIntro.css';

const HomeIntro = () => {
    const { language } = useContext(GeneralContext);

    return (
        <div className={language === 'fa' ? "introContainer" : "introContainerEn"}>
            <h1> {language === 'fa' ? fa.TITLE_HOME_PAGE : fa.TITLE_HOME_PAGE_EN}</h1>
            <hr></hr>
            <p> {language === 'fa' ? fa.MAIN_HOME_INTRO : fa.MAIN_HOME_INTRO_EN} </p>
            <div className='btn-home'>
                <Btn
                    color='goal'
                    text={language === 'fa' ? fa.START_LEARN : fa.START_LEARN_EN}
                    elementClass='largeBtn'
                    variant="contained"
                />
                <Btn
                    color='info'
                    text={language === 'fa' ? fa.SHOW_COURSE : fa.SHOW_COURSE_EN}
                    margin='0 -65px 0 0'
                    elementClass='largeBtn'
                    variant="contained"
                    click='courses'
                />
            </div>

            <Scrool onClick={() => console.log('test')} />
        </div>
    );


}

export { HomeIntro };