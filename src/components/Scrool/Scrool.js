import { useContext } from "react";
import './Scrool.css';
import { GeneralContext } from "../../providers/GeneralContext"

const Scrool = () => {
  const { language } = useContext(GeneralContext);
  const onClickHandler2 = () => {
    var rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 630,
      behavior: "smooth"
    })
  }
  return (
    <div class={language === 'fa' ? 'container' : "containerEn"} onClick={onClickHandler2}>
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
    </div>
  );
};

export { Scrool };

