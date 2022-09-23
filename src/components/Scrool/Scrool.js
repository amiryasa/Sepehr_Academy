import './Scrool.css';

const Scrool = () => {

  const onClickHandler2 = () => {
    var rootElement = document.documentElement;
    rootElement.scrollTo({
        top: 630,
        behavior: "smooth"
      })
}
  return (
    <div class="container" onClick={onClickHandler2}>
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
    </div>
  );
};

export { Scrool };

