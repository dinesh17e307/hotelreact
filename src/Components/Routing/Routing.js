import React, { Component } from "react";
import Buttons from "../Layout/Button/Buttons";
import Buttontable from "../Layout/Buttontable/Buttontable";
import classes from "./Routing.module.css";
import Button from "@material-ui/core/Button";
let arr = [];
let price;
class Rout extends Component {
  componentWillMount() {
    arr = [];
    price = 0;
    for (let i in this.props.data) {
      console.log(i);
      if (i === "totalprice") {
        price = this.props.data[i];
      }
      for (let j in this.props.data[i]) {
        if (this.props.data[i][j] > 0) {
          console.log((j, this.props.data[i][j]));
          arr.push([j + "=" + this.props.data[i][j]]);
        }
      }
    }
  }
  setbilling = () => {};
  render() {
    let ar = arr.map((e) => {
      return <li>{e}</li>;
    });
    console.log(arr);
    return (
      <div>
        <div className={classes.list}>
          <h2>Your Ordered desire</h2>
          {ar}
          <h3>
            Total cost:<strong>{price}</strong>
          </h3>
          <Button color="primary" onClick={this.setbilling}>
            ORDER NOW
          </Button>
        </div>

        <h1>welcome to my hotel</h1>
      </div>
    );
  }
}

export default Rout;
