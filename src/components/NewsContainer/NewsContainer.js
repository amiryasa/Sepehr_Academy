import { useState } from "react";

import * as fa from "../../constants/persianStrings";

import { CardInNews } from "../CardInNews/CardInNews";
import { Paginate } from "../common/Pagination/Paginate";
import { NewsFilter } from "../NewsFilter/NewsFilter";
import { NewsIntro } from "../NewsIntro/NewsIntro";

import news01 from "./../../assets/images/News/news01.png";

import "./NewsContainer.css";

const newsData = [
  {
    title: "عنوان مقاله 01",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 02",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 03",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 04",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 05",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 06",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 07",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 08",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 09",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 10",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 11",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 12",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 13",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 14",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 15",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 16",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 17",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
  {
    title: "عنوان مقاله 18",
    image: news01,
    description: "توضیحات توضیحات توضیحات توضیحات توضیحات ...",
    date: "25 اردیبهشت 1401",
  },
];

const NewsContainer = () => {

  const [currentPage_NewsContainer, setCurrentPage_NewsContainer] = useState(1);

  const handlePagination_NewsContainer = (e, value) => {
    setCurrentPage_NewsContainer(value);
    console.log(value)
  }

  return (
    <div>
      <div className="homeH2 n21">
        <h2> {fa.TITLE_NEWS} </h2>
      </div>
      <NewsFilter />
      <div className="CardInNewsContainer">
        {newsData.slice((currentPage_NewsContainer*6)-6,currentPage_NewsContainer*6).map((item, index) => (
          <CardInNews
            image={item.image}
            title={item.title}
            btnColor="detail"
            description={item.description}
            date={item.date}
          />
        ))}
      </div>
      <Paginate 
      allItem={newsData.length}
      eachPageTtem={6}
      handlePagination={handlePagination_NewsContainer}
      />
    </div>
  );
};

export { NewsContainer };
