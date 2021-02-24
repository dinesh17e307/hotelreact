import React from "react";
import Menulisttable from "../Menulisttable/Menulisttable";
const rows = ["chiecken", "Mutton", "berry", "chilly", "mutton", "flower"];
function Freshjuice() {
  return (
    <div>
      <Menulisttable data={rows} />
    </div>
  );
}

export default Freshjuice;
