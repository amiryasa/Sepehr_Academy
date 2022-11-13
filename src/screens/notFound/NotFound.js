import {useNavigate} from 'react-router-dom';

import "./NotFound.css";

const NotFound = () => {

    const navigator = useNavigate();
  return (
    <>
      <div className="notFoundPic"></div>
      <p className="notFoundP1"> صفحه‌ی مورد نظر یافت نشد!</p>
      <p className="notFoundP2" onClick={() => navigator('/')}> بازگشت به خانه...</p>
    </>
  );
};

export { NotFound };
