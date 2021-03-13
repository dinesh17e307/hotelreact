import classes from "./Sidenav.module.css";
import React from "react";
import Backdrop from "../Backdrop/Backdrop";

const Sidenav = (props) => {
  let sideclass = [classes.sidedrawer, classes.open];
  if (props.open) {
    sideclass = [classes.sidedrawer, classes.close];
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={sideclass.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>logo</div>
        <nav>hi</nav>
      </div>
    </div>
  );
};

export default Sidenav;
