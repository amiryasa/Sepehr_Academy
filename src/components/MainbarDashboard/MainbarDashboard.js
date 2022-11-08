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
  const [offerItem, setOfferItem] = useState([]);
  const id = JSON.parse(getItem('id'));


  useEffect(() =>{
    getStudentCourses();
  }, [])

  const getStudentCourses = async() => {
    
    if(id){
      const response = await getStudentById(id);
      const response2 = await getAllCourse(id);

      let getMyCourseTitle;
      let getMyCourseId;
      let getStudentCourseCategory;

      if(response.data.result.courses.length > 0){
        getMyCourseTitle = response.data.result.courses.map(item => 
          item.title
        )

        getMyCourseId = response.data.result.courses.map(item => 
          item._id
        )

        getStudentCourseCategory = response.data.result.courses.map(item => 
          item.lesson.topics[0]
        )
      }


      let getAllCourses = response2.data.result.map((item) => ({
        image: item.lesson.image,
        title: item.title,
        teacher: item.teacher.fullName,
        studentCount: item.capacity - item.students.length,
        rate: Math.ceil(Math.random() * (5 - 0) + 0),
        id: item._id,
        category: item.lesson.topics[0],
      }));

      if(response.data.result.courses.length > 0){

        let otherCourses = getAllCourses.filter(item => 
          !(getMyCourseId.includes(item.id))
        )
  
        let otherCoursesWithMyCategory = otherCourses.filter(item => 
          getStudentCourseCategory.includes(item.category)
        )
  
        if(otherCoursesWithMyCategory.length > 4){
          otherCoursesWithMyCategory= otherCoursesWithMyCategory.reverse();
          otherCoursesWithMyCategory= otherCoursesWithMyCategory.slice(0,4);
        }
        else{
          otherCoursesWithMyCategory= otherCoursesWithMyCategory.reverse();
        }
  
        setOfferItem(otherCoursesWithMyCategory);
  
      }
      else{
        getAllCourses = getAllCourses.reverse();
        getAllCourses = getAllCourses.slice(0,4);
        setOfferItem(getAllCourses);
      }
      





      // last added Courses

      if(getMyCourseTitle.length > 3){
        getMyCourseTitle = getMyCourseTitle.reverse();
        getMyCourseTitle = getMyCourseTitle.slice(0,3);
      }

      else{
        getMyCourseTitle = getMyCourseTitle.reverse();
      }

      setActevityItem(getMyCourseTitle);







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

            {offerItem && offerItem.map((item, index) =>(
              <div>
                <CoursesCard
                  image={item.image}
                  bgColor={index % 2 ? "#F3FFF8" : "#F5FCFF"}
                  btnColor="detail"
                  title={item.title}
                  teacher={item.teacher}
                  numberOfStudent={item.studentCount}
                  rateOfCourses={item.rate}
                  id={item.id}
                />
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export { MainbarDashboard };
