
import { Btn } from "../common/Button/Btn";
import { Input } from "../common/Input/Input";

import './HomeIdeas.css';

const HomeIdeas = () => {
  return (
    <>
      <div className="homeH2 h26" data-aos="fade-up" data-aos-duration="1000">
        <h2> انتقادات و پیشنهادات </h2>
      </div>
      <div className="ideaCantainer">
        <div className="ideaInput">
          <Input title="نام کاربر" margin="25px 24px 0 24px" width="236px" />
          <Input title="ایمیل کاربر" margin="33px 24px 0 24px" width="236px" />
          <Input
            title="متن پیام"
            margin="33px 24px 0 24px"
            width="236px"
            multiline={true}
            row={4}
          />
          <Btn
            color="goal"
            text="ثبت پیام"
            margin="32px 84px 84px 18px"
            elementClass="smallBtn"
          />
        </div>
      </div>
    </>
  );
};

export { HomeIdeas };
