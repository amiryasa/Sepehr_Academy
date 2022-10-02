import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Header } from "./../Header/index";
import { Footer } from "./../Footer/index";
import { Progress } from "./../Progress/Progress";

import "./PageLayout.css";

const PageLayout = () => {
  const location = useLocation();

  const dontNeedHeader = ["/login", "/register", "/forgetPass"];

  console.log(location.pathname);

  return (
    <>
      {!dontNeedHeader.includes(location.pathname) && <Header />}
      <Progress />
      <Outlet />
      {!dontNeedHeader.includes(location.pathname) && <Footer />}
    </>
  );
};

export { PageLayout };
