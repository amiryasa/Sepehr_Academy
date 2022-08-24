import { Btn } from "../common/Button/Btn";
import { Input } from "../common/Input/Input";

import "./Register.css";

const Register = () => {
  return (
    <div className="registerHolder">
      <div className="registerInputHolder">
        <p> ورود کاربر </p>
        <div className="registerInputHolderReall">
          <Input
            title="نام کاربر"
            className="enterInputSmall"
          />
          <Input
            title="شماره تماس"
            className="enterInputSmall"
          />
          <Input
            title="شماره ملی"
            className="enterInputSmall"
          />
          <Input
            title="تاریخ تولد"
            className="enterInputSmall"
          />
          <Input
            title="ایمیل کاربر"
            className="enterInputSmall"
          />
          <Input
            title="رمز عبور"
            className="enterInputSmall"
          />
        </div>
        <div className="registerButtonHolderReall">
          <Btn
            color="info"
            text="ورود"
            elementClass="mediumBtnCh"
            variant="contained"
          />
          <Btn
            color="goal"
            text="ثبت نام"
            elementClass="mediumBtnCh"
            variant="outlined"
            borderColor="#04A641"
          />
        </div>
      </div>
      <div className="registerImageHolder"></div>
    </div>
  );
};

export { Register };
