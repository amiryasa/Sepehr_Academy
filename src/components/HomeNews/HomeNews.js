import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { NewsCard } from "../NewsCard/NewsCard";

import './HomeNews.css';
import { GeneralContext } from "../../providers/GeneralContext"
import news01 from './../../assets/images/News/news01.png';
import * as fa from '../../constants/persianStrings';

const HomeNews = () => {
  const { language,themePage } = useContext(GeneralContext);
  const navigator = useNavigate();

  return (
    <>
      <div className={language === 'fa' ? "homeH2 h24" : "homeH2En h24En"} data-aos="fade-up" data-aos-duration="1000">
        <h2 className={`${themePage}Intro`}> {language === 'fa' ? fa.TITLE_NEWS_HOME : fa.TITLE_NEWS_HOME_EN} </h2>
      </div>
      <div className="newsCantainer">
        <div data-aos="flip-up" data-aos-delay="400" data-aos-duration="800">
          {" "}
          <NewsCard
            image={news01}
            title={language === 'fa' ? fa.ATRICHE_TITLE : fa.ATRICHE_TITLE_EN}
            description={
              "توضیحات توضیحات توضیحات توضیحات توضیحات ..."
            }
          />
        </div>

        <div data-aos="flip-up" data-aos-delay="400" data-aos-duration="800">
          {" "}
          <NewsCard
            image={news01}
            title={language === 'fa' ? fa.ATRICHE_TITLE : fa.ATRICHE_TITLE_EN}

            description={
              "توضیحات توضیحات توضیحات توضیحات توضیحات ..."
            }
          />
        </div>

        <div data-aos="flip-up" data-aos-delay="800" data-aos-duration="800">
          {" "}
          <NewsCard
            image={news01}
            title={language === 'fa' ? fa.ATRICHE_TITLE : fa.ATRICHE_TITLE_EN}

            description={
              "توضیحات توضیحات توضیحات توضیحات توضیحات ..."
            }
          />
        </div>

        <div data-aos="flip-up" data-aos-delay="800" data-aos-duration="800">
          {" "}
          <NewsCard
            image={news01}
            title={language === 'fa' ? fa.ATRICHE_TITLE : fa.ATRICHE_TITLE_EN}

            description={
              "توضیحات توضیحات توضیحات توضیحات توضیحات ..."
            }
          />
        </div>

        <div
          className="newsResponsiveTab"
          data-aos="flip-up"
          data-aos-delay="1200"
          data-aos-duration="800"
        >
          {" "}
          <NewsCard
            image={news01}
            title={language === 'fa' ? fa.ATRICHE_TITLE : fa.ATRICHE_TITLE_EN}

            description={
              "توضیحات توضیحات توضیحات توضیحات توضیحات ..."
            }
          />
        </div>

        <div
          className="newsResponsiveTab"
          data-aos="flip-up"
          data-aos-delay="1200"
          data-aos-duration="800"
        >
          {" "}
          <NewsCard
            image={news01}
            title={language === 'fa' ? fa.ATRICHE_TITLE : fa.ATRICHE_TITLE_EN}

            description={
              "توضیحات توضیحات توضیحات توضیحات توضیحات ..."
            }
          />
        </div>
      </div>

      <p className="homeMore" onClick={() => navigator('/news')}>  {language === 'fa' ? fa.MORE_NEWS : fa.MORE_NEWS_EN}</p>
    </>
  );
};

export { HomeNews };
