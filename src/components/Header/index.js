import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../../providers/GeneralContext"
import * as fa from "../../constants/persianStrings"

import "./index.css";

const Header = () => {
  const navigator = useNavigate();
  const { language, setLanguage } = useContext(GeneralContext);

  let isHidden = true;
  const hamberMenuOnclickHandler = () => {
    const myElement = document.getElementById("navbarHamAction");

    if (isHidden) {
      myElement.style.opacity = 1;
      myElement.style.height = "154px";
      isHidden = false;
    } else {
      myElement.style.opacity = 0;
      myElement.style.height = 0;
      isHidden = true;
    }

  };

  const changeLanguage = (lng) => {
    if (lng === 'fa')
      setLanguage('en')
    else
      setLanguage('fa')
  }


  const headerItems = document.getElementsByClassName("headerRowItems");

  const handleItemClick = (index) => {
    headerItems[0].style.cursor = "pointer";
    headerItems[0].style.color = "#808080";
    headerItems[0].style.textDecoration = "none";

    headerItems[1].style.cursor = "pointer";
    headerItems[1].style.color = "#808080";
    headerItems[1].style.textDecoration = "none";

    headerItems[2].style.cursor = "pointer";
    headerItems[2].style.color = "#808080";
    headerItems[2].style.textDecoration = "none";

    headerItems[3].style.cursor = "pointer";
    headerItems[3].style.color = "#808080";
    headerItems[3].style.textDecoration = "none";

    headerItems[4].style.cursor = "pointer";
    headerItems[4].style.color = "#808080";
    headerItems[4].style.textDecoration = "none";

    headerItems[index].style.cursor = "default";
    headerItems[index].style.color = "#043d72";
    headerItems[index].style.textDecoration = "underline";
  };

  return (
    <div
      className={language === 'fa' ? "header1" : "header1En"}
      style={{
        display: `${window.location.pathname === "/" ? "block" : "flex"}`,
      }}
    >
      <div className="headerRow headerLogo"></div>

      <div className="headerRow headerNavbar" id="navbarHamAction">
        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/");
            handleItemClick(0);
          }}
        >
          {language === 'fa' ? fa.HEADER_HOME : fa.HEADER_HOME_EN}
        </p>

        <p
          className="headerRowItems"
          onClick={() => {
            navigator("./courses");
            handleItemClick(1);
          }}
        >
          {language === 'fa' ? fa.HEADER_COURSE : fa.HEADER_COURSE_EN}

        </p>

        <p
          className="headerRowItems"
          onClick={() => {
            navigator("./news");
            handleItemClick(2);
          }}
        >
          {language === 'fa' ? fa.HEADER_NEWS : fa.HEADER_NEWS_EN}
        </p>
        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/");
            handleItemClick(3);
          }}
        >
          {language === 'fa' ? fa.HEADER_SERVICES : fa.HEADER_SERVICES_EN}

        </p>
        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/");
            handleItemClick(4);
          }}
        >
          {language === 'fa' ? fa.HEADER_CONTACT : fa.HEADER_CONTACT_EN}

        </p>
        <p onClick={() => { changeLanguage(language) }}>
          {language}
        </p>
      </div>
      <div
        className="headerHamberMenu"
        onClick={hamberMenuOnclickHandler}
      ></div>
      <div className="headerRow headerLogin">
        <div
          className="loginSearch"
          onClick={() => navigator("./shopping")}
        ></div>
        <div className="loginUser" onClick={() => navigator("./login")}></div>
      </div>
    </div>
  );
};

export { Header };
