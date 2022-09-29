import { Btn } from "../common/Button/Btn";
import { Input } from "../common/Input/Input";
import { Tooltips } from "../Tooltive/Tooltips";
import "./MainbarEditInfo.css";

const MainbarEditInfo = () => {
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
            
            <Input title="تاریخ تولد" className="enterInputPanel" />
          </div>
          <div>
            
            <Input title="ایمیل" className="enterInputPanel" />
          </div>
        </div>
        <div className="MainbarEditInfoButton">
          <Btn
            color="goal"
            text="ثبت تغییرات"
            elementClass="mediumBtnCh"
            variant="contained"
          />
          <Btn
            color="warning"
            text="لغو تغییرات"
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
