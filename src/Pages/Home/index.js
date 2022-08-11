import * as React from 'react';
import { createTheme } from '@mui/material/styles';

import { BasicButtons } from './../../Component/Button';
import { CatCard } from './../../Component/CatCard/CatCard';
import { NewsCard } from './../../Component/NewsCard/NewsCard';
import { TeacherCard } from './../../Component/TeacherCard/TeacherCard';
import { CoursesCard } from './../../Component/CoursesCard/CoursesCard';
import { Btn } from './../../Component/Button/Btn';
import { Input } from './../../Component/Input/Input';

import "./index.css";

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



const Home = () => {
  const theme = createTheme({
    palette: {
      info: {
        main: '#00ADEF',
        light: '#00ADEF',
        dark: '#2AC4FF',
        contrastText: '#fff',
      },
      goal: {
        main: '#04A641',
        light: '#04A641',
        dark: '#06D152',
        contrastText: '#fff',
      },
    },
  });

  return (
    <>
      <div className="introContainer">
        <h1> آکادمی کدنویسی بحر </h1>
        <hr></hr>
        <p> برای یادگیری کامل و اصولی برنامه‌نویسی به همراه اساتید مجرب، با ما همراه شوید. </p>
        <div className='btn-home'>
          <BasicButtons classes="goalBut" color="goal" theme={theme} size="large" text="شروع یادگیری" />
          <BasicButtons classes="infoBut" color="info" size="large" theme={theme} text="مشاهده دوره‌ها" />
        </div>
      </div>

      <div className="homeH2 h21">
        <h2> خدمات ما </h2>
      </div>
      <div className="servicesCantainer">
        <div> 
        <CatCard 
            img={ser01} 
            fontColor={"#8130FA"} 
            fontToppadding={"10px"}
            title={"مشاوره"}
            height={"205px"}  
            width={"95px"}
            padding={"25px 37px 5px 37px"}
          /> 
        </div>

        <div>
        <CatCard 
            img={ser02} 
            fontColor={"#FFA400"} 
            fontToppadding={"10px"}
            title={"مدرک معتبر"}
            height={"205px"}  
            width={"95px"}
            padding={"25px 37px 5px 37px"}
          /> 
        </div>

        <div>
        <CatCard 
            img={ser03} 
            fontColor={"#FC4760"} 
            fontToppadding={"10px"}
            title={"امتحان"}
            height={"205px"}  
            width={"85px"}
            padding={"25px 42px 5px 42px"}
          /> 
        </div>
        <div>
        <CatCard 
            img={ser04} 
            fontColor={"#4172E5"} 
            fontToppadding={"10px"}
            title={"استخدام"}
            height={"205px"}  
            width={"95px"}
            padding={"25px 37px 5px 37px"}
          /> 
        </div>
      </div>

      <div className="homeH2 h22">
        <h2> دسته‌بندی‌ها </h2>
      </div>
      <div className="categoryCantainer">
        <div> 
          <CatCard 
            img={cat01} 
            fontColor={"#D80101"}
            fontToppadding={"4px"} 
            title={"معماری"}
            width={"54px"}
            padding={"20px 42px 0 42px"}
          /> 
        </div>

        <div> 
        <CatCard 
          img={cat02} 
          fontColor={"#079DAF"}
          fontToppadding={"4px"} 
          title={"فیزیک"}   
          height={"140px"}         
          width={"54px"}
          padding={"20px 42px 0 42px"}
        /> 
        </div>

        <div className="categoryResponsiveDesktop"> </div>
        <div className="categoryResponsiveDesktop"> </div>

        <div> 
        <CatCard 
          img={cat03} 
          fontColor={"#0D6EDF"} 
          fontToppadding={"4px"}
          title={"ریاضی"}    
          height={"140px"}         
          width={"54px"}
          padding={"20px 42px 0 42px"}
        />  
        </div>

        <div> 
        <CatCard 
          img={cat04} 
          fontColor={"#9E07AF"}
          fontToppadding={"4px"} 
          title={"برق"}      
          height={"140px"}       
          width={"54px"}
          padding={"20px 42px 0 42px"}
        /> 
        </div>

        <div> 
        <CatCard 
          img={cat05} 
          fontColor={"#FF8205"} 
          fontToppadding={"4px"}
          title={"کامپیوتر"}  
          height={"140px"}           
          width={"54px"}
          padding={"20px 42px 0 42px"}
        />  
        </div>

        <div className="categoryResponsiveDesktop"> </div>
        <div className="categoryResponsiveDesktop categoryResponsiveTab"> </div>

        <div> 
        <CatCard 
          img={cat06} 
          fontColor={"#FD00EC"}
          fontToppadding={"4px"} 
          title={"بازار سهام"}  
          height={"140px"}           
          width={"54px"}
          padding={"20px 42px 0 42px"}
        />  
        </div>

        <div> 
        <CatCard 
          img={cat07} 
          fontColor={"#06C10C"}
          fontToppadding={"4px"} 
          title={"شیمی"}
          height={"140px"}          
          width={"54px"}
          padding={"20px 42px 0 42px"}
        />  
        </div>

        <div> 
        <CatCard 
          img={cat08} 
          fontColor={"#FFC505"} 
          fontToppadding={"4px"}
          title={"صنعت"}   
          height={"140px"}          
          width={"54px"}
          padding={"20px 42px 0 42px"}
        /> 
        </div>

      </div>

      <div className="homeH2 h23">
        <h2> دوره‌ها </h2>
      </div>
      <div className="courcesCantainer">
        <div> 
          <CoursesCard 
          image={cour03}
          bgColor="#F3FFF8"
          btnColor='detail'
          title={"React native"} 
          teacher={'محمد بحرالعلوم'}
          /> 
        </div>
        <div> 
          <CoursesCard 
            image={cour01}
            bgColor="#F5FCFF"
            btnColor='detail'
            title={"React native"} 
            teacher={'محمد بحرالعلوم'}
          /> 
        </div>
        <div> 
          <CoursesCard 
            image={cour02}
            bgColor="#F3FFF8"
            btnColor='detail'
            title={"React native"} 
            teacher={'محمد بحرالعلوم'}
          />         
        </div>
        <div className="courcesResponsiveTab"> 
          <CoursesCard 
            image={cour01}
            bgColor="#F5FCFF"
            btnColor='detail'
            title={"React native"} 
            teacher={'محمد بحرالعلوم'}
          /> 
        </div>
      </div>

      <div className="homeH2 h24">
        <h2> اخبار و مقالات </h2>
      </div>
      <div className="newsCantainer">
        <div> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"}
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"} 
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div> <NewsCard 
        image={news01} 
        title={"عنوان خبر"} 
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div> <NewsCard 
        image={news01} 
        title={"عنوان خبر"} 
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div className="newsResponsiveTab"> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"}
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div className="newsResponsiveTab"> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"}
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>
      </div>

      <div className="homeH2 h25">
        <h2> اساتید برتر </h2>
      </div>
      <div className="teacherCantainer">
        <div>
          <TeacherCard 
          img={teach01} 
          name={"دکتر محمد بحرالعلوم"}
          description={"مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"}/>
        </div>
        <div>
          <TeacherCard 
          img={teach02}
          name={"دکتر محمد بحرالعلوم"}
          description={"مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"}/>
        </div>
        <div>
          <TeacherCard 
          img={teach01}
          name={"دکتر محمد بحرالعلوم"}
          description={"مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"}/>
        </div>
        <div className='teacherResponsiveTab'>
        <TeacherCard
        img={teach02}
        name={"دکتر محمد بحرالعلوم"}
        description={"مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"}/>
        </div>
      </div>

      <div className="homeH2 h26">
        <h2> انتقادات و پیشنهادات </h2>
      </div>
      <div className="ideaCantainer">
        <div>
          <Input 
          title='نام کاربر'
          />
          <Btn
            color='goal'
            width='124px'
            height='32px' 
            fontSize='13px'
            text='ثبت پیام'
          />
        </div>
      </div>




    </>
  );
};
export { Home };
