import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import { GeneralContext } from "../../providers/GeneralContext"
import * as fa from "../../constants/persianStrings"

import "./index.css";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import AvatarCostomize from "../common/avatar";
import { getItem, removeItem, setItem } from "../../api/storage/storage";

const Header = () => {
  const location = useLocation();
  const navigator = useNavigate();
  const idUser = JSON.parse(getItem('id'))
  const role = getItem('role')

  const ThemeMode = getItem('theme')
  const LanguageMode = getItem('language')

  const { language, setLanguage, themePage, shoppCourse, setThemePage, dataUser } = useContext(GeneralContext);

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
    if (lng === 'fa') {
      setLanguage('en');
      if (LanguageMode) {
        removeItem('language');
        setItem('language', 'en')
      } else setItem('language', 'en')
    }
    else {
      setLanguage('fa');
      if (LanguageMode) {
        removeItem('language');
        setItem('language', 'fa')
      } else setItem('language', 'fa')
    }
  }


  // headerItems[4].style.cursor = "pointer";
  // headerItems[4].style.color = "#808080";
  // headerItems[4].style.textDecoration = "none";

  // headerItems[index].style.cursor = "default";
  // headerItems[index].style.color = "#043d72";
  // headerItems[index].style.textDecoration = "underline";



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
          className={`headerRowItems ${themePage}`}

          onClick={() => {
            navigator("/");
          }}

          style={location.pathname === '/' ? { cursor: 'default', color: '#043d72', textDecoration: 'underline' } :
            { cursor: 'pointer', color: '#808080', textDecoration: 'none' }}
        >
          {language === 'fa' ? fa.HEADER_HOME : fa.HEADER_HOME_EN}
        </p>

        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/courses");
          }}

          style={location.pathname === '/courses' ? { cursor: 'default', color: '#043d72', textDecoration: 'underline' } :
            { cursor: 'pointer', color: '#808080', textDecoration: 'none' }}
        >
          {language === 'fa' ? fa.HEADER_COURSE : fa.HEADER_COURSE_EN}

        </p>

        <p
          className="headerRowItems"
          onClick={() => {
            navigator("/news");
          }}

          style={location.pathname === '/news' ? { cursor: 'default', color: '#043d72', textDecoration: 'underline' } :
            { cursor: 'pointer', color: '#808080', textDecoration: 'none' }}
        >
          {language === 'fa' ? fa.HEADER_NEWS : fa.HEADER_NEWS_EN}
        </p>
        <p
          className="headerRowItems"
        >
          {language === 'fa' ? fa.HEADER_SERVICES : fa.HEADER_SERVICES_EN}

        </p>
        <p
          className="headerRowItems"
        >
          {language === 'fa' ? fa.HEADER_CONTACT : fa.HEADER_CONTACT_EN}

        </p>
      </div>
      <div className="lng headerRow">
        <p onClick={() => { changeLanguage(language) }}>
          {language}
        </p>
      </div>

      <div className="mode headerRow">
        <FormControlLabel
          control={<ThemeButton sx={{ m: 1 }}
            checked={themePage === 'light' ? true : false}
            onChange={
              (theme) => {
                if (theme.target.checked === true) {
                  setThemePage('light');
                  if (ThemeMode) {
                    removeItem('theme');
                    setItem('theme', 'light')
                  } else setItem('theme', 'light')
                }
                else {
                  setThemePage("dark");
                  if (ThemeMode) {
                    removeItem('theme');
                    setItem('theme', 'dark')
                  } else setItem('theme', 'dark')
                }
              }} />}
        />
      </div>
      <div
        className="headerHamberMenu"
        onClick={hamberMenuOnclickHandler}
      >

      </div>
      <div className="headerRow headerLogin">
        <div
          className="loginSearch"
          onClick={() => navigator("/shoppingCart")}
        >
          {shoppCourse.length > 0 && <p className="numberOfShopp">{shoppCourse && shoppCourse.length}</p>}
        </div>

        {idUser && dataUser ?
          <AvatarCostomize
            src={dataUser.profile}
            className="avatarHeader"
            onClick={() => {
              if (role != 'student') {
                removeItem('id');
                removeItem('token');
                removeItem('role');
                window.location.replace('http://localhost:3001/dashboard')
              }
              else
                navigator("./studentPanel")
            }} /> :
          <div className="loginUser"
            onClick={() => {
              navigator("./login")
            }}
          >
          </div>
        }
      </div>
    </div>
  );
};

export { Header };
