import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Header } from "./../Header/index";
import { Footer } from "./../Footer/index";
import { Progress } from "./../Progress/Progress";

import "./PageLayout.css";
import CompairBtn from "../Compair/CompairBtn";
import { useContext } from "react";
import { GeneralContext } from "../../providers/GeneralContext";
import { ChatBox } from "../ChatBox/ChatBox";
import { Tooltip } from "@mui/material";

const PageLayout = () => {
  const location = useLocation();
  const { compairCourse } = useContext(GeneralContext)
  const dontNeedHeader = ["/login", "/register", "/forgetPass"];

  return (
    <>
      {!dontNeedHeader.includes(location.pathname) && <Header />}
      <Progress />
      {(compairCourse.length > 0 && location.pathname != '/compair') && < CompairBtn />}
      <Outlet />
      {!dontNeedHeader.includes(location.pathname) && <Footer />}

      <ChatBox />
    </>
  );
};

export { PageLayout };
