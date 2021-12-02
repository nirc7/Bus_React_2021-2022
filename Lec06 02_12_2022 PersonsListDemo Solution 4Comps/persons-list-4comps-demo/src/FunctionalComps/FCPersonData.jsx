import React from 'react';

export default function FCPersonData({ id, name, sendId2Remove }) {
  //let {name, id} = props;

  // const btnId2Remove = () => {
  //   sendId2Remove(id);
  // }

  return (
    <div>
      id={id} name={name} <button onClick={()=> sendId2Remove(id)} >X</button>
    </div>
  )
}
