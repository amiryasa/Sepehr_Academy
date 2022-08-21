import './Scrool.css';

const Scrool = () => {
  return (
    <div class="container" onClick={() => (window.scroll(0, 630))}>
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
    </div>
  );
};

export { Scrool };

