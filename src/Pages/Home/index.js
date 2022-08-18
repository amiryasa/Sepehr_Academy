import * as React from 'react';

import { CatCard } from './../../Component/CatCard/CatCard';
import { NewsCard } from './../../Component/NewsCard/NewsCard';
import { TeacherCard } from './../../Component/TeacherCard/TeacherCard';
import { CoursesCard } from './../../Component/CoursesCard/CoursesCard';
import { Btn } from './../../Component/Button/Btn';
import { Input } from './../../Component/Input/Input';

import "./index.scss";
import './../../Fonts/fonts.css';

import cat01 from './../../Images/category/arch.png';
import cat02 from './../../Images/category/atom.png';
import cat03 from './../../Images/category/math.png';
import cat04 from './../../Images/category/socket.png';
import cat05 from './../../Images/category/mouse.png';
import cat06 from './../../Images/category/growth.png';
import cat07 from './../../Images/category/chimical.png';
import cat08 from './../../Images/category/factory.png';

import ser01 from './../../Images/Services/chat.png';
import ser02 from './../../Images/Services/trophy.png';
import ser03 from './../../Images/Services/test.png';
import ser04 from './../../Images/Services/microphone.png';

import cour01 from './../../Images/Courses/native.png';
import cour02 from './../../Images/Courses/html.png';
import cour03 from './../../Images/Courses/react.png';

import news01 from './../../Images/News/news01.png';

import teach01 from './../../Images/Teacher/teacher01.png';
import teach02 from './../../Images/Teacher/teacher02.png';
import { Scrool } from '../../Component/Scrool/Scrool';



const Home = () => {
    
  return (
    <div className="home">
      <div className="introContainer">
        <h1> آکادمی کدنویسی بحر </h1>
        <hr></hr>
        <p> برای یادگیری کامل و اصولی برنامه‌نویسی به همراه اساتید مجرب، با ما همراه شوید. </p>
        <div className='btn-home'>
        <Btn
            color='goal'
            text='شروع یادگیری'
            elementClass='largeBtn'
          />
        <Btn
          color='info'
          text='مشاهده دوره‌ها'
          margin='0 -65px 0 0'
          elementClass='largeBtn'
        />
        </div>

        <Scrool />
      </div>



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

      <div className="homeH2 h23" data-aos="fade-up" data-aos-duration="1000">
        <h2> دوره‌ها </h2>
      </div>
      <div className="courcesCantainer">
        <div data-aos="fade-left"  data-aos-delay="500" data-aos-duration="800"> 
          <CoursesCard 
          image={cour03}
          bgColor="#F3FFF8"
          btnColor='detail'
          title={"React native"} 
          teacher={'محمد بحرالعلوم'}
          /> 
        </div>
        <div  data-aos="fade-left"  data-aos-delay="1000" data-aos-duration="800"> 
          <CoursesCard 
            image={cour01}
            bgColor="#F5FCFF"
            btnColor='detail'
            title={"React native"} 
            teacher={'محمد بحرالعلوم'}
          /> 
        </div>
        <div  data-aos="fade-left" data-aos-delay="1500" data-aos-duration="800"> 
          <CoursesCard 
            image={cour02}
            bgColor="#F3FFF8"
            btnColor='detail'
            title={"React native"} 
            teacher={'محمد بحرالعلوم'}
          />         
        </div>
        <div className="courcesResponsiveTab"  data-aos="fade-left" data-aos-delay="2000" data-aos-duration="800"> 
          <CoursesCard 
            image={cour01}
            bgColor="#F5FCFF"
            btnColor='detail'
            title={"React native"} 
            teacher={'محمد بحرالعلوم'}
          /> 
        </div>
      </div>

      <p className="homeMore"> لیست کامل دوره‌ها ...</p>

      <div className="homeH2 h24" data-aos="fade-up" data-aos-duration="1000">
        <h2> اخبار و مقالات </h2>
      </div>
      <div className="newsCantainer">
        <div data-aos="flip-up"  data-aos-delay="400" data-aos-duration="800"> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"}
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div  data-aos="flip-up"  data-aos-delay="400" data-aos-duration="800"> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"} 
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div  data-aos="flip-up"  data-aos-delay="800" data-aos-duration="800"> <NewsCard 
        image={news01} 
        title={"عنوان خبر"} 
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div data-aos="flip-up"  data-aos-delay="800" data-aos-duration="800"> <NewsCard 
        image={news01} 
        title={"عنوان خبر"} 
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div className="newsResponsiveTab" data-aos="flip-up"  data-aos-delay="1200" data-aos-duration="800"> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"}
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div className="newsResponsiveTab" data-aos="flip-up"  data-aos-delay="1200" data-aos-duration="800"> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"}
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>
      </div>

      <p className="homeMore"> لیست کامل اخبار و مقالات ...</p>

      <div className="homeH2 h25" data-aos="fade-up" data-aos-duration="1000">
        <h2> اساتید برتر </h2>
      </div>
      <div className="teacherCantainer">
        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="800">
          <TeacherCard 
          img={teach01} 
          name={"دکتر محمد بحرالعلوم"}
          description={"مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"}/>
        </div>
        <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="800">
          <TeacherCard 
          img={teach02}
          name={"دکتر محمد بحرالعلوم"}
          description={"مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"}/>
        </div>
        <div data-aos="fade-right" data-aos-delay="1500" data-aos-duration="800">
          <TeacherCard 
          img={teach01}
          name={"دکتر محمد بحرالعلوم"}
          description={"مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"}/>
        </div>
        <div className='teacherResponsiveTab' data-aos="fade-right" data-aos-delay="2000" data-aos-duration="800">
        <TeacherCard
        img={teach02}
        name={"دکتر محمد بحرالعلوم"}
        description={"مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"}/>
        </div>
      </div>

      <div className="homeH2 h26" data-aos="fade-up" data-aos-duration="1000">
        <h2> انتقادات و پیشنهادات </h2>
      </div>
      <div className="ideaCantainer">
        <div className="ideaInput">
          <Input 
          title='نام کاربر'
          margin='25px 24px 0 24px'
          width='236px'
          />
          <Input 
          title='ایمیل کاربر'
          margin='33px 24px 0 24px'
          width='236px'
          />
          <Input 
          title='متن پیام'
          margin='33px 24px 0 24px'
          width='236px'
          multiline = {true}
          row={4}
          />
          <Btn
            color='goal'
            text='ثبت پیام'
            margin='32px 84px 84px 18px'
            elementClass='smallBtn'
          />
        </div>
      </div>

    </div>
  );
};
export { Home };
