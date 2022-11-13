import { useState, useEffect } from "react"
import { useContext } from "react";
import { trackPromise } from "react-promise-tracker";
import { Btn } from "../common/Button/Btn";
import DatePickerCustome from "../common/datePicker/DatePicker";
import { Input } from "../common/Input/Input";
import "./MainbarEditInfo.css";
import * as fa from "../../constants/persianStrings";
import { getItem } from "../../api/storage/storage";
import AvatarPhoto from "../common/avatar/AvatarPhoto";
import UploadPhoto from "../UploadPhoto/UploadPhoto";
import { updateStudetInform } from "../../api/Core/Student_Manage";
import { GeneralContext } from "../../providers/GeneralContext";
import { toast } from "react-toastify";

const MainbarEditInfo = () => {
  const studentid = JSON.parse(getItem('id'))
  const { dataUser, setDataUser } = useContext(GeneralContext)
  var jalaali = require('jalaali-js')
  const [date, setDate] = useState(new Date())
  const [name, setName] = useState(dataUser.fullName)
  const [phone, setPhone] = useState(dataUser.phoneNumber)
  const [national, setNational] = useState(dataUser.nationalId)
  const [img, setImg] = useState(dataUser.profile)
  const [email, setEmail] = useState(dataUser.email)
  const [show, setShow] = useState(false);
  const [birth, setBirth] = useState(dataUser.birthDate);

  useEffect(() => {
    var datePirsian = dataUser.birthDate.split("/")
    var dateEnglish = jalaali.toGregorian(Number(datePirsian[0]), Number(datePirsian[1]), Number(datePirsian[2]))
    setDate(new Date(`${dateEnglish.gy}/${dateEnglish.gm}/${dateEnglish.gd}`))
  }, [])

  const updateDataUser = async (image) => {
    const UpdatedataUser = {
      fullName: name,
      email,
      phoneNumber: phone,
      birthDate: birth,
      nationalId: national,
      profile: image ? image : img,
      id: studentid
    }
    const response = await updateStudetInform(UpdatedataUser);

    if (response.data.result) {

      const data = {
        fullName: response.data.result.fullName,
        email: response.data.result.email,
        phoneNumber: response.data.result.phoneNumber,
        birthDate: response.data.result.birthDate,
        nationalId: response.data.result.nationalId,
        profile: response.data.result.profile,
        _id: response.data.result._id,
        role: response.data.result.role,
        isActive: response.data.result.isActive,
      }
      setImg(image)
      setDataUser(data)
      toast.success(response.data.message[0].message)
    }
  }


  return (
    <>
      <div className="MainbarContainer MainbarContainerEditInfo">
        <div className="MainbarEditInfo">
          <div className="MainbarEditInfoTopic">
            <p> ویرایش اطلاعات کاربری </p>
            <hr></hr>
          </div>
          <AvatarPhoto
            src={dataUser.profile}
            changePic={() => { setShow(true) }}
            activation={dataUser.isActive ? "active" : 'deAvtice'}
            className="MainbarEditInfoProfile"
            classNameAddPic="addPicCLick"
            size='xl' />
          <div className="MainbarEditInfoInputs">
            <div>

              <Input
                title="نام کاربری"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                className="enterInputPanel"
              />
            </div>
            <div>

              <Input
                title="شماره تماس"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value)
                }}
                className="enterInputPanel"
              />
            </div>
            <div>

              <Input
                title="شماره ملی"
                value={national}
                onChange={(e) => {
                  setNational(e.target.value)
                }}
                className="enterInputPanel"
              />
            </div>
            <div>

              <DatePickerCustome
                className="enterInputPanel"
                label={fa.TITLE_BIRTHDAY}
                maxDate={new Date()}
                onChange={(e) => {
                  setDate(e);
                  setBirth(`${e.year}/${e.month.number}/${e.day}`)
                }}
                value={date} />
            </div>
          </div>
          <div className="MainbarEditInfoButton">
            <Btn
              color="goal"
              text={fa.INSERT_NEW_CHANGES}
              elementClass="mediumBtnCh"
              variant="contained"
              onChange={() => {
                trackPromise(updateDataUser())
              }}
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
      {show && <UploadPhoto
        src={dataUser.profile}
        showPop={show}
        handleClose={(imgUpdate) => {
          setShow(!show);
          trackPromise(updateDataUser(imgUpdate))
        }}
        handleCloseWithOutSave={()=>{setShow(false)}} />}
    </>
  );
};

export { MainbarEditInfo };
