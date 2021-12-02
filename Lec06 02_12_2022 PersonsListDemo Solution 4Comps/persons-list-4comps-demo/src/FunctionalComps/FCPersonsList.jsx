import React from 'react';
import FCPersonData from './FCPersonData';

export default function FCPersonsList(props) {

  // const getId2Remove = (id) => {
  //   props.sendId2Del(id);
  // }

  let personsStr = props.persons.map((per, ind) =>
    <FCPersonData key={ind}
      id={per.id} name={per.name}
      //sendId2Remove={getId2Remove}
      sendId2Remove={props.sendId2Del}
    />);

  return (
    <div>
      {personsStr}
    </div>
  )
}
