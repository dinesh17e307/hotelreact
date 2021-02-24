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
import Buttontable from "../Layout/Buttontable/Buttontable";
import Buttonless from "../Layout/Buttontable/Buttonless";
const Menulisttable = (props) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {Object.keys(props.data).map((item) => {
              return (
                <TableRow key={item}>
                  <TableCell component="th" scope="row">
                    {item}
                  </TableCell>
                  <TableCell align="left">
                    {
                      <Buttontable
                        add={props.add}
                        cost={props.data[item]}
                        item={item}
                      >
                        add
                      </Buttontable>
                    }
                  </TableCell>
                  <TableCell align="left">
                    {
                      <Buttonless
                        less={props.less}
                        item={item}
                        cost={props.data[item]}
                      >
                        less
                      </Buttonless>
                    }
                  </TableCell>
                  <TableCell align="left">{1}</TableCell>
                  <TableCell align="left">{props.data[item]}</TableCell>
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
