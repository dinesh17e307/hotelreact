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
let arr;
class Menulisttable extends Component {
  state = {
    ingredient: [],
    totalprice: 0,
  };
  componentDidMount() {
    this.setState({ ingredient: this.props.dish });
  }
  componentWillUnmount() {
    console.log("finally");
    console.log(this.state);
  }
  onaddhandler = (type) => {
    const oldcount = this.state.ingredient[type];
    const newcount = oldcount + 1;
    const updatedingredient = {
      ...this.state.ingredient,
    };
    updatedingredient[type] = newcount;
    const oldprice = this.state.totalprice;
    const newprice = oldprice + this.props.data[type];
    this.setState({
      totalprice: newprice,
      ingredient: updatedingredient,
    });
  };
  onremovehandler = (type) => {
    const oldcount = this.state.ingredient[type];
    if (oldcount <= 0) {
      return;
    }
    const newcount = oldcount - 1;
    const updatedingredient = {
      ...this.state.ingredient,
    };
    updatedingredient[type] = newcount;
    const oldprice = this.state.totalprice;
    const newprice = oldprice - this.props.data[type];
    this.setState({
      totalprice: newprice,
      ingredient: updatedingredient,
    });
  };

  render() {
    console.log(this.state);
    return (
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
                          add={this.onaddhandler}
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
                          less={this.onremovehandler}
                          item={item}
                          cost={this.props.data[item]}
                        >
                          less
                        </Buttonless>
                      }
                    </TableCell>
                    <TableCell align="left">{1}</TableCell>
                    <TableCell align="left">{this.props.data[item]}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Menulisttable;
