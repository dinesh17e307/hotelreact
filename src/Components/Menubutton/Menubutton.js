import classes from "./Menubutton.module.css";
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Buttons from "../Layout/Button/Buttons";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Southindian from "../Sections/Southindian";
import Northindian from "../Sections/Northindian";
import Chinese from "../Sections/Chinese";
import Thandhoori from "../Sections/Thandhoori";
import Icecreams from "../Sections/Icecreams";
import Freshjuice from "../Sections/Freshjuice";
import Sweets from "../Sections/Sweets";
import Routing from "../Routing/Routing";
const items = [
  "southindian",
  "northindian",
  "chinese",
  "tandhoori",
  "freshjuice",
  "icecreams",
  "sweets",
];
export class Menubutton extends Component {
  render() {
    let item = items.map((e) => {
      return <Buttons>{e}</Buttons>;
    });
    return (
      <div className={classes.Menubutton}>
        <Toolbar className={classes.Header}>{item}</Toolbar>
      </div>
    );
  }
}

export default Menubutton;
