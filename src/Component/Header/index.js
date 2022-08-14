import { createTheme } from "@mui/material/styles";
import "./index.css";

const Header = () => {

  return (
    <div className="header1">
      <div className="headerRow headerLogo">
      </div>
      <div className="headerRow headerNavbar">
        <p> خانه </p>
        <p> آموزش </p>
        <p> مالی </p>
        <p> خدمات </p>
        <p> ارتباط با ما </p>
      </div>
      <div className="headerRow headerLogin">

        <div className="loginSearch"></div>
        <div className="loginUser"></div>
        
      </div>
    </div>
  );
};

export { Header };
