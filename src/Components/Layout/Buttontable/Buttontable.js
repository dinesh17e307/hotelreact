import React from "react";
import Button from "@material-ui/core/Button";
const Buttontable = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.add(props.item)}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default Buttontable;
