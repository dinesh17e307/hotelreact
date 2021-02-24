import React from "react";
import Menulisttable from "../Menulisttable/Menulisttable";
const rows = [
  "Noodles",
  "egg noodles",
  "french fries",
  "china plates",
  "mutton china",
  "flower china",
];
const Chinese = () => {
  return (
    <div>
      <Menulisttable data={rows} />
    </div>
  );
};

export default Chinese;
