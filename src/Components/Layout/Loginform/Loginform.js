import React from "react";
import TextField from "@material-ui/core/TextField";
import classes from "./Loginform.module.css";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Login from "../Logingoogle/Loginwithgoogle";
import { connect } from "react-redux";
import * as actions from "./../../Store/action";

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
    console.log(this.state);
    return (
      <div>
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
          disabled={this.state.Novveg || this.state.veg ? false : true}
          onClick={() => this.props.log(this.state)}
        >
          GET MENU
        </Button>
      </div>
    );
  }
}

const mapStateWithProps = (state) => {
  return {
    islogin: state.islogin,
  };
};
const mapdispatchtoprops = (dispatch) => {
  return {
    onLogin: () => dispatch({ type: actions.LOGIN }),
  };
};
export default connect(mapStateWithProps, mapdispatchtoprops)(Loginform);
