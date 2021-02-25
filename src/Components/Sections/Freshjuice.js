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
const ingredient = {
  chiecken: 0,
  Mutton: 0,
  berry: 0,
  chilly: 0,
  mutton: 0,
  flower: 0,
};
function Freshjuice() {
  return (
    <div>
      <Menulisttable data={rows} dish={ingredient} />
    </div>
  );
}

export default Freshjuice;
