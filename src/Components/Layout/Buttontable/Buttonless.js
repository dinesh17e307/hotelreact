import React from "react";
import Button from "@material-ui/core/Button";
const Buttonless = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.less(props.item)}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default Buttonless;
