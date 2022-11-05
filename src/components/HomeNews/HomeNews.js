import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from "react";
import { NewsCard } from "../NewsCard/NewsCard";

import './HomeNews.css';
import { GeneralContext } from "../../providers/GeneralContext"
import * as fa from '../../constants/persianStrings';
import { getAllNews } from "../../api/Core/News"

const HomeNews = () => {
  const [newsData, setNewsData] = useState(null)
  const { language, themePage } = useContext(GeneralContext);
  const navigator = useNavigate();

  useEffect(() => {
    showAllNews()
  }, [])

  const showAllNews = async () => {
    let response = await getAllNews();

    if (response.data.result) {
      setNewsData(response.data.result.slice(0, 6))
    }
  }

  return (
    <>
      <div className={language === 'fa' ? "homeH2 h24" : "homeH2En h24En"} data-aos="fade-up" data-aos-duration="1000">
        <h2 className={`${themePage}Intro`}> {language === 'fa' ? fa.TITLE_NEWS_HOME : fa.TITLE_NEWS_HOME_EN} </h2>
      </div>
      <div className="newsCantainer">
        {newsData != null && newsData.map((item) => (
          <div data-aos="flip-up" data-aos-delay="400" data-aos-duration="800">
            {" "}
            <NewsCard
              image={item.image}
              title={item.title}
              description={item.text}
              category={item.category === 'news' ? 'دسته‌بندی:   اخبار' : 'دسته‌بندی:   مقالات'}
            />
          </div>
        ))}
        {/* <div data-aos="flip-up" data-aos-delay="400" data-aos-duration="800">
          {" "}
          <NewsCard
            image={news01}
            title={language === 'fa' ? fa.ATRICHE_TITLE : fa.ATRICHE_TITLE_EN}
            description={
              "توضیحات توضیحات توضیحات توضیحات توضیحات ..."
            }
          />
        </div> */}

      </div>

      <p className="homeMore" onClick={() => navigator('/news')}>  {language === 'fa' ? fa.MORE_NEWS : fa.MORE_NEWS_EN}</p>
    </>
  );
};

export { HomeNews };
