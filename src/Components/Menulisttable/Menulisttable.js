import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import classes from "./Menulisttable.module.css";
import Buttons from "../Layout/Button/Buttons";
const Menulisttable = (props) => {
  console.log(props.data);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {props.data.map((item) => {
              return (
                <TableRow key={item}>
                  <TableCell component="th" scope="row">
                    {item}
                  </TableCell>
                  <TableCell align="left">{<Buttons>add</Buttons>}</TableCell>
                  <TableCell align="left">{<Buttons>add</Buttons>}</TableCell>
                  <TableCell align="left">{1}</TableCell>
                  <TableCell align="left">{50}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Menulisttable;
