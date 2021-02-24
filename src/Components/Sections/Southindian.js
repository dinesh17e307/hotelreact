import React from "react";
import Menulisttable from "../Menulisttable/Menulisttable";
const INGREDIENTCOST = {
  chicken: 50,
  mutton: 100,
  berry: 150,
  chilly: 200,
  muttons: 300,
  flower: 200,
};
class Southindian extends React.Component {
  state = {
    ingredient: {
      chicken: 0,
      mutton: 0,
      berry: 0,
      chilly: 0,
      muttons: 0,
      flower: 0,
    },
    totalprice: 0,
  };
  onaddhandler = (type) => {
    const oldcount = this.state.ingredient[type];
    const newcount = oldcount + 1;
    const updatedingredient = {
      ...this.state.ingredient,
    };
    updatedingredient[type] = newcount;
    const oldprice = this.state.totalprice;
    const newprice = oldprice + INGREDIENTCOST[type];
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
    const newprice = oldprice - INGREDIENTCOST[type];
    this.setState({
      totalprice: newprice,
      ingredient: updatedingredient,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Menulisttable
          data={INGREDIENTCOST}
          add={this.onaddhandler}
          less={this.onremovehandler}
        />
      </div>
    );
  }
}
export default Southindian;
