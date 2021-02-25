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
import Menulisttable from "../Menulisttable/Menulisttable";
import Listmenu from "../Layout/LIstmenu/Listmenu";
const items = [
  "southindian",
  "northindian",
  "chinese",
  "tandhoori",
  "freshjuice",
  "icecreams",
  "sweets",
];
let arr = [];
export class Menubutton extends Component {
  state = {
    order: [],
    routepath: "",
  };
  additemhandler = (e) => {
    arr.push(e);
    this.setState({
      order: arr,
    });
  };
  routehandler = (e) => {
    this.setState({
      routepath: e,
    });
  };
  render() {
    console.log(this.state);
    let item = items.map((e) => {
      return (
        <Buttons click={this.routehandler} key={e.concat(Math.random())}>
          {e}
        </Buttons>
      );
    });
    return (
      <div>
        <section>
          <Toolbar className={classes.Header}>{item}</Toolbar>
        </section>

        <div className={classes.Menubutton}>
          <Switch>
            <Route exact path="/southindian" component={Southindian} />
            <Route exact path="/northindian" component={Northindian} />
            <Route path="/chinese" component={Chinese} />
            <Route path="/tandhoori" component={Thandhoori} />
            <Route path="/freshjuice" component={Freshjuice} />
            <Route path="/icecreams" component={Icecreams} />
            <Route path="/sweets" component={Sweets} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Menubutton;
