import "./index.css";

const Header = () => {
  return (
    <div className="header1">
      <div className="headerRow headerLogo">
        <p>آکادمی کدنویسی بحر </p>
      </div>
      <div className="headerRow headerNavbar">
        <p> ارتباط با ما </p>
        <p> خدمات </p>
        <p> مالی </p>
        <p> آموزش </p>
        <p> خانه </p>
      </div>
      <div className="headerRow headerLogin">
        <div className="loginUser"></div>
        <div className="loginSearch"></div>
      </div>
    </div>
  );
};

export { Header };
