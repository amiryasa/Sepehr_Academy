import { Btn } from "../common/Button/Btn";
import { Input } from "../common/Input/Input";
import * as fa from "../../constants/persianStrings";
import "./HomeIdeas.css";

const HomeIdeas = () => {
  return (
    <>
      <div className="homeH2 h26" data-aos="fade-up" data-aos-duration="1000">
        <h2> {fa.TITLE_RESPONSE} </h2>
      </div>
      <div className="ideaCantainer">
        <div
          className="ideaInput"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div className="ideaInputName">
            <Input
              title={fa.TITLE_NAME_USER}
              width="236px"
            />
          </div>
          <div className="ideaInputEmail">
            <Input
              title={fa.TITLE_EMAIL_USER}
              width="236px"
            />
          </div>
          <div className="ideaInputMessage">
            <Input
              title={fa.TITLE_DESCRIPT_MESSAGE}
              width="236px"
              multiline={true}
              row={4}
            />
          </div>

          <Btn
            color="goal"
            text={fa.INSERT_MESSAGE}
            margin="32px 84px 84px 18px"
            elementClass="smallBtn"
            variant="contained"
          />
        </div>
      </div>
    </>
  );
};

export { HomeIdeas };
