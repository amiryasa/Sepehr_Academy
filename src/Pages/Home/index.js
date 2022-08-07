import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { BasicButtons } from "../../Component/Button";
import { CatCard } from "./../../Component/CatCard/CatCard";

import "./index.css";

import cat01 from './../../Images/category/arch.png';
import cat02 from './../../Images/category/atom.png';
import cat03 from './../../Images/category/math.png';
import cat04 from './../../Images/category/socket.png';
import cat05 from './../../Images/category/mouse.png';
import cat06 from './../../Images/category/growth.png';
import cat07 from './../../Images/category/chimical.png';
import cat08 from './../../Images/category/factory.png';


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

      <div className="categoryCantainer">
        <div> <CatCard img={cat01} title={"معماری"}/> </div>
        <div> <CatCard img={cat02} title={"فیزیک"}/> </div>
        <div className="categoryResponsiveDesktop"> </div>
        <div className="categoryResponsiveDesktop"> </div>
        <div> <CatCard img={cat03} title={"ریاضی"}/> </div>
        <div> <CatCard img={cat04} title={"برق"}/> </div>
        <div> <CatCard img={cat05} title={"کامپیوتر"}/> </div>
        <div className="categoryResponsiveDesktop"> </div>
        <div className="categoryResponsiveDesktop categoryResponsiveTab"> </div>
        <div> <CatCard img={cat06} title={"بازار سهام"}/> </div>
        <div> <CatCard img={cat07} title={"شیمی"}/> </div>
        <div> <CatCard img={cat08} title={"صنعت"}/> </div>
      </div>


    </>
  );
};
export { Home };
