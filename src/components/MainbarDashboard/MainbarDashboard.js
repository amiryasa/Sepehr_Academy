import React, { useEffect, useState } from "react"
import "./MainbarDashboard.css";
import CalenderCustom from "../common/datePicker/Calender"
import cour01 from "./../../assets/images/Courses/native.png";
import { CoursesCard } from "../CoursesCard/CoursesCard";
import { Actevity } from "../Actevity/Actevity";
import { Sliderrr } from "../sliderrrr/Sliderrr";
import { getItem } from "../../api/storage/storage";
import { getStudentById } from "../../api/Core/Student_Manage";
import { getAllCourse } from "../../api/Core/Course";

const MainbarDashboard = () => {
  const [actevityItem, setActevityItem] = useState([]);
  const id = JSON.parse(getItem('id'));


  useEffect(() =>{
    getStudentCourses();
  }, [])

  const getStudentCourses = async() => {
    
    if(id){
      const response = await getStudentById(id);
      const response2 = await getAllCourse(id);

      console.log('22222', response.data.result.courses[0].lesson.topics[0]);

      let result = response.data.result.courses.map(item => 
        item.title
      )

      let rightData = response2.data.result.map((item) => ({
        image: item.lesson.image,
        title: item.title,
        teacher: item.teacher.fullName,
        studentCount: item.capacity - item.students.length,
        rate: Math.ceil(Math.random() * (5 - 0) + 0),
        id: item._id,
        category: item.lesson.topics[0],
      }));

      console.log('5555555',rightData);


      if(result.length > 3){
        result = result.reverse();
        result = result.slice(0,3);
      }

      else{
        result = result.reverse();
      }

      setActevityItem(result);


    }
    

  }

  return (
    <div className="MainbarContainer MainbarContainerDashboard">
      <div className="MainbarDashboard">
        <div className="MainbarDashboardActevity">
          <div className="MainbarDashboardActevityTopic">
            <p> آخرین دوره‌های کاربر </p>
            <hr></hr>
          </div>

          <div className="MainbarDashboardActevityContainer">
            {actevityItem.length > 0 ? 
              actevityItem.map(item => 
                
              (
                <div> <Actevity data={item}/> </div>
              ))
            : 
              <p className="emptyCourses">دوره‌ای برای نمایش وجود ندارد!</p>}
           </div>

           {actevityItem.length > 0 ? <Sliderrr data={actevityItem}/> : <p className="emptyCourses02">دوره‌ای برای نمایش وجود ندارد!</p>}
         
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
