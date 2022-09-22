import { useNavigate } from "react-router-dom";

import { Btn } from "../../components/common/Button/Btn";
import { Input } from "../../components/common/Input/Input";
import * as fa from "../../constants/persianStrings";
import "./Register.css";

const Register = () => {
  return (
    <div className="registerHolder">
      <div className="registerInputHolder">
        <p> {fa.TITLE_LOGIN_USER} </p>
        <div className="registerInputHolderReall">

          <div>
            <Input title={fa.TITLE_NAME_USER} className="enterInputSmall" />
          </div>
          <div>
            <Input title={fa.TITLE_PHONE} className="enterInputSmall" />
          </div>
          <div>
            <Input title={fa.TITLE_NATIONAL_CODE} className="enterInputSmall" />
          </div>
          <div>
            <Input title={fa.TITLE_BIRTHDAY} className="enterInputSmall" />
          </div>
          <div>
            <Input title={fa.TITLE_EMAIL_USER} className="enterInputSmall" />
          </div>
          <div>
            <Input title={fa.TITLE_PASS} className="enterInputSmall" />
          </div>
        </div>
        
        <div className="registerButtonHolderReall">
          <Btn
            color="info"
            text={fa.LOGIN}
            elementClass="mediumBtnCh"
            variant="contained"
          />
          <Btn
            color="goal"
            text={fa.SIGN_UP}
            elementClass="mediumBtnCh"
            variant="outlined"
            borderColor="#04A641"
            click="/login"
          />
        </div>
      </div>
      <div className="registerImageHolder"></div>
    </div>
  );
};

export { Register };
