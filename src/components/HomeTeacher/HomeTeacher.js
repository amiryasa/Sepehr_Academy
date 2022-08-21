import { TeacherCard } from "../TeacherCard/TeacherCard";

import './HomeTeacher.css';

import teach01 from './../../assets/images/Teacher/teacher01.png';
import teach02 from './../../assets/images/Teacher/teacher02.png';

const HomeTeacher = () => {
  return (
    <>
      <div className="homeH2 h25" data-aos="fade-up" data-aos-duration="1000">
        <h2> اساتید برتر </h2>
      </div>
      <div className="teacherCantainer">
        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="800">
          <TeacherCard
            img={teach01}
            name={"دکتر محمد بحرالعلوم"}
            description={
              "مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"
            }
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="800"
        >
          <TeacherCard
            img={teach02}
            name={"دکتر محمد بحرالعلوم"}
            description={
              "مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"
            }
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="1500"
          data-aos-duration="800"
        >
          <TeacherCard
            img={teach01}
            name={"دکتر محمد بحرالعلوم"}
            description={
              "مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"
            }
          />
        </div>
        <div
          className="teacherResponsiveTab"
          data-aos="fade-right"
          data-aos-delay="2000"
          data-aos-duration="800"
        >
          <TeacherCard
            img={teach02}
            name={"دکتر محمد بحرالعلوم"}
            description={
              "مدیریت آموزشگاه و مدرس دروس کامپیوتر در دانشگاه‌های معتبر شمال کشور"
            }
          />
        </div>
      </div>
    </>
  );
};

export { HomeTeacher };
