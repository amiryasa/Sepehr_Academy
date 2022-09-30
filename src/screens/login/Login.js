import { useNavigate } from "react-router-dom";

import { Checkbox } from "@mui/material";

import { Btn } from "./../../components/common/Button/Btn";
import { Input } from "./../../components/common/Input/Input";
import * as fa from "../../constants/persianStrings";
import "./Login.css";

const Login = () => {
  const navigator = useNavigate();

  const checkboxChangeHandler = () => {};

  return (
    <div className="loginHolder">
      <div className="loginHolderLogo" onClick={() => navigator("/")}>
        {" "}
        <p>آموزشگاه کدنویسی بحر</p>{" "}
      </div>

      <div className="loginInputHolder">
        <p> {fa.TITLE_LOGIN_USER} </p>
        <div className="loginInputHolderReall">
          <div className="loginInputHolderReallEmail">
            <Input
              title={fa.TITLE_EMAIL_USER}
              className="enterInputBig"

            />
          </div>
          <div className="loginInputHolderReallPassword">
            <Input
              title={fa.TITLE_PASS}
              className="enterInputBig"
              password={true}
            />
          </div>
        </div>
        <p
          className="loginInputHolderForP"
          onClick={() => navigator("/forgetPass")}
        >
          {" "}
          {fa.FORGET_PASS}{" "}
        </p>

        <div className="loginInputHolderRemainder">
          <Checkbox
            size="small"
            style={{ color: "#043D72" }}
            onChange={checkboxChangeHandler}
          />
          <p className="loginInputHolderRemainderP1"> {fa.REMEMBER_ME} </p>
          <p className="loginInputHolderRemainderP2">({fa.SHARED_SYSTEM})</p>
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
