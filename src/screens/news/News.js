import { NewsIntro } from "../../components/NewsIntro/NewsIntro";
import { NewsContainer } from "../../components/NewsContainer/NewsContainer";

import style from "./News.module.css";

const News = () => {
  return (
    <div className={style.newsContainer}>
      <NewsIntro />
      <NewsContainer />
    </div>
  );
};

export { News };
