import React from "react"
import "./MainbarDashboard.css";
import CalenderCustom from "../common/datePicker/Calender"
import cour01 from "./../../assets/images/Courses/native.png";
import { CoursesCard } from "../CoursesCard/CoursesCard";
import { Actevity } from "../Actevity/Actevity";
import { Sliderrr } from "../sliderrrr/Sliderrr";

const MainbarDashboard = () => {

  console.log(window.innerWidth);

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
          <Sliderrr />
        </div>
        <div className="MainbarDashboardDate">
          <CalenderCustom
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
