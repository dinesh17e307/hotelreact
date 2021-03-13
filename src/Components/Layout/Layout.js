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
      sidedraw: !this.state.sidedraw,
    });
  };
  render() {
    return (
      <div className={classes.Layout}>
        <Toolsbar
          customername={this.props.customername}
          toggle={this.togglesidedrawerhandler}
        />
        <Sidenav
          open={this.state.sidedraw}
          toggle={this.togglesidedrawerhandler}
        />
      </div>
    );
  }
}
export default Layout;
