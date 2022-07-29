import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { BasicButtons } from "../../Component/Button";
import "./index.css";

const Home = () => {
  const theme = createTheme({
    palette: {
      info: {
        main: '#00ADEF',
        light: '#00ADEF',
        dark: '#0189BD',
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
        <BasicButtons color="goal" theme={theme} size="large" text="شروع یادگیری" />
        <BasicButtons color="info" size="large" theme={theme} text="مشاهده دوره‌ها" />
      </div>
    </>
  );
};
export { Home };
