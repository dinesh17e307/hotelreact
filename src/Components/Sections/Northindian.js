import React from "react";
import Menulisttable from "../Menulisttable/Menulisttable";
const rows = {
  chappathi: 50,
  naan: 100,
  burger: 150,
  Piazza: 200,
  mutton: 300,
  flower: 200,
};
const ingredient = {
  chappathi: 0,
  naan: 0,
  burger: 0,
  Piazza: 0,
  mutton: 0,
  flower: 0,
};
function Northindian() {
  return (
    <div>
      <Menulisttable data={rows} dish={ingredient} />
    </div>
  );
}

export default Northindian;
