import Layout from "./Components/Layout/Layout";
import React from "react";
import classes from "./App.module.css";
import Logincard from "./Components/Layout/Logincard/Logincard";
import { connect } from "react-redux";
import * as actions from "./Components/Store/action";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";
import Hotelmenu from "./Containers/Hotelmenu/Hotelmenu";
import Backgroundslider from "./Components/Layout/Backgroundslider/Backgroundslider";
import Rout from "./Components/Routing/Routing";
import Myorders from "./Containers/Myorders/Myorders";
class App extends React.Component {
  state = {
    islog: false,
    customername: "",
    phonenumber: "",
    count: "",
    veg: false,
    Novveg: false,
  };
  LoginHandler = (e) => {
    this.setState({
      islog: e.login,
      customername: e.customername,
      phonenumber: e.phonenumber,
      count: e.count,
      veg: e.veg,
      Novveg: e.Novveg,
    });
    this.props.onLogin();
    this.props.history.push("/hotel");
  };
  googleresponse = (response) => {
    console.log(response.profileObj);
    this.setState({
      customername: response.profileObj.name,
    });
    this.props.history.push("/hotel");
  };
  islog = () => {
    this.setState({
      islog: true,
    });
    this.props.onLogin();
    this.props.history.push("/hotel");
  };
  render() {
    let islog = this.state.islog;
    console.log(this.state);
    return (
      <div className={classes.App}>
        <Backgroundslider />
        <Layout customername={this.state.customername}></Layout>

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Logincard
                onsuccess={this.googleresponse}
                log={this.LoginHandler}
              />
            )}
          />

          <Route exact path="/hotel" component={Hotelmenu} />
          <Route exact path="/myorder" component={Myorders} />
        </Switch>

        {/* <Hotelmenu /> */}
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
export default connect(mapStateWithProps, mapdispatchtoprops)(withRouter(App));
