import './Actevity.css';

const Actevity = (props) => {
  return (
    <div className="actevityHolder">
      <div className="actevityHolderIcon"></div>
      <p className="actevityHolderTopic"> افزودن دوره </p>
      <p className="actevityHolderDescription"> {props.data} </p>
    </div>
  );
}

export { Actevity };
