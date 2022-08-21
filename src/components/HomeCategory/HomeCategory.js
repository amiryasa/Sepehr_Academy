import { CatCard } from "../CatCard/CatCard";

import './HomeCategory.css';

import cat01 from './../../assets/images/category/arch.png';
import cat02 from './../../assets/images/category/atom.png';
import cat03 from './../../assets/images/category/math.png';
import cat04 from './../../assets/images/category/socket.png';
import cat05 from './../../assets/images/category/mouse.png';
import cat06 from './../../assets/images/category/growth.png';
import cat07 from './../../assets/images/category/chimical.png';
import cat08 from './../../assets/images/category/factory.png';

const HomeCategory = () => {

    return (
        <>
        <div className="homeH2 h22" data-aos="fade-up" data-aos-duration="1000">
            <h2> دسته‌بندی‌ها </h2>
        </div>
        <div className="categoryCantainer">
            <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="800"> 
                <CatCard 
                    img={cat01} 
                    fontColor={"#D80101"}
                    title={"معماری"}
                    elementClass='V1'
                /> 
            </div>

            <div data-aos="zoom-in" data-aos-delay="800" data-aos-duration="800"> 
                <CatCard 
                img={cat02} 
                fontColor={"#079DAF"}
                title={"فیزیک"}  
                elementClass='V1' 
                /> 
            </div>

            <div className="categoryResponsiveDesktop"> </div>
            <div className="categoryResponsiveDesktop"> </div>

            <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="800"> 
                <CatCard 
                img={cat03} 
                fontColor={"#0D6EDF"} 
                title={"ریاضی"} 
                elementClass={'V1'}
                />  
            </div>

            <div data-aos="zoom-in" data-aos-delay="800" data-aos-duration="800"> 
                <CatCard 
                img={cat04} 
                fontColor={"#9E07AF"}
                title={"برق"}    
                elementClass={'V1'}
                /> 
            </div>

            <div data-aos="zoom-in" data-aos-delay="1100" data-aos-duration="800"> 
                <CatCard 
                img={cat05} 
                fontColor={"#FF8205"} 
                title={"کامپیوتر"} 
                elementClass='V1' 
                />  
            </div>

            <div className="categoryResponsiveDesktop"> </div>
            <div className="categoryResponsiveDesktop categoryResponsiveTab"> </div>

            <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="800"> 
                <CatCard 
                img={cat06} 
                fontColor={"#FD00EC"} 
                title={"بازار سهام"}
                elementClass='V1' 
            />  
            </div>

            <div data-aos="zoom-in" data-aos-delay="800" data-aos-duration="800"> 
                <CatCard 
                img={cat07} 
                fontColor={"#06C10C"}
                title={"شیمی"}
                elementClass='V1'
                />  
            </div>

            <div data-aos="zoom-in" data-aos-delay="1100" data-aos-duration="800"> 
                <CatCard 
                img={cat08} 
                fontColor={"#FFC505"} 
                title={"صنعت"}   
                elementClass='V1'
                /> 
            </div>

        </div>
      </>
      );
    
}

export { HomeCategory };