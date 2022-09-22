import { useNavigate } from "react-router-dom";

import { Btn } from "./../../components/common/Button/Btn";
import { Input } from "./../../components/common/Input/Input";
import * as fa from "../../constants/persianStrings";
import "./ForgotPass.css";

const ForgotPass = () => {
  const navigator = useNavigate();

  return (
    <div className="forgotPassHolder">
      <div className="forgotPassHolderLogo" onClick={() => navigator("/")}>
        <p>آموزشگاه کدنویسی بحر</p>
      </div>
      <div className="forgotPassInputHolder">
        <p> {fa.TITLE_AGAIN_PASS} </p>
        <div className="forgotPassInputHolderReall">
          <div className="forgotPassInputHolderReallInput">
            <Input title={fa.TITLE_EMAIL_USER} className="enterInputBig" />
          </div>
        </div>
        <div className="forgotPassButtonHolderReall01">
          <Btn
            color="restore"
            text={fa.SUCESS_EMAIL}
            elementClass="mediumBtnCh2"
            variant="contained"
          />
        </div>

        <div className="forgotPassButtonHolderReall02">
          <Btn
            text={fa.SIGN_UP}
            elementClass="mediumBtnCh2"
            color="info"
            click="/register"
          />
          <hr></hr>
          <Btn
            text={fa.LOGIN}
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
