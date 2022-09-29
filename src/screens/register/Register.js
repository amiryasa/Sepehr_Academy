import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";

import { Btn } from "../../components/common/Button/Btn";
import { Input } from "../../components/common/Input/Input";
import * as fa from "../../constants/persianStrings";

import "./Register.css";

const validationSchema = yup.object({
  email: yup
    .string("ایمیل خود را وارد نمایید!")
    .email("ایمیل خود را به درستی وارد نمایید!")
    .required("!وارد کردن ایمیل الزامی است"),
  password: yup
    .string("!رمز عبور خود را وارد نمایید")
    .min(8, "!رمزعبورتان حداقل باید شامل 8 کارکتر باشد")
    .required("!وارد کردن رمز عبور الزامی است")
    .matches(/^[a-zA-Z0-9]*$/, "202"),

    name: yup
    .string("نام خود را وارد نمایید!")
    .required("!وارد کردن نام الزامی است")
    .matches(/^[a-zA-Z ]*$/, "نام را با حروف انگلیسی وارد نمایید!")
    .min(3,"نام حداقل باید شامل 3 کارکتر باشد!")
    .max(12, "نام حداقل باید شامل12  کارکتر باشد"),
    
    mobile: yup
    .string("ایمیل خود را وارد نمایید!")
    .email("ایمیل خود را به درستی وارد نمایید!")
    .required("!وارد کردن ایمیل الزامی است"),
    
    id: yup
    .string("ایمیل خود را وارد نمایید!")
    .email("ایمیل خود را به درستی وارد نمایید!")
    .required("!وارد کردن ایمیل الزامی است"),

    birthday: yup
    .string("ایمیل خود را وارد نمایید!")
    .email("ایمیل خود را به درستی وارد نمایید!")
    .required("!وارد کردن ایمیل الزامی است"),

    email: yup
    .string("ایمیل خود را وارد نمایید!")
    .email("ایمیل خود را به درستی وارد نمایید!")
    .required("!وارد کردن ایمیل الزامی است"),

    password: yup
    .string("ایمیل خود را وارد نمایید!")
    .email("ایمیل خود را به درستی وارد نمایید!")
    .required("!وارد کردن ایمیل الزامی است"),

});

const Register = () => {
  const navigator = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      id: "",
      birthday: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigator("/login");
    },
  });

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
                error={myFormik.touched.mobile && Boolean(myFormik.errors.mobile)}
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
            <div>
              <Input
                title={fa.TITLE_BIRTHDAY}
                className="enterInputSmall"
                name="birthday"
                onChange={myFormik.handleChange}
                value={myFormik.values.birthday}
                error={myFormik.touched.birthday && Boolean(myFormik.errors.birthday)}
                errorMessage={myFormik.touched.birthday && myFormik.errors.birthday}
              />
            </div>
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
                error={myFormik.touched.password && Boolean(myFormik.errors.password)}
                errorMessage={myFormik.touched.password && myFormik.errors.password}
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
              click="/login"
            />
          </div>
        </form>
      </div>
      <div className="registerImageHolder"></div>
    </div>
  );
};

export { Register };
