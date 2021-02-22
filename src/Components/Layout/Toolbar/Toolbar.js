import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import classes from "./Toolbal.module.css";
import Typography from "@material-ui/core/Typography";

const Toolsbar = (props) => {
  return (
    <div>
      <AppBar>
        <Toolbar className={classes.Toolbar}>
          <Typography variant="h6">Adyar Anandha bhavan</Typography>
          <Button color="inherit">{props.customername}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Toolsbar;
