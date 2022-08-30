
import { Btn } from "../common/Button/Btn";
import { Input } from "../common/Input/Input";
import * as fa from '../../constants/persianStrings'
import './HomeIdeas.css';

const HomeIdeas = () => {
  return (
    <>
      <div className="homeH2 h26" data-aos="fade-up" data-aos-duration="1000">
        <h2> {fa.TITLE_RESPONSE} </h2>
      </div>
      <div className="ideaCantainer">
        <div className="ideaInput" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
          <Input title={fa.TITLE_NAME_USER} margin="25px 24px 0 24px" width="236px" />
          <Input title={fa.TITLE_EMAIL_USER} margin="33px 24px 0 24px" width="236px" />
          <Input
            title={fa.TITLE_DESCRIPT_MESSAGE}
            margin="33px 24px 0 24px"
            width="236px"
            multiline={true}
            row={4}
          />
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
