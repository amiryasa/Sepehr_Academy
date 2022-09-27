import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { Btn } from "../../components/common/Button/Btn";
import DatePickerCustome from "../../components/common/datePicker/DatePicker";
import { Input } from "../../components/common/Input/Input";
import * as fa from "../../constants/persianStrings";
import "./Register.css";

const Register = () => {
  const [date, setDate] = useState(new Date())
  const navigator = useNavigate();

  return (
    <div className="registerHolder">
      <div className="registerHolderLogo" onClick={() => navigator("/")}>
        <p>آموزشگاه کدنویسی بحر</p>{" "}
      </div>
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
          <div className="datePicker_div">
            <DatePickerCustome
              label={fa.TITLE_BIRTHDAY}
              maxDate={new Date()}
              onChange={setDate}
              value={date}
            />
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
            text={fa.SIGN_UP}
            elementClass="mediumBtnCh"
            variant="contained"
          />
          <Btn
            color="goal"
            text={fa.LOGIN}
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
