import React, { Component } from "react";
import Toolsbar from "./Toolbar/Toolbar";
import classes from "./Layout.module.css";
import Login from "./Logincard/Logincard";
export class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Toolsbar customername={this.props.customername} />
      </div>
    );
  }
}

export default Layout;
