import { CardInNews } from "../CardInNews/CardInNews";
import { Paginate } from "../common/Pagination/Paginate";
import { NewsFilter } from "../NewsFilter/NewsFilter";
import { NewsIntro } from "../NewsIntro/NewsIntro";
import "./NewsContainer.css";

import news01 from "./../../assets/images/News/news01.png";

const NewsContainer = () => {
  return (
    <div>
      <div className="homeH2 n21">
        <h2> لیست تمام دوره‌ها </h2>
      </div>
      <NewsFilter />
      <div className="CardInNewsContainer">
        <CardInNews
          image={news01}
          title={"عنوان مقاله"}
          btnColor="detail"
          description={
            "توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"
          }
        />
        <CardInNews
          image={news01}
          title={"عنوان مقاله"}
          btnColor="detail"
          description={
            "توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"
          }
        />
        <CardInNews
          image={news01}
          title={"عنوان مقاله"}
          btnColor="detail"
          description={
            "توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"
          }
        />
        <CardInNews
          image={news01}
          title={"عنوان مقاله"}
          btnColor="detail"
          description={
            "توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"
          }
        />
                <CardInNews
          image={news01}
          title={"عنوان مقاله"}
          btnColor="detail"
          description={
            "توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"
          }
        />
        <CardInNews
          image={news01}
          title={"عنوان مقاله"}
          btnColor="detail"
          description={
            "توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات"
          }
        />
      </div>
      <Paginate />
    </div>
  );
};

export { NewsContainer };
