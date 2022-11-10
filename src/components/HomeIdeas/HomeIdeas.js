import { useContext, useEffect, useRef, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import { GeneralContext } from "../../providers/GeneralContext"
import { Btn } from "../common/Button/Btn";
import { Input } from "../common/Input/Input";
import * as fa from "../../constants/persianStrings";
import "./HomeIdeas.css";
import { getItem } from "../../api/storage/storage";
import { getStudentById } from "../../api/Core/Student_Manage";
import { contactUs } from "../../api/Core/ContactUs";
import { toast } from "react-toastify";

const HomeIdeas = () => {
  const { language, themePage } = useContext(GeneralContext);
  const [studentInfo, setStudentInfo] = useState();
  const [input01, setInput01] = useState();
  const [input02, setInput02] = useState();
  const [input03, setInput03] = useState();

  const textInput = useRef(null);
  const id = JSON.parse(getItem('id'));

  useEffect(() => {
    trackPromise(inputFeilder());
  }, [])

  const inputFeilder = async () => {
    if (id) {
      let result = await getStudentById(id);

      setStudentInfo(result.data.result);
    }
  }

  const btnHandler = async () => {
    if (id) {
      let response = await contactUs({
        email: studentInfo.email,
        name: studentInfo.fullName,
        text: input03
      })
      if (response.data.message[0].eventId === 200) {
        toast.success('پیام شما با موفقیت ارسال شد!')
      }
    }
    else {
      let response = await contactUs({
        email: input01,
        name: input02,
        text: input03
      })
      if (response.data.message[0].eventId === 200) {
        toast.success('پیام شما با موفقیت ارسال شد!')
      }
    }
  }

  return (
    <>
      <div className={language === 'fa' ? "homeH2 h26" : "homeH2En h26En"} data-aos="fade-up" data-aos-duration="1000">
        <h2 className={`${themePage}Intro`}> {language === 'fa' ? fa.TITLE_RESPONSE : fa.TITLE_RESPONSE_EN} </h2>
      </div>
      <div className={language === 'fa' ? "ideaCantainer" : "ideaCantainerEn"}>
        <div
          className="ideaInput"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          {studentInfo ?

            <>
              <div className="ideaInputName">
                <Input
                  title={language === 'fa' ? fa.TITLE_NAME_USER : fa.TITLE_NAME_USER_EN}
                  width="236px"
                  value={studentInfo ? studentInfo.fullName : null}
                />
              </div>
              <div className="ideaInputEmail">
                <Input
                  title={language === 'fa' ? fa.TITLE_EMAIL_USER : fa.TITLE_EMAIL_USER_EN}
                  width="236px"
                  value={studentInfo ? studentInfo.email : null}
                />
              </div>
            </>

            :
            <>
              <div className="ideaInputName">
                <Input
                  title={language === 'fa' ? fa.TITLE_NAME_USER : fa.TITLE_NAME_USER_EN}
                  width="236px"
                  onChange={event => setInput01(event.target.value)}
                />
              </div>
              <div className="ideaInputEmail">
                <Input
                  title={language === 'fa' ? fa.TITLE_EMAIL_USER : fa.TITLE_EMAIL_USER_EN}
                  width="236px"
                  onChange={event => setInput02(event.target.value)}
                />
              </div>
            </>}
          <div className="ideaInputMessage">
            <Input
              title={language === 'fa' ? fa.TITLE_DESCRIPT_MESSAGE : fa.TITLE_DESCRIPT_MESSAGE_EN}
              width="236px"
              multiline={true}
              row={4}
              refInput={textInput}

              onChange={event => setInput03(event.target.value)}
            />
          </div>

          <Btn
            color="goal"
            text={language === 'fa' ? fa.INSERT_MESSAGE : fa.INSERT_MESSAGE_EN}
            margin={language === 'fa' ? "32px 84px 84px 18px" : "31px 83px 26px 85px"}
            elementClass="smallBtn"
            variant="contained"

            onChange={() => {
              trackPromise(btnHandler())
            }}
          />
        </div>
      </div>
    </>
  );
};

export { HomeIdeas };
