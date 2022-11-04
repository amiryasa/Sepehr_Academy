import { useEffect, useState } from "react";
import { getAllNews } from "../../api/Core/News";
import * as fa from "../../constants/persianStrings";
import { CardInNews } from "../CardInNews/CardInNews";
import { Paginate } from "../common/Pagination/Paginate";
import { NewsFilter } from "../NewsFilter/NewsFilter";
import { NewsIntro } from "../NewsIntro/NewsIntro";

import news01 from "./../../assets/images/News/news01.png";

import "./NewsContainer.css";


const NewsContainer = () => {
  const [newsArticleData, setNewsArticleData] = useState(null)
  const [currentPage_NewsContainer, setCurrentPage_NewsContainer] = useState(1);

  useEffect(() => {
    getAllNewsArticles()
  }, [])


  const getAllNewsArticles = async () => {
    let response = await getAllNews();
    if (response.data.result) {
      setNewsArticleData(response.data.result)
    }
  }

  const handlePagination_NewsContainer = (e, value) => {
    setCurrentPage_NewsContainer(value);
  }


  return (
    <div>
      <div className="homeH2 n21">
        <h2> {fa.TITLE_NEWS} </h2>
      </div>
      <NewsFilter />
      <div className="CardInNewsContainer">
        {newsArticleData != null && newsArticleData.slice((currentPage_NewsContainer * 6) - 6, currentPage_NewsContainer * 6).map((item, index) => (
          <CardInNews
            image={item.image}
            title={item.title}
            btnColor="detail"
            description={item.text}
            date={item.date}
            id={item._id}
          />
        ))}
      </div>
      <Paginate
        allItem={newsArticleData && newsArticleData.length}
        eachPageTtem={6}
        handlePagination={handlePagination_NewsContainer}
      />
    </div>
  );
};

export { NewsContainer };
