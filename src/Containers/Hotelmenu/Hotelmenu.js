import React, { Component } from "react";
import Listmenu from "../../Components/Layout/LIstmenu/Listmenu";
import Menubutton from "../../Components/Menubutton/Menubutton";

export class Hotelmenu extends Component {
  state = {
    arr: [],
  };

  render() {
    return (
      <div>
        <Listmenu />
        <Menubutton />
      </div>
    );
  }
}

export default Hotelmenu;
