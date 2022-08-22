import { Btn } from "../common/Button/Btn";
import { Input } from "../common/Input/Input";

import "./ForgotPass.css";

const ForgotPass = () => {

  return (
    <div className="forgotPassHolder">
      <div className="forgotPassInputHolder">
        <p>بازیابی رمز عبور</p>
        <Input title="ایمیل کاربر" margin="0px 36px 0 36px" width="331px" />

        <div>
          <Btn
            color="restore"
            text="تایید ایمیل"
            margin="40px 124px 20px 0"
            elementClass="mediumBtnCh"
            variant="contained"
          />
        </div>

        <div>
          <Btn
            text="ثبت نام"
            margin="15px 37px 20px 0"
            elementClass="mediumBtnCh"
            color='info'
          />
          <hr></hr>
            <Btn
            text="ورود"
            margin="15px 15px 20px 0"
            elementClass="mediumBtnCh"
            color='info'
          />
        </div>
      </div>
      <div className="forgotPassImageHolder"></div>
    </div>
  );
};

export { ForgotPass };
