import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Btn } from "../Button/Btn";

import { Input } from "./../Input/Input";

import "./Validation.css";


const inputValidation = Yup.object().shape({
    email: Yup.string().email().required(),
})


const Validation = () => {

    const formHandler = (values) => {
        console.log(values);
    }

  return (
    <div>
    <h2> LoginForm </h2>
      <Formik initialValues={{ email: "", password: "" }} onSubmit={formHandler} validationSchema={inputValidation} >
        <Form>

          <Field name='email' placeholder='Enter youe email'></Field>
          <Field name='password' type='password' placeholder='Enter youe password'></Field>

          <button type="submit"> login </button>
          
        </Form>
      </Formik>
    </div>
  );
};

export { Validation };
