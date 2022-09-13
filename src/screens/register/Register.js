
import { useNavigate } from 'react-router-dom';

import { Btn } from "../../components/common/Button/Btn";
import { Input } from "../../components/common/Input/Input";
<<<<<<< HEAD
import * as fa from '../../constants/persianStrings';
=======


>>>>>>> origin/master
import "./Register.css";

const Register = () => {
  return (
    <div className="registerHolder">
      <div className="registerInputHolder">
        <p> {fa.TITLE_LOGIN_USER} </p>
        <div className="registerInputHolderReall">
          <Input
            title={fa.TITLE_NAME_USER}
            className="enterInputSmall"
          />
          <Input
            title={fa.TITLE_PHONE}
            className="enterInputSmall"
          />
          <Input
            title={fa.TITLE_NATIONAL_CODE}
            className="enterInputSmall"
          />
          <Input
            title={fa.TITLE_BIRTHDAY}
            className="enterInputSmall"
          />
          <Input
            title={fa.TITLE_EMAIL_USER}
            className="enterInputSmall"
          />
          <Input
            title={fa.TITLE_PASS}
            className="enterInputSmall"
          />
        </div>
        <div className="registerButtonHolderReall">
          <Btn
            color="info"
<<<<<<< HEAD
            text={fa.LOGIN}
=======
            text="ثبت نام"
>>>>>>> origin/master
            elementClass="mediumBtnCh"
            variant="contained"
          />
          <Btn
            color="goal"
<<<<<<< HEAD
            text={fa.SIGN_UP}
=======
            text="ورود"
>>>>>>> origin/master
            elementClass="mediumBtnCh"
            variant="outlined"
            borderColor="#04A641"
            click='/login'
          />
        </div>
      </div>
      <div className="registerImageHolder"></div>
    </div>
  );
};

export { Register };
