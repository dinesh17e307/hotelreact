import React from "react";
import Menulisttable from "../Menulisttable/Menulisttable";
const INGREDIENTCOST = {
  Biryani: 50,
  Khichdi: 100,
  buttermasala: 150,
  Idiappam: 200,
  Keerai: 300,
  Kothamali: 200,
  Pongal: 200,
  Ragimudhe: 200,
};
class Southindian extends React.Component {
  state = {
    ingredient: {
      Biryani: 0,
      Khichdi: 0,
      buttermasala: 0,
      Idiappam: 0,
      Keerai: 0,
      Kothamali: 0,
      Pongal: 0,
      Ragimudhe: 0,
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
