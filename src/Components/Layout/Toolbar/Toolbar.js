import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import classes from "./Toolbal.module.css";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Sidenav from "../sidenav/Sidenav";

class Toolsbar extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar className={classes.Toolbar}>
            {/* <Sidenavbar clicked={this.props.togglesidenavbar} /> */}
            <Typography variant="h6">Adyar Anandha bhavan</Typography>
            <Button>
              <Link to="/myorder">myorder</Link>
            </Button>
            <Button>
              <Link to="/hotel">menu</Link>
            </Button>
            <Button color="inherit">{this.props.customername}</Button>
            <Sidenav />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Toolsbar;
