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



const Home = () => {

  const person ={
    firstName:"reza",
      lastName:"babaei",
      age:25
  }
  
  const {firstName:fn, lastName} = person;
  
  console.log(fn);	
    

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
      </div>

      <div className="homeH2 h21">
        <h2> خدمات ما </h2>
      </div>
      <div className="servicesCantainer">
        <div> 
        <CatCard 
            img={ser01} 
            fontColor={"#8130FA"}
            title={"مشاوره"}
            elementClass='V2'
          /> 
        </div>

        <div>
        <CatCard 
            img={ser02} 
            fontColor={"#FFA400"}
            title={"مدرک معتبر"}
            elementClass='V2'
          /> 
        </div>

        <div>
        <CatCard 
            img={ser03} 
            fontColor={"#FC4760"} 
            title={"امتحان"}
            elementClass='V2'
          /> 
        </div>
        <div>
        <CatCard 
            img={ser04} 
            fontColor={"#4172E5"} 
            title={"استخدام"}
            elementClass='V2'
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
            title={"معماری"}
            elementClass='V1'
          /> 
        </div>

        <div> 
        <CatCard 
          img={cat02} 
          fontColor={"#079DAF"}
          title={"فیزیک"}  
          elementClass='V1' 
        /> 
        </div>

        <div className="categoryResponsiveDesktop"> </div>
        <div className="categoryResponsiveDesktop"> </div>

        <div> 
        <CatCard 
          img={cat03} 
          fontColor={"#0D6EDF"} 
          title={"ریاضی"} 
          elementClass={'V1'}
        />  
        </div>

        <div> 
        <CatCard 
          img={cat04} 
          fontColor={"#9E07AF"}
          title={"برق"}    
          elementClass={'V1'}
        /> 
        </div>

        <div> 
        <CatCard 
          img={cat05} 
          fontColor={"#FF8205"} 
          title={"کامپیوتر"} 
          elementClass='V1' 
        />  
        </div>

        <div className="categoryResponsiveDesktop"> </div>
        <div className="categoryResponsiveDesktop categoryResponsiveTab"> </div>

        <div> 
        <CatCard 
          img={cat06} 
          fontColor={"#FD00EC"} 
          title={"بازار سهام"}
          elementClass='V1' 
        />  
        </div>

        <div> 
        <CatCard 
          img={cat07} 
          fontColor={"#06C10C"}
          title={"شیمی"}
          elementClass='V1'
        />  
        </div>

        <div> 
        <CatCard 
          img={cat08} 
          fontColor={"#FFC505"} 
          title={"صنعت"}   
          elementClass='V1'
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

      <p className="homeMore"> لیست کامل دوره‌ها ...</p>

      <div className="homeH2 h24">
        <h2> اخبار و مقالات </h2>
      </div>
      <div className="newsCantainer">
        <div> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"}
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"} 
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div> <NewsCard 
        image={news01} 
        title={"عنوان خبر"} 
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div> <NewsCard 
        image={news01} 
        title={"عنوان خبر"} 
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div className="newsResponsiveTab"> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"}
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>

        <div className="newsResponsiveTab"> <NewsCard 
        image={news01} 
        title={"عنوان مقاله"}
        description={"توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"}/> 
        </div>
      </div>

      <p className="homeMore"> لیست کامل اخبار و مقالات ...</p>

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
