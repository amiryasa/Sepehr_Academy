import "./index.css";
import { BasicButtons } from "./../Button/index";
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Intro = () => {

    const theme = createTheme({
        palette: {
          info: {
            main: '#00ADEF',
            light:'#00ADEF',
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

    return(
        <div className="introContainer">


            <h1> آکادمی کدنویسی بحر </h1>
            <hr></hr>
            <p> برای یادگیری کامل و اصولی برنامه‌نویسی به همراه اساتید مجرب، با ما همراه شوید. </p>

            <ThemeProvider theme={theme}>
                <BasicButtons  color="goal" size="large" text="شروع یادگیری"/>
            </ThemeProvider>

            <ThemeProvider theme={theme}>
                <BasicButtons  color="info" size="large" text="مشاهده دوره‌ها"/>
            </ThemeProvider>

        </div>
    )

}

export {Intro};