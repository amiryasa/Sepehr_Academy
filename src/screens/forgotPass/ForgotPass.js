import { Btn } from "./../../components/common/Button/Btn";
import { Input } from "./../../components/common/Input/Input";
import * as fa from '../../constants/persianStrings'
import "./ForgotPass.css";

const ForgotPass = () => {
  return (
    <div className="forgotPassHolder">
      <div className="forgotPassInputHolder">
        <p> {fa.TITLE_AGAIN_PASS} </p>
        <div className="forgotPassInputHolderReall">
          <Input
            title={fa.TITLE_EMAIL_USER}
            className="enterInputBig"
          />
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
          />
          <hr></hr>
          <Btn
            text={fa.LOGIN}
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
