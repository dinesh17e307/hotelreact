import React from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import classes from "./Buttons.module.css";
import Routing from "../../Routing/Routing";
const Buttons = (props) => (
  <div>
    <Button
      variant="contained"
      color="secondary"
      onClick={<Routing to={props.children} />}
    >
      {props.children}
    </Button>
  </div>
);
export default Buttons;
