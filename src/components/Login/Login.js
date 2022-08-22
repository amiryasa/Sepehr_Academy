import { Checkbox } from "@mui/material";
import { Btn } from "../common/Button/Btn";
import { Input } from "../common/Input/Input";

import "./Login.css";

const Login = () => {
  const checkboxChangeHandler = () => {};

  return (
    <div className="LoginHolder">
      <div className="loginInputHolder">
        <p> ورود کاربر </p>
        <Input title="ایمیل کاربر" margin="0px 36px 0 36px" width="331px" />
        <Input title="رمز عبور" margin="40px 36px 0 36px" width="331px" />
        <p className="loginInputHolderForP"> رمز عبورم را فراموش کرده‌ام! </p>

        <div className="loginInputHolderRemainder">
          <Checkbox
            size="small"
            style={{ color: "#043D72" }}
            onChange={checkboxChangeHandler}
          />
          <p className="loginInputHolderRemainderP1"> مرا به خاطر بسپار! </p>
          <p className="loginInputHolderRemainderP2">
            ( برای سیستم‌های اشتراکی توصیه نمی‌شود.){" "}
          </p>
        </div>

        <div>
          <Btn
            color="goal"
            text="ورود"
            margin="50px 36px 20px 0"
            elementClass="mediumBtnCh"
            variant="contained"
          />
          <Btn
            color="info"
            text="ثبت نام"
            margin="50px 15px 20px 0"
            elementClass="mediumBtnCh"
            variant="outlined"
            borderColor="#00ADEF"
          />
        </div>
      </div>
      <div className="loginImageHolder"></div>
    </div>
  );
};

export { Login };
