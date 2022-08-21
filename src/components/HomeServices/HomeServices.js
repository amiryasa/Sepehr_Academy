import { CatCard } from '../../components/CatCard/CatCard';

import './HomeServices.css'

import ser01 from './../../assets/images/Services/chat.png';
import ser02 from './../../assets/images/Services/trophy.png';
import ser03 from './../../assets/images/Services/test.png';
import ser04 from './../../assets/images/Services/microphone.png';



const HomeServices = () => {

    return (
        <>
            <div className="homeH2 h21" data-aos="fade-up" data-aos-duration="1000">
                <h2> خدمات ما </h2>
            </div>
            <div className="servicesCantainer">
                <div data-aos="flip-right" data-aos-delay="300" data-aos-duration="1000"> 
                    <CatCard 
                        img={ser01} 
                        fontColor={"#8130FA"}
                        title={"مشاوره"}
                        elementClass='V2'
                    /> 
                </div>

                <div data-aos="flip-right" data-aos-delay="800" data-aos-duration="1000">
                    <CatCard 
                        img={ser02} 
                        fontColor={"#FFA400"}
                        title={"مدرک معتبر"}
                        elementClass='V2'
                    /> 
                </div>

                <div data-aos="flip-right" data-aos-delay="1100" data-aos-duration="1000">
                    <CatCard 
                        img={ser03} 
                        fontColor={"#FC4760"} 
                        title={"امتحان"}
                        elementClass='V2'
                    /> 
                </div>
                <div data-aos="flip-right" data-aos-delay="1400" data-aos-duration="1000">
                    <CatCard 
                        img={ser04} 
                        fontColor={"#4172E5"} 
                        title={"استخدام"}
                        elementClass='V2'
                    /> 
                </div>
            </div>
        </>
        );
        
}

export {HomeServices};