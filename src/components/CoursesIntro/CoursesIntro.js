
import styles from './CoursesIntro.module.css';

const CoursesIntro = () => {
  return (
    <div className={styles.coursesIntroContainer}>

  
        <div className={styles.coursesIntroContainerDes}>
          <h2> دوره‌های برنامه نویسی آموزشگاه </h2>
          <hr></hr>
          <p> با تازه‌‌ترین دستاوردهای دنیای تکنولوژی در بخش اخبار و مقالات آشنا شوید و دانش خود را بروز نمایید.</p>
        </div>

        <div className={styles.coursesIntroContainerPic}></div>
      

    </div>
  );
}

export { CoursesIntro };
