import classes from "./Myorders.module.css";
import React, { Component } from "react";
import axios from "../../Axios";
import Singleorder from "../Singleorder,js/Singleorder";
let arr = [];
export class Myorders extends Component {
  state = {
    Orders: [],
  };
  componentDidMount() {
    console.log("rendering my orders");
    arr = [];
    axios
      .get("/Orders.json")
      .then((res) => {
        for (let key in res.data) {
          arr.push(res.data[key]);
        }

        console.log(res.data);
        this.setState({
          Orders: arr,
        });
        console.log(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const hel = this.state.Orders.map((e, indx) => {
      return <Singleorder key={e.concat(indx)} val={e} />;
    });
    return <div className={classes.Myorders}>{hel}</div>;
  }
}

export default Myorders;
