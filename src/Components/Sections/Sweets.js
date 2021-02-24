import React from "react";
import Menulisttable from "../Menulisttable/Menulisttable";
const rows = {
  chiecken: 50,
  Mutton: 100,
  berry: 150,
  chilly: 200,
  mutton: 300,
  flower: 200,
};
function Sweets() {
  return (
    <div>
      <Menulisttable data={rows} />
    </div>
  );
}

export default Sweets;
