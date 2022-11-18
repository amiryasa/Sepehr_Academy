import { useContext, useState, useEffect } from "react";
import { trackPromise } from "react-promise-tracker";
import { GeneralContext } from "../../providers/GeneralContext"
import { TeacherCard } from "../TeacherCard/TeacherCard";
import * as fa from '../../constants/persianStrings';
import { getAllTeachers } from "../../api/Core/Employe_Manage";
import { DescriptionTeacher } from "../../constants/staticData"
import './HomeTeacher.css';

const HomeTeacher = () => {
  const [teachersBest, setTeachersBest] = useState(null)
  const { language, themePage } = useContext(GeneralContext);

  useEffect(() => {
    trackPromise(getTeachers())
  }, [])


  const getTeachers = async () => {
    let response = await getAllTeachers();
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

        {teachersBest && teachersBest.map((item, key) => (
          <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="800" key={key}>
            <TeacherCard
              img={item.profile}
              name={item.fullName}
              description={DescriptionTeacher[key]}
            />
          </div>
        ))}


      </div>
    </>
  );
};

export { HomeTeacher };
