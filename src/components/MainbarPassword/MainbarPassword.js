import { Input } from "./../common/Input/Input";
import { Btn } from "./../common/Button/Btn";
import * as fa from "../../constants/persianStrings"
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
          <Input title={fa.TITLE_EMAIL} className="enterInputPane2"/>
          <Input title={fa.TITLE_NEW_PASS} className="enterInputPane2" password={true} />
          <Input title={fa.TITLE_AGAIN_NEW_PASS} className="enterInputPane2" password={true} />
        </div>

        <div className="mainbarPasswordButton">
          <Btn
            color="goal"
            text={fa.INSERT_NEW_CHANGES}
            elementClass="mediumBtnCh"
            variant="contained"
          />
          <Btn
            color="warning"
            text={fa.IGNORE_NEW_CHANGES}
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
