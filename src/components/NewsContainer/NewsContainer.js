import { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import { getAllNews } from "../../api/Core/News";
import * as fa from "../../constants/persianStrings";
import { CardInNews } from "../CardInNews/CardInNews";
import { Paginate } from "../common/Pagination/Paginate";
import { NewsFilter } from "../NewsFilter/NewsFilter";

import _ from "lodash";

import "./NewsContainer.css";


const NewsContainer = () => {
  const [newsArticleData, setNewsArticleData] = useState(null);
  const [newsArticleData01, setNewsArticleData01] = useState(null)

  //filter 
  const [sortby, setSortby] = useState([]);
  const [upOrDown, setUpOrDown] = useState([]);
  const [category, setCategory] = useState([]);
  const [upOrDownData, setupOrDownData] = useState("desc");

  const upOrDownItem = ["صعودی", "نزولی"];

  const [currentPage_NewsContainer, setCurrentPage_NewsContainer] = useState(1);

  useEffect(() => {
    trackPromise(getAllNewsArticles())
  }, [])


  const getAllNewsArticles = async () => {
    let response = await getAllNews();
    if (response.data.result) {
      setNewsArticleData(response.data.result);
      setNewsArticleData01(response.data.result);
    }
  }

  const handlePagination_NewsContainer = (e, value) => {
    setCurrentPage_NewsContainer(value);
  }



  // filter 

  const handleSelectboxSortby = (event) => {
    const {
      target: { value },
    } = event;
    setSortby(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    if (event.target.value === "عنوان") {
      var newNewsData = _.orderBy(newsArticleData01, ["title"], [upOrDownData]);
      setNewsArticleData01([...newNewsData]);

      console.log('PPPPP', newNewsData)
      console.log('wwww', event.target.value)
    }
  };

  // up & down 
  const handleSelectboxUpOrDown = (event) => {
    const {
      target: { value },
    } = event;
    setUpOrDown(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    if (event.target.value === "صعودی") {
      setupOrDownData("asc");
      var newNewsData = _.orderBy(newsArticleData01, ['title'], ["asc"]);
      setNewsArticleData01([...newNewsData]);
    } else if (event.target.value === "نزولی") {
      setupOrDownData("desc");
      newNewsData = _.orderBy(newsArticleData01, ['title'], ["desc"]);
      setNewsArticleData01([...newNewsData]);
    }
  };

  // ***
  // ***
  // ***
  // ***

  // Select category

  const handleSelection = (event) => {

    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    let newData;


    if ((event.target.value).length > 0 && (event.target.value).length < 2 && event.target.value[0] === 'اخبار') {
      newData = newsArticleData && newsArticleData.filter(item =>
        item.category === 'news'
      );
    }

    else if ((event.target.value).length > 0 && (event.target.value).length < 2 && event.target.value[0] === 'مقالات') {
      newData = newsArticleData && newsArticleData.filter(item =>
        item.category === "article"
      );
    }

    else{
      newData = newsArticleData 
    }

    setNewsArticleData01([...newData]);

  };

  return (
    <div>
      <div className="homeH2 n21">
        <h2> {fa.TITLE_NEWS} </h2>
      </div>

      <NewsFilter 
        handleSelectboxSortby={handleSelectboxSortby}
        selectStateSortby={sortby}
        sortbyItem={['عنوان']}
        sortbyTitle={"مرتب‌سازی"}

        handleSelectboxUpOrDown={handleSelectboxUpOrDown}
        selectStateUpOrDown={upOrDown}
        upOrDownItem={upOrDownItem}
        upOrDownTitle={"روند نمایش"}

        listOfTeacher={['اخبار', 'مقالات']}
        handleSelection={handleSelection}
        teacherState={category}
        selectionTitle01={"دسته‌بندی"}
      />

      <div className="CardInNewsContainer">
        {newsArticleData01 != null && newsArticleData01.slice((currentPage_NewsContainer * 6) - 6, currentPage_NewsContainer * 6).map((item, index) => (
          <CardInNews
            image={item.image}
            title={item.title}
            btnColor="detail"
            description={item.text}
            category={item.category === 'news' ? 'دسته‌بندی: اخبار' : 'دسته‌بندی: مقالات'}
            id={item._id}
          />
        ))}
      </div>
      <Paginate
        allItem={newsArticleData01 && newsArticleData01.length}
        eachPageTtem={6}
        handlePagination={handlePagination_NewsContainer}
      />
    </div>
  );
};

export { NewsContainer };
