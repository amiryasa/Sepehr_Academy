import {useNavigate} from 'react-router-dom';

import "./NotAllow.css";

const NotAllow = () => {

    const navigator = useNavigate();
  return (
    <>
      <div className="notAllowPic"></div>
      <p className="notAllowP1"> دسترسی به صفحه‌ی مورد نظر وجود ندارد!</p>
      <p className="notAllowP2" onClick={() => navigator('')}> بازگشت به خانه...</p>
    </>
  );
};

export { NotAllow };
