import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import classes from "./Listmenu.module.css";
import Spinner from "../../Spinner/Spinner";
import { connect } from "react-redux";
class Listmenu extends Component {
  state = {
    isempty: true,
  };
  render() {
    console.log(this.props.ordernow, this.props.islogin, this.props.username);
    return (
      <React.Fragment>
        <Card className={classes.Listmenu} variant="outlined">
          <CardContent>
            <h3>Welcome to A2B ,Taste your desire</h3>
            {this.props.ordernow ? (
              <h1>Thanks for visiting ,Visit Periodically!!!!!!!!</h1>
            ) : (
              <p>
                {" "}
                Add your desire <Spinner />
              </p>
            )}
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </React.Fragment>
    );
  }
}
const mapstatetoprops = (state) => {
  return {
    ordernow: state.ordernow,
    islogin: state.islogin,
  };
};
export default connect(mapstatetoprops)(Listmenu);
