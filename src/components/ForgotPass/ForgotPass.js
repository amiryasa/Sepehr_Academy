import { Btn } from "../common/Button/Btn";
import { Input } from "../common/Input/Input";

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
          />
          <hr></hr>
          <Btn
            text="ورود"
            elementClass="mediumBtnCh2"
            color="info"
            className="newoskol"
          />
        </div>
      </div>
      <div className="forgotPassImageHolder"></div>
    </div>
  );
};

export { ForgotPass };
