import { useNavigate } from "react-router-dom";

import { createTheme } from "@mui/material/styles";


import "./index.css";


const Header = () => {

  const navigator = useNavigate();

  let isHidden = true;
  const hamberMenuOnclickHandler = () => {
    const myElement = document.getElementById("navbarHamAction");
    
    if (isHidden) {
      myElement.style.opacity = 1;
      myElement.style.height = "154px";
      isHidden = false;
    }
    else{
      myElement.style.opacity = 0;
      myElement.style.height = 0;
      isHidden = true;
    }
  };

  return (
    <div
      className="header1"
      style={{
        display: `${window.location.pathname === "/" ? "block" : "flex"}`,
      }}
    >
      <div className="headerRow headerLogo"></div>

      <div className="headerRow headerNavbar" id="navbarHamAction">
        <p> خانه </p>
        <p> آموزش </p>
        <p> مالی </p>
        <p> خدمات </p>
        <p> ارتباط با ما </p>
      </div>
      <div
        className="headerHamberMenu"
        onClick={hamberMenuOnclickHandler}
      ></div>
      <div className="headerRow headerLogin">
        <div className="loginSearch" onClick={() => navigator('./shopping')}></div>
        <div className="loginUser" onClick={() => navigator('./login')}></div>
      </div>
    </div>
  );
};

export { Header };
