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
function Northindian() {
  return (
    <div>
      <Menulisttable data={rows} />
    </div>
  );
}

export default Northindian;
