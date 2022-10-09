import { CatCard } from '../../components/CatCard/CatCard';
import { useContext } from "react";
import './HomeServices.css'

import ser01 from './../../assets/images/Services/chat.png';
import ser02 from './../../assets/images/Services/trophy.png';
import ser03 from './../../assets/images/Services/test.png';
import ser04 from './../../assets/images/Services/microphone.png';
import * as fa from '../../constants/persianStrings'
import { GeneralContext } from "../../providers/GeneralContext"

const HomeServices = () => {
    const { language,themePage } = useContext(GeneralContext);
    return (
        <>
            <div className={language === 'fa' ? "homeH2 h21" : "homeH2En h21En"} data-aos="fade-up" data-aos-duration="1000">
                <h2 className={`${themePage}Intro`}> {language === 'fa' ? fa.TITLE_SERVICES : fa.TITLE_SERVICES_EN} </h2>
            </div>
            <div className="servicesCantainer">
                <div data-aos="flip-right" data-aos-delay="300" data-aos-duration="1000">
                    <CatCard
                        img={ser01}
                        fontColor={"#8130FA"}
                        title={language === 'fa' ? fa.COUNSELING : fa.COUNSELING_EN}
                        elementClass='V2'
                    />
                </div>

                <div data-aos="flip-right" data-aos-delay="800" data-aos-duration="1000">
                    <CatCard
                        img={ser02}
                        fontColor={"#FFA400"}
                        title={language === 'fa' ? fa.DEGREE : fa.DEGREE_EN}
                        elementClass='V2'
                    />
                </div>

                <div data-aos="flip-right" data-aos-delay="1100" data-aos-duration="1000">
                    <CatCard
                        img={ser03}
                        fontColor={"#FC4760"}
                        title={language === 'fa' ? fa.EXAM : fa.EXAM_EN}
                        elementClass='V2'
                    />
                </div>
                <div data-aos="flip-right" data-aos-delay="1400" data-aos-duration="1000">
                    <CatCard
                        img={ser04}
                        fontColor={"#4172E5"}
                        title={language === 'fa' ? fa.HIRING : fa.HIRING_EN}
                        elementClass='V2'
                    />
                </div>
            </div>
        </>
    );

}

export { HomeServices };