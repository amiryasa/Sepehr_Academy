import { useNavigate } from 'react-router-dom';

import { Checkbox } from "@mui/material";

import { Btn } from "./../../components/common/Button/Btn";
import { Input } from "./../../components/common/Input/Input";
import * as fa from '../../constants/persianStrings'
import "./Login.css";

const Login = () => {

  const navigator = useNavigate();

  const checkboxChangeHandler = () => {};

  return (
    <div className="loginHolder">
      <div className="loginInputHolder">
        <p> {fa.TITLE_LOGIN_USER} </p>
        <div className="loginInputHolderReall">
          <Input title="ایمیل کاربر" className="enterInputBig" />
          <Input title="رمز عبور" className="enterInputBig" />
        </div>
        <p className="loginInputHolderForP" onClick={() => navigator('/forgotPass')}> {fa.FORGET_PASS} </p>

        <div className="loginInputHolderRemainder">
          <Checkbox
            size="small"
            style={{ color: "#043D72" }}
            onChange={checkboxChangeHandler}
          />
          <p className="loginInputHolderRemainderP1"> {fa.REMEMBER_ME} </p>
          <p className="loginInputHolderRemainderP2">
            ({fa.SHARED_SYSTEM})
          </p>
        </div>

        <div className="loginButtonHolderReall">
          <Btn
            color="goal"
            text={fa.LOGIN}
            elementClass="mediumBtnCh2"
            variant="contained"
          />
          <Btn
            color="info"
            text={fa.SIGN_UP}
            elementClass="mediumBtnCh2"
            variant="outlined"
            borderColor="#00ADEF"
            click="/register"
          />
        </div>
      </div>
      <div className="loginImageHolder"></div>
    </div>
  );
};

export { Login };
