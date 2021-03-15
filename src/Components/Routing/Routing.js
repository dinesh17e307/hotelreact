import React, { Component } from "react";
import Buttons from "../Layout/Button/Buttons";
import Buttontable from "../Layout/Buttontable/Buttontable";
import classes from "./Routing.module.css";
import Button from "@material-ui/core/Button";
import axios from "../../Axios";
import * as actions from "./../Store/action";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { ThumbDownSharp } from "@material-ui/icons";
let arr = [];
let arr1 = [];
let price;
class Rout extends Component {
  state = {
    orders: [],
  };
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
          arr1.push({
            item: j,
            val: this.props.data[i][j],
          });
          console.log((j, this.props.data[i][j]));

          arr.push([j + "=" + this.props.data[i][j]]);
        }
      }
    }
    this.setState({
      orders: arr,
    });
  }
  setbilling = () => {
    axios
      .post("/Orders.json", arr)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      orders: null,
    });
    arr = null;
    this.props.onorder();
    this.props.nullset();
    price = 0;
  };
  render() {
    let ar = <Spinner />;
    if (this.state.orders) {
      ar = this.state.orders.map((e) => {
        return <li>{e}</li>;
      });
    }
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
      </div>
    );
  }
}
const mapdispatchtoprops = (dispatch) => {
  return {
    onorder: () => dispatch({ type: actions.ORDERNOW }),
  };
};
export default connect(null, mapdispatchtoprops)(Rout);
