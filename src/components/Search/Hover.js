import React from "react";
import "./hover.scss";
import "../../styles/styles.scss";

const Hover = (props) => {
  console.log(props);
  return (
    <div className="hover">
      <div className="hover__no-hover">{props.children}</div>
      <div className="hover__hover">
        <button type="submit" onClick={props.findPicFn}>
          {props.onHover}
        </button>
      </div>
    </div>
  );
};

export default Hover;
