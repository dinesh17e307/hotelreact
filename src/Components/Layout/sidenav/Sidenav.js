import classes from "./Sidenav.module.css";
import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { connect } from "react-redux";
import * as actions from "../../Store/action";
const Sidenav = (props) => {
  let sideclass = [classes.sidedrawer, classes.open];
  if (props.open) {
    sideclass = [classes.sidedrawer, classes.close];
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={sideclass.join(" ")} onClick={props.closed}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">
            {" "}
            <Link to="/login">A2B</Link>
          </Typography>
          <Button disabled={true}>
            <Link
              style={{ display: props.islogin ? "" : "none" }}
              to="/myorder"
            >
              myorder
            </Link>
          </Button>
          <Button>
            <Link style={{ display: props.islogin ? "" : "none" }} to="/hotel">
              menu
            </Link>
          </Button>
          <Button color="inherit" onClick={props.onafterlogin()}>
            <Link to="/">{props.customername}</Link>
          </Button>
        </nav>
      </div>
    </div>
  );
};

const mapStateWithProps = (state) => {
  return {
    islogin: state.islogin,
  };
};
const mapdispatchtoprops = (dispatch) => {
  return {
    onLogin: () => dispatch({ type: actions.LOGIN }),
    onafterlogin: () => dispatch({ type: actions.AFTERLOGIN }),
  };
};
export default connect(mapStateWithProps, mapdispatchtoprops)(Sidenav);
