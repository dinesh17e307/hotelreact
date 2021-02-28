import classes from "./Hotelmenu.module.css";
import React, { Component } from "react";
import Buttons from "../../Components/Layout/Button/Buttons";
import Listmenu from "../../Components/Layout/LIstmenu/Listmenu";
import Menubutton from "../../Components/Menubutton/Menubutton";
import Routing from "../../Components/Routing/Routing";

export class Hotelmenu extends Component {
  state = {
    arr: [],
  };

  render() {
    return (
      <div className={classes.Hotelmenu}>
        <Listmenu />
        <Menubutton />
      </div>
    );
  }
}

export default Hotelmenu;
