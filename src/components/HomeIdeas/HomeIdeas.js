import { useContext } from "react";

import { GeneralContext } from "../../providers/GeneralContext"
import { Btn } from "../common/Button/Btn";
import { Input } from "../common/Input/Input";
import * as fa from "../../constants/persianStrings";
import "./HomeIdeas.css";

const HomeIdeas = () => {
  const { language,themePage } = useContext(GeneralContext);
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
              title={language === 'fa' ? fa.TITLE_NAME_USER : fa.TITLE_NAME_USER_EN}
              width="236px"
            />
          </div>
          <div className="ideaInputEmail">
            <Input
              title={language === 'fa' ? fa.TITLE_EMAIL_USER : fa.TITLE_EMAIL_USER_EN}
              width="236px"
            />
          </div>
          <div className="ideaInputMessage">
            <Input
              title={language === 'fa' ? fa.TITLE_DESCRIPT_MESSAGE : fa.TITLE_DESCRIPT_MESSAGE_EN}
              width="236px"
              multiline={true}
              row={4}
            />
          </div>

          <Btn
            color="goal"
            text={language === 'fa' ? fa.INSERT_MESSAGE : fa.INSERT_MESSAGE_EN}
            margin={language === 'fa' ? "32px 84px 84px 18px" : "31px 83px 26px 85px"}
            elementClass="smallBtn"
            variant="contained"
          />
        </div>
      </div>
    </>
  );
};

export { HomeIdeas };
