import React from "react";
import { Button } from "react-bootstrap";

export const Btn = ({ children, as, to, loadMoreFn }) => {
  return (
    <div className="btn-div text-center mt-5">
      <Button as={as} to={to} onClick={loadMoreFn}>
        {children}
      </Button>
    </div>
  );
};
