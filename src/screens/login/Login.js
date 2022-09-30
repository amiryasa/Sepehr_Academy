import { useNavigate } from "react-router-dom";

import { Checkbox } from "@mui/material";

import { Btn } from "./../../components/common/Button/Btn";
import { Input } from "./../../components/common/Input/Input";
import * as fa from "../../constants/persianStrings";
import "./Login.css";

import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("ایمیل خود را وارد نمایید!")
    .email("ایمیل خود را به درستی وارد نمایید!")
    .required("!وارد کردن ایمیل الزامی است"),
  password: yup
    .string("!رمز عبور خود را وارد نمایید")
    .min(8, "!رمزعبورتان حداقل باید شامل 8 کارکتر باشد")
    .required("!وارد کردن رمز عبور الزامی است")
    .matches(/^[a-zA-Z0-9]*$/,'202')
});

const Login = () => {
  const navigator = useNavigate();
  const checkboxChangeHandler = () => {};

  const myFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigator("/afterlogin");
    },
  });

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
          <p
            className="loginInputHolderForP"
            onClick={() => navigator("/forgetPass")}
          >
            {" "}
            {fa.FORGET_PASS}{" "}
          </p>

          <div className="loginInputHolderRemainder">
            <Checkbox
              size="small"
              style={{ color: "#043D72" }}
              onChange={checkboxChangeHandler}
            />
            <p className="loginInputHolderRemainderP1"> {fa.REMEMBER_ME} </p>
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
              click="/register"
            />
          </div>
        </form>
      </div>
      <div className="loginImageHolder"></div>
    </div>
  );
};

export { Login };
