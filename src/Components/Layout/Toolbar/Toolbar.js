import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import classes from "./Toolbar.module.css";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Sidenav from "../sidenav/Sidenav";
import Toggle from "../sidenav/Toggle/Toggle";
import Login from "../Logingoogle/Loginwithgoogle";
import { connect } from "react-redux";
import * as actions from "../../Store/action";
class Toolsbar extends Component {
  render() {
    console.log(this.props.islogin);
    return (
      <div>
        <AppBar>
          <Toggle toggle={this.props.toggle} />
          <div className={classes.tool}>
            <Typography variant="h6">
              <Link to="/">A2B</Link>
            </Typography>
            <Button disabled={true}>
              <Link
                style={{ display: this.props.islogin ? "" : "none" }}
                to="/myorder"
              >
                myorder
              </Link>
            </Button>
            <Button>
              <Link
                style={{ display: this.props.islogin ? "" : "none" }}
                to="/hotel"
              >
                menu
              </Link>
            </Button>
            <Button color="inherit">{this.props.customername}</Button>
          </div>
        </AppBar>
      </div>
    );
  }
}

const mapStateWithProps = (state) => {
  return {
    islogin: state.islogin,
  };
};
const mapdispatchtoprops = (dispatch) => {
  return {
    onLogin: () => dispatch({ type: actions.LOGIN }),
  };
};
export default connect(mapStateWithProps, mapdispatchtoprops)(Toolsbar);
