import { useNavigate } from 'react-router-dom';

import { Btn } from "./../../components/common/Button/Btn";
import { Input } from "./../../components/common/Input/Input";

import "./ForgotPass.css";

const ForgotPass = () => {
  return (
    <div className="forgotPassHolder">
      <div className="forgotPassInputHolder">
        <p>بازیابی رمز عبور</p>
        <div className="forgotPassInputHolderReall">
          <Input
            title="ایمیل کاربر"
            className="enterInputBig"
          />
        </div>
        <div className="forgotPassButtonHolderReall01">
          <Btn
            color="restore"
            text="تایید ایمیل"
            elementClass="mediumBtnCh2"
            variant="contained"
          />
        </div>

        <div className="forgotPassButtonHolderReall02">
          <Btn
            text="ثبت نام"
            elementClass="mediumBtnCh2"
            color="info"
            click="/register"
          />
          <hr></hr>
          <Btn
            text="ورود"
            elementClass="mediumBtnCh2"
            color="info"
            className="newoskol"
            click="/login"
          />
        </div>
      </div>
      <div className="forgotPassImageHolder"></div>
    </div>
  );
};

export { ForgotPass };
