import React, { useState } from "react"
import "./MainbarDashboard.css";
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import cour01 from "./../../assets/images/Courses/native.png";
import { CoursesCard } from "../CoursesCard/CoursesCard";
import { Actevity } from "../Actevity/Actevity";

const MainbarDashboard = () => {
  const [value, setValue] = useState(new Date())
  return (
    <div className="MainbarContainer MainbarContainerDashboard">
      <div className="MainbarDashboard">
        <div className="MainbarDashboardActevity">
          <div className="MainbarDashboardActevityTopic">
            <p> آخرین فعالیت‌های کاربر </p>
            <hr></hr>
          </div>

          <div className="MainbarDashboardActevityContainer">
            <div> <Actevity /> </div>
            <div> <Actevity /> </div>
            <div> <Actevity /> </div>
          </div>
        </div>
        <div className="MainbarDashboardDate">
          <Calendar
            value={value}
            onChange={setValue}
            calendar={persian}
            locale={persian_fa}
            readOnly
          />
        </div>
        <div className="MainbarDashboardCourses">
          <div className="MainbarDashboardCoursesTopic">
            <p>دوره‌های پیشنهادی کاربر</p>
            <hr></hr>
          </div>
          <div className="MainbarDashboardCoursesContainer">
            <div>
              <CoursesCard
                image={cour01}
                bgColor="#F5FCFF"
                btnColor="detail"
                title={"React native"}
                teacher={"محمد بحرالعلوم"}
                numberOfStudent="10"
                rateOfCourses="4.3"
              />
            </div>
            <div>
              <CoursesCard
                image={cour01}
                bgColor="#F5FCFF"
                btnColor="detail"
                title={"React native"}
                teacher={"محمد بحرالعلوم"}
                numberOfStudent="10"
                rateOfCourses="4.3"
              />
            </div>
            <div>
              <CoursesCard
                image={cour01}
                bgColor="#F5FCFF"
                btnColor="detail"
                title={"React native"}
                teacher={"محمد بحرالعلوم"}
                numberOfStudent="10"
                rateOfCourses="4.3"
              />
            </div>
            <div>
              <CoursesCard
                image={cour01}
                bgColor="#F5FCFF"
                btnColor="detail"
                title={"React native"}
                teacher={"محمد بحرالعلوم"}
                numberOfStudent="10"
                rateOfCourses="4.3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainbarDashboard };
