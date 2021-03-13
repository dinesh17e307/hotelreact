import classes from "./Singleorder.module.css";
import React from "react";

function Singleorder(props) {
  console.log("yeah");
  let vale = [];
  for (let key in props.val) {
    console.log(props.val[key]);
    vale.push(props.val[key]);
  }
  console.log(vale);
  return (
    <div className={classes.singleorder}>
      <ul>
        {vale.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
}

export default Singleorder;
