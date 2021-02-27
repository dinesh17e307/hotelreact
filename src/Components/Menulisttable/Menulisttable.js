import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import classes from "./Menulisttable.module.css";
import Buttons from "../Layout/Button/Buttons";
import Buttontable from "../Layout/Buttontable/Buttontable";
import Buttonless from "../Layout/Buttontable/Buttonless";
import { UserProvider } from "./../ContextAPI/ContextAPI";
let arr = [];
let cost = [];
class Menulisttable extends Component {
  state = {
    ingredient: [],
    totalprice: 0,
  };
  // componentDidMount() {
  //   console.log(this.props.data);
  // }

  // componentWillUnmount() {
  //   arr.push(this.state.ingredient);
  //   cost.push(this.state.totalprice);
  //   console.log(arr, cost);
  // }
  // order = (event) => {
  //   event.preventDefault();
  //   arr.push(this.state.ingredient);
  // };
  // onaddhandler = (type) => {
  //   const oldcount = this.state.ingredient[type];
  //   const newcount = oldcount + 1;
  //   const updatedingredient = {
  //     ...this.state.ingredient,
  //   };
  //   updatedingredient[type] = newcount;
  //   const oldprice = this.state.totalprice;
  //   const newprice = oldprice + this.props.data[type];
  //   this.setState({
  //     totalprice: newprice,
  //     ingredient: updatedingredient,
  //   });
  // };
  // onremovehandler = (type) => {
  //   const oldcount = this.state.ingredient[type];
  //   if (oldcount <= 0) {
  //     return;
  //   }
  //   const newcount = oldcount - 1;
  //   const updatedingredient = {
  //     ...this.state.ingredient,
  //   };
  //   updatedingredient[type] = newcount;
  //   const oldprice = this.state.totalprice;
  //   const newprice = oldprice - this.props.data[type];
  //   this.setState({
  //     totalprice: newprice,
  //     ingredient: updatedingredient,
  //   });
  // };

  render() {
    return (
      <UserProvider value={arr}>
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {Object.keys(this.props.data).map((item) => {
                  return (
                    <TableRow key={item}>
                      <TableCell component="th" scope="row">
                        {item}
                      </TableCell>
                      <TableCell align="left">
                        {
                          <Buttontable
                            add={() => this.props.add(item)}
                            cost={this.props.data[item]}
                            item={item}
                          >
                            add
                          </Buttontable>
                        }
                      </TableCell>
                      <TableCell align="left">
                        {
                          <Buttonless
                            less={() => this.props.less(item)}
                            item={item}
                            cost={this.props.data[item]}
                          >
                            less
                          </Buttonless>
                        }
                      </TableCell>
                      <TableCell align="left">{1}</TableCell>
                      <TableCell align="left">
                        {this.props.data[item]}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </UserProvider>
    );
  }
}

export default Menulisttable;
