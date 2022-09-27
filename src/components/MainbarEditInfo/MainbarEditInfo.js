import { useState } from "react"
import { Btn } from "../common/Button/Btn";
import DatePickerCustome from "../common/datePicker/DatePicker";
import { Input } from "../common/Input/Input";
import "./MainbarEditInfo.css";
import * as fa from "../../constants/persianStrings";

const MainbarEditInfo = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div className="MainbarContainer MainbarContainerEditInfo">
      <div className="MainbarEditInfo">
        <div className="MainbarEditInfoTopic">
          <p> ویرایش اطلاعات کاربری </p>
          <hr></hr>
        </div>
        <div className="MainbarEditInfoProfile"><div className="MainbarEditInfoProfileIcon"></div></div>
        <div className="MainbarEditInfoInputs">
          <div> <Input title={fa.TITLE_EMAIL} className="enterInputPanel" /> </div>
          <div> <Input title={fa.TITLE_PHONE} className="enterInputPanel" /> </div>
          <div> <Input title={fa.TITLE_NATIONAL_CODE} className="enterInputPanel" /> </div>
          <div>
            {/* <Input title="تاریخ تولد" className="enterInputPanel" /> */}
            <DatePickerCustome
              className="enterInputPanel"
              label={fa.TITLE_BIRTHDAY}
              maxDate={new Date()}
              onChange={setDate}
              value={date} />
          </div>
          <div> <Input title={fa.TITLE_EMAIL} className="enterInputPanel" /> </div>
        </div>
        <div className="MainbarEditInfoButton">
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

export { MainbarEditInfo };
