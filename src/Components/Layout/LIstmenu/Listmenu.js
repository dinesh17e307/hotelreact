import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import classes from "./Listmenu.module.css";
function Listmenu() {
  return (
    <div>
      <Card className={classes.Listmenu} variant="outlined">
        <CardContent></CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Listmenu;
