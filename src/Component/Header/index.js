import IconButtons from "../Button/iconBtn";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from "@mui/icons-material/Search";
import { createTheme } from "@mui/material/styles";
import "./index.css";

const Header = () => {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "#ffffff",
      },
    },
  });

  return (
    <div className="header1">
      <div className="headerRow headerLogo">
        <p>آکادمی کدنویسی بحر </p>
      </div>
      <div className="headerRow headerNavbar">
        <p> خانه </p>
        <p> آموزش </p>
        <p> مالی </p>
        <p> خدمات </p>
        <p> ارتباط با ما </p>
      </div>
      <div className="headerRow headerLogin">
        {/* <div className="loginUser"></div>
        <div className="loginSearch"></div> */}

        <IconButtons color="neutral" theme={theme} size="large">
          <SearchIcon fontSize="large" />
        </IconButtons>

        <IconButtons color="neutral" theme={theme} size="large">
          <AccountCircleOutlinedIcon fontSize="large" />
        </IconButtons>
      </div>
    </div>
  );
};

export { Header };
