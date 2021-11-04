import React from "react";
import EHeader from "../Elements/EHeader";


export default function FCPerson(props) {

  let num = 7;
  num++;
  num=props.id*3;
  //props.id=9;
  if (props.id===8) {
    return(
      <div>id=8</div>
    );
  }


  return (
    <div style={{ margin: 15, border: 'solid orange 3px', padding: 5 }} >
      <div>id: {props.id * 2}!</div>
      <div>name: {props.name}</div>
      <div>num={num}</div>
      {EHeader}
    </div>
  );
}