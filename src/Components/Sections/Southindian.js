import React from "react";
import Menulisttable from "../Menulisttable/Menulisttable";
const rows = ["chiecken", "Mutton", "berry", "chilly", "mutton", "flower"];
class Southindian extends React.Component {
  render() {
    return (
      <div>
        <Menulisttable data={rows} />
      </div>
    );
  }
}
export default Southindian;
