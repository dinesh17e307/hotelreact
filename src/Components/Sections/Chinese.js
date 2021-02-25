import React from "react";
import Menulisttable from "../Menulisttable/Menulisttable";
const rows = {
  SpringRolls: 150,
  DimSums: 300,
  FriedTofu: 250,
  Chestnuts: 290,
  ChickenSatay: 300,
  VegHakka: 250,
  GarlicSoya: 350,
  "": 0,
};
const ingredient = {
  SpringRolls: 0,
  DimSums: 0,
  FriedTofu: 0,
  Chestnuts: 0,
  ChickenSatay: 0,
  VegHakka: 0,
  GarlicSoya: 0,
  "": 0,
};
const Chinese = () => {
  return (
    <div>
      <Menulisttable data={rows} dish={ingredient} />
    </div>
  );
};

export default Chinese;
