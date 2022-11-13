import { useContext, useEffect, useState } from "react";
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
  const id = JSON.parse(getItem('id'));
  const { language, themePage } = useContext(GeneralContext);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [description, setDescription] = useState();

  useEffect(() => {
    if (id)
      trackPromise(inputFeilder(id));
  }, [id])

  const inputFeilder = async (id) => {
    let response = await getStudentById(id);
    if (response.data.result) {
      setEmail(response.data.result.email)
      setName(response.data.result.fullName)
    }

  }


  const btnHandler = async () => {
    let response = await contactUs({
      email,
      name,
      text: description
    })
    if (response.data.message[0].eventId === 200) {
      toast.success('پیام شما با موفقیت ارسال شد!')
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
          <div className="ideaInputName">
            <Input
              value={name}
              title={language === 'fa' ? fa.TITLE_NAME_USER : fa.TITLE_NAME_USER_EN}
              width="236px"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className="ideaInputEmail">
            <Input
              value={email}
              title={language === 'fa' ? fa.TITLE_EMAIL_USER : fa.TITLE_EMAIL_USER_EN}
              width="236px"
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className="ideaInputMessage">
            <Input
              title={language === 'fa' ? fa.TITLE_DESCRIPT_MESSAGE : fa.TITLE_DESCRIPT_MESSAGE_EN}
              width="236px"
              multiline={true}
              row={4}
              value={description}
              onChange={event => setDescription(event.target.value)}
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
