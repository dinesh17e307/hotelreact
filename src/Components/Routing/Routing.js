import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Southindian from "../Sections/Southindian";
import Northindian from "../Sections/Northindian";
import Chinese from "../Sections/Chinese";
import Thandhoori from "../Sections/Thandhoori";
import Icecreams from "../Sections/Icecreams";
import Freshjuice from "../Sections/Freshjuice";
import Sweets from "../Sections/Sweets";
const Routing = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/southindian">
            {" "}
            <Southindian />
          </Route>
          <Route exact path="/northindian">
            {" "}
            <Northindian />
          </Route>
          <Route exact path="/chinese">
            {" "}
            <Chinese />
          </Route>
          <Route exact path="/thandhoori">
            {" "}
            <Thandhoori />
          </Route>
          <Route exact path="/freshjuice">
            {" "}
            <Freshjuice />
          </Route>
          <Route exact path="/icecreams">
            {" "}
            <Icecreams />
          </Route>
          <Route exact path="/sweets">
            {" "}
            <Sweets />
          </Route>
          <Link to="/southindian">si</Link>
          <Link to="/northindian">ni </Link>
          <Link to="/chinese">c</Link>
          <Link to="/thandhoori">t</Link>
          <Link to="/freshjuice">fr</Link>
          <Link to="/icecreams">ice</Link>
          <Link to="/sweets">swe</Link>
        </Switch>
      </Router>
    </div>
  );
};
export default Routing;
