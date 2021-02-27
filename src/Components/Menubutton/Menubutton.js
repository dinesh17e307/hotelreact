import classes from "./Menubutton.module.css";
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Buttons from "../Layout/Button/Buttons";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Southindian from "../Sections/Southindian";
import Northindian from "../Sections/Northindian";
import Chinese from "../Sections/Chinese";
import Thandhoori from "../Sections/Thandhoori";
import Icecreams from "../Sections/Icecreams";
import Freshjuice from "../Sections/Freshjuice";
import Sweets from "../Sections/Sweets";
import Routing from "../Routing/Routing";
import Menulisttable from "../Menulisttable/Menulisttable";
import Listmenu from "../Layout/LIstmenu/Listmenu";
import BackgroundSlider from "react-background-slider";
import im1 from "../../assets/im1.jpeg";
import im2 from "../../assets/im2.jpg";
import im3 from "../../assets/im3.jpg";
import im4 from "../../assets/im4.jpeg";
import Backgroundslider from "../Layout/Backgroundslider/Backgroundslider";
import Sliderimages from "../Layout/Sliderimages/Sliderimages";
import { withRouter } from "react-router-dom";
let cusineset = "hi";
const items = [
  "southindian",
  "northindian",
  "chinese",
  "tandhoori",
  "freshjuice",
  "icecreams",
  "sweets",
];
const southCOST = {
  southindian: {
    Biryani: 50,
    Khichdi: 100,
    buttermasala: 150,
    Idiappam: 200,
    Keerai: 300,
    Kothamali: 200,
    Pongal: 200,
    Ragimudhe: 200,
  },
  northindiancost: {
    chappathi: 50,
    naan: 100,
    burger: 150,
    Piazza: 200,
    mutton: 300,
    flower: 200,
  },
};
const northindiancost = {
  chappathi: 50,
  naan: 100,
  burger: 150,
  Piazza: 200,
  mutton: 300,
  flower: 200,
};
const itemscushion = {
  southindian: {
    Biryani: 0,
    Khichdi: 0,
    buttermasala: 0,
    Idiappam: 0,
    Keerai: 0,
    Kothamali: 0,
    Pongal: 0,
    Ragimudhe: 0,
  },
};

const northindian = {
  chappathi: 0,
  naan: 0,
  burger: 0,
  Piazza: 0,
  mutton: 0,
  flower: 0,
};
let arr = [];
export class Menubutton extends Component {
  componentDidMount() {
    console.log();
  }
  state = {
    southindian: {
      Biryani: 0,
      Khichdi: 0,
      buttermasala: 0,
      Idiappam: 0,
      Keerai: 0,
      Kothamali: 0,
      Pongal: 0,
      Ragimudhe: 0,
    },
    northindian: {
      chappathi: 0,
      naan: 0,
      burger: 0,
      Piazza: 0,
      mutton: 0,
      flower: 0,
    },
    totalprice: 0,
    cusine: "",
  };
  setcusine = (cusin) => {
    this.setState({
      cusine: cusin,
    });
    cusineset = cusin;
    console.log(cusineset);
  };
  onaddhandler = (type) => {
    const oldcount = this.state[cusineset][type];
    const newcount = oldcount + 1;
    const updatedingredient = {
      ...this.state[cusineset],
    };
    updatedingredient[type] = newcount;
    const oldprice = this.state.totalprice;
    const newprice = oldprice + southCOST[cusineset][type];
    this.setState({
      totalprice: newprice,
      [cusineset]: updatedingredient,
    });
  };
  onremovehandler = (type) => {
    const oldcount = this.state[cusineset][type];
    if (oldcount <= 0) {
      return;
    }
    const newcount = oldcount - 1;
    const updatedingredient = {
      ...this.state[cusineset],
    };
    updatedingredient[type] = newcount;
    const oldprice = this.state.totalprice;
    const newprice = oldprice - southCOST[cusineset][type];
    this.setState({
      totalprice: newprice,
      [cusineset]: updatedingredient,
    });
  };

  render() {
    console.log(this.state);
    let item = items.map((e) => {
      let it = e;
      return (
        <Buttons
          cost={itemscushion[e]}
          key={e.concat(Math.random())}
          cusine={this.setcusine}
        >
          {e}
        </Buttons>
      );
    });
    return (
      <div>
        <section>
          <Toolbar className={classes.Header}>{item}</Toolbar>
        </section>

        <div className={classes.Menubutton}>
          {/* <Sliderimages /> */}
          <Switch>
            <Route
              exact
              path="/southindian"
              render={() => (
                <Menulisttable
                  data={southCOST[cusineset]}
                  dish={itemscushion[cusineset]}
                  add={this.onaddhandler}
                  less={this.onremovehandler}
                />
              )}
            />
            <Route
              exact
              path="/northindian"
              render={() => (
                <Menulisttable
                  data={southCOST[cusineset]}
                  dish={itemscushion[cusineset]}
                  add={this.onaddhandler}
                  less={this.onremovehandler}
                />
              )}
            />
            <Route path="/chinese" component={Chinese} />
            <Route path="/tandhoori" component={Thandhoori} />
            <Route path="/freshjuice" component={Freshjuice} />
            <Route path="/icecreams" component={Icecreams} />
            <Route path="/sweets" component={Sweets} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Menubutton);
