import React from "react";
import "./InputOption.css";

const InputOption = (props) => {
  return (
    <div className="inputOption" onClick={props.method}>
      <props.Icon style={{ color: props.color }} />
      <h4>{props.title}</h4>
    </div>
  );
};

export default InputOption;
