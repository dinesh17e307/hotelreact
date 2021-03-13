import React, { Component } from "react";
import Toolsbar from "./Toolbar/Toolbar";
import classes from "./Layout.module.css";
import Login from "./Logincard/Logincard";
import Rout from "../Routing/Routing";
import Sidenav from "./sidenav/Sidenav";
export class Layout extends Component {
  state = {
    sidedraw: false,
  };
  closesidedrawhandler = () => {
    this.setState({
      sidedraw: false,
    });
  };
  togglesidedrawerhandler = () => {
    this.setState({
      sidedraw: true,
    });
  };
  render() {
    return (
      <div className={classes.Layout}>
        <Toolsbar customername={this.props.customername} />
      </div>
    );
  }
}
export default Layout;
