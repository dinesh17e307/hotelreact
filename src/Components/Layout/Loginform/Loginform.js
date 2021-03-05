import React from "react";
import TextField from "@material-ui/core/TextField";
import classes from "./Loginform.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Login from "../Logingoogle/Loginwithgoogle";

class Loginform extends React.Component {
  state = {
    login: true,
    customername: "",
    phonenumber: "",
    count: "",
    veg: false,
    Novveg: false,
  };
  render() {
    return (
      <div>
        <form className={classes.Loginform}>
          <TextField
            onChange={(event) => {
              this.setState({ customername: event.target.value });
            }}
            label="Customer Name"
            type="search"
            fullWidth
            placeholder="dinesh sellappan"
          />{" "}
          <br></br>
          <TextField
            onChange={(event) => {
              this.setState({ phonenumber: event.target.value });
            }}
            label="Mobile Number"
            defaultValue="+91"
            type="number"
            fullWidth
          />
          <br></br>
          <TextField
            onChange={(event) => {
              this.setState({ count: event.target.value });
            }}
            label="Family Count"
            type="number"
            fullWidth
          />
          <br></br>
          <label>Veg</label>
          <Checkbox
            onChange={() => {
              this.setState({ veg: true });
            }}
          />
          <label>Non Veg</label>
          <Checkbox
            onChange={() => {
              this.setState({ Novveg: true });
            }}
          />
          <br></br>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => this.props.log(this.state)}
          >
            GET MENU
          </Button>
        </form>
      </div>
    );
  }
}

export default Loginform;
