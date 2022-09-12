import { Input } from "./../common/Input/Input";
import { Btn } from "./../common/Button/Btn";

import "./MainbarPassword.css";

const MainbarPassword = () => {
  return (
    <div className="MainbarContainer MainbarContainerPassword">
    <div className="mainbarPassword">
      <div className="mainbarPasswordTopic">
        <p> تغییر رمز عبور </p>
        <hr></hr>
      </div>

      <div className="mainbarPasswordInputs">
        <Input title="رمز عبور فعلی" className="enterInputPane2" />
        <Input title="رمز عبور جدید" className="enterInputPane2" />
        <Input title="تکرار رمز عبور" className="enterInputPane2" />
      </div>

      <div className="mainbarPasswordButton">
        <Btn
          color="goal"
          text="ثبت تغییرات"
          elementClass="mediumBtnCh"
          variant="contained"
        />
        <Btn
          color="warning"
          text="لغو تغییرات"
          elementClass="mediumBtnCh"
          variant="outlined"
          borderColor="#FF0000"
        />
      </div>
    </div>
    </div>
  );
};

export { MainbarPassword };
