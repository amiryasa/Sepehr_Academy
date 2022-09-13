import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AOS from "aos";

import {
  Link,
  BrowserRouter,
  Route,
  Routes,
  Navigation,
} from "react-router-dom";

import { Home } from "../screens/home/Home";
import { Header } from "./../components/Header";
import { Footer } from "./../components/Footer";
import { Login } from "../screens/login/Login";
import { Register } from "../screens/register/Register";
import { ForgotPass } from "../screens/forgotPass/ForgotPass";

import "./App.css";
import "./../assets/fonts/fonts.css";
import { CourseDetail } from "../screens/courseDetail";
import { NewsDetail } from "../screens/newsDetail";
import { Courses } from "../screens/courses/Courses";
import { News } from "../screens/news/News";
import { Progress } from "../components/Progress/Progress";
import { HamBeer } from "../components/HamBeer/HamBeer";
import { NotFound } from "../screens/notFound/NotFound";
import { PageLayout } from "../components/pageLayout/PageLayout";
import { StudentPanel } from "../screens/studentPanel/StudentPanel";
import { MainbarEditInfo } from "../components/MainbarEditInfo/MainbarEditInfo";
import { MainbarMyCourses } from "../components/MainbarMyCourses/MainbarMyCourses";
import { MainbarAllCourses } from "../components/MainbarAllCourses/MainbarAllCourses";
import { MainbarPassword } from "../components/MainbarPassword/MainbarPassword";
import { MainbarDashboard } from "../components/MainbarDashboard/MainbarDashboard";
import { Validation } from "../components/common/Validation/Validation";


function App() {
  AOS.init();

  const theme = createTheme({
    direction: "rtl",
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <BrowserRouter>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Routes>
              <Route path="/" element={<PageLayout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgotPass" element={<ForgotPass />} />              
                <Route path="/courses" element={<Courses />} />
                <Route path="/news" element={<News />} />
                <Route path="/courseDetail" element={<CourseDetail />} />
                <Route path="/newsDetail" element={<NewsDetail />} />
              </Route>

              <Route path="/studentPanel" element={<StudentPanel />} >
                <Route index element={<MainbarDashboard />} />
                <Route path="/studentPanel/editInfo" element={<MainbarEditInfo />} />
                <Route path="/studentPanel/myCourses" element={<MainbarMyCourses />} />              
                <Route path="/studentPanel/allCourses" element={<MainbarAllCourses />} />
                <Route path="/studentPanel/changePassword" element={<MainbarPassword />} />
              </Route>

              <Route path="/TEST" element={<Validation />} ></Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </BrowserRouter>
  );
}

export default App;
