import { toast } from "react-toastify";
import { useState } from "react";
import { Input } from "./../common/Input/Input";
import { Btn } from "./../common/Button/Btn";
import * as fa from "../../constants/persianStrings"
import { forgetPassUser, resetPassUser } from "../../api/Core/Login_Register";
import { getItem } from "../../api/storage/storage";
import { getStudentById } from "../../api/Core/Student_Manage";
import "./MainbarPassword.css";

const MainbarPassword = () => {
  const [email, setEmail] = useState()
  const [wrongEmail, setWrongEmail] = useState()

  const [newPass, setNewPass] = useState()
  const [wrongNewPass, setWrongNewPass] = useState()

  const [againNewPass, setAgainNewPass] = useState()
  const [wrongAgainNewPass, setWrongAgainNewPass] = useState()

  const userId = JSON.parse(getItem('id'))

  const onSubmit = async () => {
    if (email && newPass && againNewPass && newPass === againNewPass) {
      const data = {
        email
      }
      let response = await forgetPassUser(data)
      if (response.data.success) {
        updateUser()
      }
    }
    if (!email) {
      setWrongEmail('ایمیل را وارد کنید!')
    }
    if (!newPass) {
      setWrongNewPass('رمز جدید وارد نشده!')
    }
    if (!againNewPass) {
      setWrongAgainNewPass('تکرار رمز را وارد نشده!')
    }
    if (newPass != againNewPass) {
      setWrongAgainNewPass('تکرار رمز اشتباه است!')
    }
  }

  const updateUser = async () => {
    let response = await getStudentById(userId);
    if (response.data.result) {

      UpdatePass(response.data.result.resetPasswordToken)
    }
  }

  const UpdatePass = async (TokenPass) => {
    const data = {
      tokenPass: TokenPass,
      password: newPass
    }
    let response = await resetPassUser(data)
    if (response.data.success) {
      toast.success(response.data.message[0].message)
    }
  }

  return (
    <div className="MainbarContainer MainbarContainerPassword">
      <div className="mainbarPassword">
        <div className="mainbarPasswordTopic">
          <p> تغییر رمز عبور </p>
          <hr></hr>
        </div>

        <div className="mainbarPasswordInputs">
          <Input
            title={fa.TITLE_EMAIL}
            className="enterInputPane2"
            value={email}
            onChange={(e) => {
              setWrongEmail('')
              setEmail(e.target.value)
            }}
            errorMessage={wrongEmail}
            error={wrongEmail} />
          <Input
            title={fa.TITLE_NEW_PASS}
            className="enterInputPane2"
            password={true}
            value={newPass}
            onChange={(e) => {
              setWrongNewPass('')
              setNewPass(e.target.value)
            }}
            error={wrongNewPass}
            errorMessage={wrongNewPass} />
          <Input
            title={fa.TITLE_AGAIN_NEW_PASS}
            className="enterInputPane2"
            password={true}
            value={againNewPass}
            onChange={(e) => {
              setWrongAgainNewPass('')
              setAgainNewPass(e.target.value)
            }}
            error={wrongAgainNewPass}
            errorMessage={wrongAgainNewPass} />
        </div>

        <div className="mainbarPasswordButton">
          <Btn
            color="goal"
            text={fa.INSERT_NEW_CHANGES}
            elementClass="mediumBtnCh"
            variant="contained"
            onChange={onSubmit}
          />
          <Btn
            color="warning"
            text={fa.IGNORE_NEW_CHANGES}
            elementClass="mediumBtnCh"
            variant="outlined"
            borderColor="#FF0000"
            onChange={() => {
              setWrongAgainNewPass('');
              setWrongEmail('');
              setWrongNewPass('')
              setNewPass('')
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { MainbarPassword };
