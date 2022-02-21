import React from "react";
import "../../styles/styles.scss";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="spinner__div">
      <Spinner animation="border"></Spinner>
    </div>
  );
};

export default Loading;
