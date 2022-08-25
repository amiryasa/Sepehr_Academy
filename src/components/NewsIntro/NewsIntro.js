
import styles from './NewsIntro.module.css';

const NewsIntro = () => {
    return (
      <div className={styles.newsIntroContainer}>

        <div className={styles.newsIntroContainerDes}>
            <h2> اخبار و مقالات دنیای تکنولوژی </h2>
            <hr></hr>
            <p> با تازه‌‌ترین دستاوردهای دنیای تکنولوژی در بخش اخبار و مقالات آشنا شوید و دانش خود را بروز نمایید.</p>
        </div>

        <div className={styles.newsIntroContainerPic}></div>

      </div>
    );
}

export { NewsIntro };
