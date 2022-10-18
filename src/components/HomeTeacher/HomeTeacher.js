import { useContext, useState, useEffect } from "react";

import { GeneralContext } from "../../providers/GeneralContext"
import { TeacherCard } from "../TeacherCard/TeacherCard";
import './HomeTeacher.css';
import * as fa from '../../constants/persianStrings';
import teach01 from './../../assets/images/Teacher/teacher01.png';
import teach02 from './../../assets/images/Teacher/teacher02.png';
import { getLastTeachers } from "../../api/Core/Employe_Manage";

const HomeTeacher = () => {
  const [teachersBest, setTeachersBest] = useState(null)
  const { language, themePage } = useContext(GeneralContext);

  useEffect(() => {
    getTeachers()
  }, [])


  const getTeachers = async () => {
    let response = await getLastTeachers();
    console.log(response.data.result.length);
    if (response.data.result) {
      setTeachersBest(response.data.result.slice(0, 4))
    }
  }

  return (
    <>
      <div className={language === 'fa' ? "homeH2 h25" : "homeH2En h25En"} data-aos="fade-up" data-aos-duration="1000">
        <h2 className={`${themePage}Intro`}> {language === 'fa' ? fa.TITLE_BEST_TEACHER : fa.TITLE_BEST_TEACHER_EN} </h2>
      </div>
      <div className="teacherCantainer">
        {/* <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="800">
          <TeacherCard
            img={teach01}
            name={"دکتر محمد بحرالعلوم"}
            description={
              "مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"
            }
          />
        </div> */}
        {teachersBest && teachersBest.map((item) => (
          <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="800">
            <TeacherCard
              img={item.image}
              name={item.name}
              description={item.discription}
            />
          </div>
        ))}


      </div>
    </>
  );
};

export { HomeTeacher };
