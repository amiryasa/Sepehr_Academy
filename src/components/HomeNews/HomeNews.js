import { useNavigate } from 'react-router-dom';

import { NewsCard } from "../NewsCard/NewsCard";

import './HomeNews.css';

import news01 from './../../assets/images/News/news01.png';

const HomeNews = () => {

  const navigator = useNavigate();

  return (
    <>
      <div className="homeH2 h24" data-aos="fade-up" data-aos-duration="1000">
        <h2> اخبار و مقالات </h2>
      </div>
      <div className="newsCantainer">
        <div data-aos="flip-up" data-aos-delay="400" data-aos-duration="800">
          {" "}
          <NewsCard
            image={news01}
            title={"عنوان مقاله"}
            description={
              "توضیحات توضیحات توضیحات توضیحات توضیحات ..."
            }
          />
        </div>

        <div data-aos="flip-up" data-aos-delay="400" data-aos-duration="800">
          {" "}
          <NewsCard
            image={news01}
            title={"عنوان مقاله"}
            description={
              "توضیحات توضیحات توضیحات توضیحات توضیحات ..."
            }
          />
        </div>

        <div data-aos="flip-up" data-aos-delay="800" data-aos-duration="800">
          {" "}
          <NewsCard
            image={news01}
            title={"عنوان خبر"}
            description={
              "توضیحات توضیحات توضیحات توضیحات توضیحات ..."
            }
          />
        </div>

        <div data-aos="flip-up" data-aos-delay="800" data-aos-duration="800">
          {" "}
          <NewsCard
            image={news01}
            title={"عنوان خبر"}
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
            title={"عنوان مقاله"}
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
            title={"عنوان مقاله"}
            description={
              "توضیحات توضیحات توضیحات توضیحات توضیحات ..."
            }
          />
        </div>
      </div>

      <p className="homeMore"  onClick={() => navigator('/news')}> لیست کامل اخبار و مقالات ...</p>
    </>
  );
};

export { HomeNews };
