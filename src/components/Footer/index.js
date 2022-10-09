import { useContext } from "react";
import "./footer.css";
import * as fa from '../../constants/persianStrings';
import { GeneralContext } from "../../providers/GeneralContext"

const Footer = () => {
  const { language } = useContext(GeneralContext);

  const myClick1 = () => {
    navigator.clipboard.writeText("Bahr.Academy@gmail.com");
  };

  const myClick2 = () => {
    navigator.clipboard.writeText("09111231234");
  };

  const element1 = document.getElementById('webgah');

  const handleInputClick = (e) => {
    element1.style.borderColor = 'red';
  }

  return (
    <div className="FooterHolder">
      <div className={language === 'fa' ? "footerWeblog" : "footerWeblogEn"}>
        <input onClick={handleInputClick} id='webgah' type="text" placeholder={language === 'fa' ? fa.PLACEHOLDER_BTN : fa.PLACEHOLDER_BTN_EN} />
        <div className="footerWeblogMainButton"> {language === 'fa' ? fa.SEND_EMAIL : fa.SEND_EMAIL_EN} </div>
      </div>

      <div className="footerContact">
        <p>Bahr.Academy@gmail.com</p>
        <p>0911 123 1234</p>
        <p>Noorgoon Team</p>
      </div>

      <div className="footerSocial">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={language === 'fa' ? "footerLocation" : "footerLocationEn"}>
        {" "}
        <p>{language === 'fa' ? fa.ADDRESS : fa.ADDRESS_EN}</p>{" "}
      </div>
    </div>
  );
};

export { Footer };
