import { Checkbox } from "@mui/material";
import { Btn } from "../common/Button/Btn";
import { Input } from "../common/Input/Input";

import "./Register.css";

const Register = () => {
  const checkboxChangeHandler = () => {};

  return (
    <div className="registerHolder">
      <div className="registerInputHolder">
        <p> ورود کاربر </p>
        <Input title="نام کاربر" margin="0px 36px 0 36px" width="200px" />
        <Input title="شماره تماس" margin="0px -10px 0 0px" width="200px" />
        <Input title="شماره ملی" margin="45px 36px 0 36px" width="200px" />
        <Input title="تاریخ تولد" margin="45px -10px 0 0px" width="200px" />
        <Input title="ایمیل کاربر" margin="45px 36px 0 36px" width="200px" />
        <Input title="رمز عبور" margin="45px -10px 0 0px" width="200px" />

        <div>
          <Btn
            color="info"
            text="ورود"
            margin="40px 55px 20px 0"
            elementClass="mediumBtnCh"
            variant="contained"
          />
          <Btn
            color="goal"
            text="ثبت نام"
            margin="40px 68px 20px 0"
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
