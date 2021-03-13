import classes from "./Sidenav.module.css";
import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
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
        <nav>
          <Typography variant="h6">Adyar Anandha bhavan</Typography>
          <Button>
            <Link to="/myorder">myorder</Link>
          </Button>
          <br></br>
          <Button>
            <Link to="/hotel">menu</Link>
          </Button>
          <Button color="inherit">{props.customername}</Button>
        </nav>
      </div>
    </div>
  );
};

export default Sidenav;
