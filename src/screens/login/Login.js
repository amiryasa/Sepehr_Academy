import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Checkbox } from "@mui/material";
import { Btn } from "./../../components/common/Button/Btn";
import { Input } from "./../../components/common/Input/Input";
import * as fa from "../../constants/persianStrings";
import { loginUser } from "../../api/Core/Login_Register";
import { getItem, removeItem, setItem } from "../../api/storage/storage";
import { GeneralContext } from "../../providers/GeneralContext";
import { getStudentById } from "../../api/Core/Student_Manage";
import "./Login.css";

const validationSchema = yup.object({
  email: yup
    .string("ایمیل خود را وارد نمایید!")
    .email("ایمیل خود را به درستی وارد نمایید!")
    .required("وارد کردن ایمیل الزامی است!"),

  password: yup
    .string("ایمیل خود را وارد نمایید!")
    .required("وارد کردن رمزعبور الزامی است! ")
    .min(8, "رمزعبور باید حداقل 8 کارکتر باشد!")
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "رمزعبور به اندازه‌ی کافی قوی نیست!"),
});

const Login = () => {
  const userData = JSON.parse(getItem('saveDataUser'))
  const navigator = useNavigate();
  const { setDataUser, backShop, setBackShop } = useContext(GeneralContext)
  const [check, setCheck] = useState(userData.email ? true : false)

  const checkboxChangeHandler = (e) => {
    setCheck(e.target.checked)
  };

  const myFormik = useFormik({
    initialValues: {
      email: userData ? userData.email : "",
      password: userData ? userData.password : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password
      }
      if (check === true) {
        setItem('saveDataUser', JSON.stringify(data))
      } else removeItem('saveDataUser')
      login(values)
    },
  });

  const login = async (data) => {
    let response = await loginUser(data);
    if (response.data.result) {
      setItem("token", response.data.result.jwtToken);
      setItem('id', JSON.stringify(response.data.result.studentModel._id));
      getDataUserById(response.data.result.studentModel._id)
    }
  }

  const getDataUserById = async (id) => {
    let response = await getStudentById(id)
    setDataUser(response.data.result);
    if (backShop) { setBackShop(false); navigator('/shoppingCart') }
    else navigator("/")
  }

  return (
    <div className="loginHolder">
      <div className="loginHolderLogo" onClick={() => navigator("/")}>
        {" "}
        <p>آموزشگاه کدنویسی بحر</p>{" "}
      </div>

      <div className="loginInputHolder">
        <p> {fa.TITLE_LOGIN_USER} </p>
        <form onSubmit={myFormik.handleSubmit}>
          <div className="loginInputHolderReall">
            <div className="loginInputHolderReallEmail">
              <Input
                title="ایمیل کاربر"
                className="enterInputBig"
                name="email"
                onChange={myFormik.handleChange}
                value={myFormik.values.email}

                error={myFormik.touched.email && Boolean(myFormik.errors.email)}
                errorMessage={myFormik.touched.email && myFormik.errors.email}
              />
            </div>
            <div className="loginInputHolderReallPassword">
              <Input
                title="رمز عبور"
                className="enterInputBig"
                name="password"
                onChange={myFormik.handleChange}
                value={myFormik.values.password}
                password={true}
                error={myFormik.touched.password && Boolean(myFormik.errors.password)}
                errorMessage={myFormik.touched.password && myFormik.errors.password}
              />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {/* <p
              className="loginInputHolderForP"
              onClick={() => navigator("/forgetPass")}
            >
              {" "}
              {fa.FORGET_PASS}{" "}
            </p> */}

            <p
              className="loginInputHolderForP"
              onClick={() => window.location.replace('http://localhost:3001/dashboard')}
            >
              {" "}
              {fa.LOGIN_ADMIN}{" "}
            </p>
          </div>
          <div className="loginInputHolderRemainder">
            <Checkbox
              size="small"
              style={{ color: "#043D72" }}
              onChange={checkboxChangeHandler}
              checked={check}
            />
            <p
              className="loginInputHolderRemainderP1"
            > {fa.REMEMBER_ME} </p>
            <p className="loginInputHolderRemainderP2">({fa.SHARED_SYSTEM})</p>
          </div>

          <div className="loginButtonHolderReall">
            <Btn
              color="goal"
              text={fa.LOGIN}
              elementClass="mediumBtnCh2"
              variant="contained"
              type="submit"
            />
            <Btn
              color="info"
              text={fa.SIGN_UP}
              elementClass="mediumBtnCh2"
              variant="outlined"
              borderColor="#00ADEF"
              onChange={() => {
                navigator("/register");
              }}
            />
          </div>
        </form>
      </div>
      <div className="loginImageHolder"></div>
    </div>
  );
};

export { Login };
