import React from "react";
import { Formik, useFormik } from "formik";
import * as yup from 'yup';
import { Input } from "../Input/Input";
import { Btn } from "../Button/Btn";

const validationSchema = yup.object({
  name: yup
    .string('Enter your username')
    .min(4, 'Username should be of minimum 4 characters length')
    .required('Email is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});


const Validation = () => {
  const myFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    },
  });


  return (
    <div style={{ width: "300px", margin: "30px auto" }}>
      <form onSubmit={myFormik.handleSubmit}>
        <Input
          title="نام کاربری"
          className="enterInputBig"
          name="name"
          onChange={myFormik.handleChange}
          value={myFormik.values.name}
        />

        <Input
          title="ایمیل کاربر"
          className="enterInputBig"
          name="email"
          onChange={myFormik.handleChange}
          value={myFormik.values.email}
        />

        <Input
          title="رمز عبور"
          className="enterInputBig"
          name="password"
          onChange={myFormik.handleChange}
          value={myFormik.values.password}
        />

        <div style={{ width: "300px", margin: "25px 70px" }}>
          <Btn
            color="goal"
            text="ثبت نام"
            elementClass="mediumBtnCh2"
            variant="contained"
            click=""
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export { Validation };
