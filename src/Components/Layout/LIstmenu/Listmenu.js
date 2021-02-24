import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import classes from "./Listmenu.module.css";
import Spinner from "../../Spinner/Spinner";
class Listmenu extends Component {
  state = {
    isempty: true,
  };
  render() {
    return (
      <div>
        <Card className={classes.Listmenu} variant="outlined">
          <CardContent>
            <h3>Welcome to A2B ,Taste your desire</h3>
            {this.state.isempty ? (
              <p>
                Add your desire <Spinner />
              </p>
            ) : null}
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default Listmenu;
