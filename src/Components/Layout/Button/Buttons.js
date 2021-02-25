import React from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import classes from "./Buttons.module.css";
import Routing from "../../Routing/Routing";
const Buttons = (props) => {
  return (
    <div className={classes.Buttons}>
      <Link to={"/" + props.children}>
        {" "}
        <Button variant="contained" color="secondary">
          {props.children}
        </Button>
      </Link>
    </div>
  );
};
export default Buttons;
