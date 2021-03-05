import Layout from "./Components/Layout/Layout";
import React from "react";
import classes from "./App.module.css";
import Logincard from "./Components/Layout/Logincard/Logincard";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Hotelmenu from "./Containers/Hotelmenu/Hotelmenu";
import Backgroundslider from "./Components/Layout/Backgroundslider/Backgroundslider";
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
  };
  render() {
    let islog = this.state.islog;
    console.log(this.state);
    return (
      <div className={classes.App}>
        <Backgroundslider />
        <Layout customername={this.state.customername} />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                !islog ? (
                  <Logincard islog={this.LoginHandler} />
                ) : (
                  <Hotelmenu customername={this.state.customername} />
                )
              }
            />
            <Link exact to="/hotel" component={Hotelmenu} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
