import { useState } from "react"
import { Btn } from "../common/Button/Btn";
import DatePickerCustome from "../common/datePicker/DatePicker";
import { Input } from "../common/Input/Input";
import { Tooltips } from "../Tooltive/Tooltips";
import "./MainbarEditInfo.css";
import * as fa from "../../constants/persianStrings";

const MainbarEditInfo = () => {
  const [date, setDate] = useState()
  return (
    <div className="MainbarContainer MainbarContainerEditInfo">
      <div className="MainbarEditInfo">
        <div className="MainbarEditInfoTopic">
          <p> ویرایش اطلاعات کاربری </p>
          <hr></hr>
        </div>
        <Tooltips state="active">
          <div className="MainbarEditInfoProfile">
            <div className="MainbarEditInfoProfileIcon"></div>
          </div>
        </Tooltips>
        <div className="MainbarEditInfoInputs">
          <div>

            <Input title="نام کاربری" className="enterInputPanel" />
          </div>
          <div>

            <Input title="شماره تماس" className="enterInputPanel" />
          </div>
          <div>

            <Input title="شماره ملی" className="enterInputPanel" />
          </div>
          <div>

            <DatePickerCustome
              className="enterInputPanel"
              label={fa.TITLE_BIRTHDAY}
              maxDate={new Date()}
              onChange={setDate}
              value={date} />
          </div>
          <div>

            <Input title="ایمیل" className="enterInputPanel" />
          </div>
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
