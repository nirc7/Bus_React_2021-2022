import React, { Component } from 'react'

const listPersons = [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }, { id: 3, name: 'charlie' }];

export default class ListDemo extends Component {


  render() {

    let personsStr = listPersons.map( (per,ind) =>
      <li className="list-group-item" key={ind}>
        id={per.id} name={per.name} -- {ind}</li>);

    return (
      <div style={{
        fontSize: 25, margin: 20, padding: 10,
        border: 'solid green 2px'
      }}>
        <h2>Persons List: </h2>

        <ul className="list-group">
          {personsStr}
        </ul>
      </div>
    )
  }
}
