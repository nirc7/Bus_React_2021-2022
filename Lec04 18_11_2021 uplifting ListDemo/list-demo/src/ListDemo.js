import React, { Component } from 'react'

const listPersons = [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }, { id: 3, name: 'charlie' }];

export default class ListDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: listPersons,
      count: listPersons.length
    }
  }

  btnAddPerson = () => {

    let newPersons = [...this.state.persons,
    {
      id: this.state.count + 1,
      name: this.state.txtName
    }];

    let newCount = this.state.count+1;

    this.setState({
      persons: newPersons,
      count: newCount
    });
  }

  cngTxtName = (e) => {
    this.setState({ txtName: e.target.value });
  }

  btnDelPerson = (pId) => {
    let newPersons = this.state.persons.filter(per => per.id !== pId);

    this.setState({ persons: newPersons });
  }

  render() {
    let personsStr = this.state.persons.map((per, ind) =>
      <a href="#"
        key={ind}
        className="list-group-item list-group-item-action">
        id={per.id} name={per.name} -- {ind}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => this.btnDelPerson(per.id)}
          color="red" width="16" height="16" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z" />
        </svg>
      </a>
      // <li className="list-group-item" key={ind}>
      //   id={per.id} name={per.name} -- {ind}</li>
    );

    return (
      <div style={{
        fontSize: 25, margin: 20, padding: 10,
        border: 'solid green 2px'
      }}>

        <input type="text" onChange={this.cngTxtName} />
        <button
          className="btn btn-warning"
          onClick={this.btnAddPerson}>Add Person</button>
        <h2>Persons List: </h2>

        <div className="list-group">
          {personsStr}
        </div>
      </div>
    )
  }
}
