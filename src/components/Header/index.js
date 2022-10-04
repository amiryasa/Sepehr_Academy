import { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";


import "./index.css";

const headerItems = document.getElementsByClassName("headerRowItems");

const Header = () => {
  const navigator = useNavigate();
  const headerLocation = useLocation();
  const [currentState, setCurrentState] = useState(headerLocation.pathname);
  

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


  // headerItems[4].style.cursor = "pointer";
  // headerItems[4].style.color = "#808080";
  // headerItems[4].style.textDecoration = "none";

  // headerItems[index].style.cursor = "default";
  // headerItems[index].style.color = "#043d72";
  // headerItems[index].style.textDecoration = "underline";


  


  return (
    <div
      className="header1"
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
          }}
        >
          خانه
        </p>

        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/courses");
          }}
        >
          دوره‌ها
        </p>

        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/news");
          }}
        >
          اخبار و مقالات
        </p>
        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/");
          }}
        >
          خدمات
        </p>
        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/");
          }}
        >
          ارتباط با ما
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
