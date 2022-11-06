import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { Btn } from "../../components/common/Button/Btn";
import DatePickerCustome from "../../components/common/datePicker/DatePicker";
import { Input } from "../../components/common/Input/Input";
import * as fa from "../../constants/persianStrings";
import photo from "../../assets/images/Register/photo.png"
import "./Register.css";
import { registerUser } from "../../api/Core/Login_Register";
import { validationSchema } from "../../constants/validationSchema"


const Register = () => {
  const navigator = useNavigate();
  const [date, setDate] = useState(null);
  const [birth, setBirth] = useState(null);


  const myFormik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      id: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      ;
      const dataUser = {
        fullName: values.name,
        email: values.email,
        password: values.password,
        phoneNumber: values.mobile,
        birthDate: birth,
        nationalId: values.id,
        profile: photo
      }
      insertNewUser(dataUser);
    },
  });

  const insertNewUser = async (data) => {
    let response = await registerUser(data);
    alert(response.message.message);
  }

  return (
    <div className="registerHolder">
      <div className="registerHolderLogo" onClick={() => navigator("/")}>
        <p>آموزشگاه کدنویسی بحر</p>{" "}
      </div>
      <div className="registerInputHolder">
        <p> {fa.TITLE_LOGIN_USER} </p>
        <form onSubmit={myFormik.handleSubmit}>
          <div className="registerInputHolderReall">
            <div>
              <Input
                title={fa.TITLE_NAME_USER}
                className="enterInputSmall"
                name="name"
                onChange={myFormik.handleChange}
                value={myFormik.values.name}
                error={myFormik.touched.name && Boolean(myFormik.errors.name)}
                errorMessage={myFormik.touched.name && myFormik.errors.name}
              />
            </div>
            <div>
              <Input
                title={fa.TITLE_PHONE}
                className="enterInputSmall"
                name="mobile"
                onChange={myFormik.handleChange}
                value={myFormik.values.mobile}
                error={
                  myFormik.touched.mobile && Boolean(myFormik.errors.mobile)
                }
                errorMessage={myFormik.touched.mobile && myFormik.errors.mobile}
              />
            </div>
            <div>
              <Input
                title={fa.TITLE_NATIONAL_CODE}
                className="enterInputSmall"
                name="id"
                onChange={myFormik.handleChange}
                value={myFormik.values.id}
                error={myFormik.touched.id && Boolean(myFormik.errors.id)}
                errorMessage={myFormik.touched.id && myFormik.errors.id}
              />
            </div>
            <div className="datePicker_div">
              <DatePickerCustome
                label={fa.TITLE_BIRTHDAY}
                maxDate={new Date()}
                onChange={(e) => {
                  setDate(e);
                  setBirth(`${e.year}/${e.month.number}/${e.day}`)
                }}
                value={date}

              />
            </div>
            {/* <div>
              <Input
                title={fa.TITLE_BIRTHDAY}
                className="enterInputSmall"
                name="birthday"
                onChange={myFormik.handleChange}
                value={myFormik.values.birthday}
                error={myFormik.touched.birthday && Boolean(myFormik.errors.birthday)}
                errorMessage={myFormik.touched.birthday && myFormik.errors.birthday}
              />
            </div> */}
            <div>
              <Input
                title={fa.TITLE_EMAIL_USER}
                className="enterInputSmall"
                name="email"
                onChange={myFormik.handleChange}
                value={myFormik.values.email}
                error={myFormik.touched.email && Boolean(myFormik.errors.email)}
                errorMessage={myFormik.touched.email && myFormik.errors.email}
              />
            </div>
            <div>
              <Input
                title={fa.TITLE_PASS}
                className="enterInputSmall"
                name="password"
                onChange={myFormik.handleChange}
                value={myFormik.values.password}
                password={true}
                error={
                  myFormik.touched.password && Boolean(myFormik.errors.password)
                }
                errorMessage={
                  myFormik.touched.password && myFormik.errors.password
                }
              />
            </div>
          </div>

          <div className="registerButtonHolderReall">
            <Btn
              color="info"
              text={fa.SIGN_UP}
              elementClass="mediumBtnCh"
              variant="contained"
              type="submit"
            />
            <Btn
              color="goal"
              text={fa.LOGIN}
              elementClass="mediumBtnCh"
              variant="outlined"
              borderColor="#04A641"
              onChange={() => {
                navigator("/login");
              }}
            />
          </div>
        </form>
      </div>
      <div className="registerImageHolder"></div>
    </div>
  );
};

export { Register };
