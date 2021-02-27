import classes from "./Menubutton.module.css";
import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Buttons from "../Layout/Button/Buttons";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
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
  northindian: {
    chappathi: 50,
    naan: 100,
    burger: 150,
    Piazza: 200,
    mutton: 300,
    flower: 200,
  },
  chinese: {
    SpringRolls: 150,
    DimSums: 300,
    FriedTofu: 250,
    Chestnuts: 290,
    ChickenSatay: 300,
    VegHakka: 250,
    GarlicSoya: 350,
  },
  tandhoori: {
    TandooriPrawns: 250,
    TandooriQuail: 520,
    TandoorTikkaSeelKand: 600,
    TandooriGobi: 250,
    TandooriPomfret: 520,
    TandooriMurg: 600,
    TandooriFishTikka: 500,
  },
  icecreams: {
    Vanilla: 300,
    Chocolate: 250,
    Cookies: 320,
    MintChocolateChip: 530,
    ChocolateChipCookie: 240,
    ButteredPecan: 320,
    BirthdayCake: 230,
    Strawberry: 520,
  },
  freshjuice: {
    Ade: 250,
    Aloevera: 520,
    Apple: 510,
    Beet: 410,
    Cantaloupe: 210,
    Carrot: 560,
    Celery: 410,
    Chanhmuối: 210,
    Cherry: 420,
    Clam: 230,
    Cranberry: 420,
    Coconutwater: 520,
    Cucumber: 410,
    Dandeliongreen: 240,
    Grape: 480,
    Grapefruit: 720,
  },
  sweets: {
    GulabJamun: 520,
    Jalebi: 900,
    Shrikhand: 510,
    Patishapta: 420,
    GajarKaHalwa: 630,
    Rasmalai: 240,
    Ghevar: 410,
  },
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
  northindian: {
    chappathi: 0,
    naan: 0,
    burger: 0,
    Piazza: 0,
    mutton: 0,
    flower: 0,
  },
  chinese: {
    SpringRolls: 0,
    DimSums: 0,
    FriedTofu: 0,
    Chestnuts: 0,
    ChickenSatay: 0,
    VegHakka: 0,
    GarlicSoya: 0,
  },
  tandhoori: {
    TandooriPrawns: 0,
    TandooriQuail: 0,
    TandoorTikkaSeelKand: 0,
    TandooriGobi: 0,
    TandooriPomfret: 0,
    TandooriMurg: 0,
    TandooriFishTikka: 0,
  },
  icecreams: {
    Vanilla: 0,
    Chocolate: 0,
    Cookies: 0,
    MintChocolateChip: 0,
    ChocolateChipCookie: 0,
    ButteredPecan: 0,
    BirthdayCake: 0,
    Strawberry: 0,
  },
  freshjuice: {
    Ade: 0,
    Aloevera: 0,
    Apple: 0,
    Beet: 0,
    Cantaloupe: 0,
    Carrot: 0,
    Celery: 0,
    Chanhmuối: 0,
    Cherry: 0,
    Clam: 0,
    Cranberry: 0,
    Coconutwater: 0,
    Cucumber: 0,
    Dandeliongreen: 0,
    Grape: 0,
    Grapefruit: 0,
  },
  sweets: {
    GulabJamun: 0,
    Jalebi: 0,
    Shrikhand: 0,
    Patishapta: 0,
    GajarKaHalwa: 0,
    Rasmalai: 0,
    Ghevar: 0,
  },
};
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
    chinese: {
      SpringRolls: 0,
      DimSums: 0,
      FriedTofu: 0,
      Chestnuts: 0,
      ChickenSatay: 0,
      VegHakka: 0,
      GarlicSoya: 0,
    },
    tandhoori: {
      TandooriPrawns: 0,
      TandooriQuail: 0,
      TandoorTikkaSeelKand: 0,
      TandooriGobi: 0,
      TandooriPomfret: 0,
      TandooriMurg: 0,
      TandooriFishTikka: 0,
    },
    icecreams: {
      Vanilla: 0,
      Chocolate: 0,
      Cookies: 0,
      MintChocolateChip: 0,
      ChocolateChipCookie: 0,
      ButteredPecan: 0,
      BirthdayCake: 0,
      Strawberry: 0,
    },
    freshjuice: {
      Ade: 0,
      Aloevera: 0,
      Apple: 0,
      Beet: 0,
      Cantaloupe: 0,
      Carrot: 0,
      Celery: 0,
      Chanhmuối: 0,
      Cherry: 0,
      Clam: 0,
      Cranberry: 0,
      Coconutwater: 0,
      Cucumber: 0,
      Dandeliongreen: 0,
      Grape: 0,
      Grapefruit: 0,
    },
    sweets: {
      GulabJamun: 0,
      Jalebi: 0,
      Shrikhand: 0,
      Patishapta: 0,
      GajarKaHalwa: 0,
      Rasmalai: 0,
      Ghevar: 0,
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
            <Route
              path="/chinese"
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
              path="/tandhoori"
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
              path="/freshjuice"
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
              path="/icecreams"
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
              path="/sweets"
              render={() => (
                <Menulisttable
                  data={southCOST[cusineset]}
                  dish={itemscushion[cusineset]}
                  add={this.onaddhandler}
                  less={this.onremovehandler}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Menubutton);
