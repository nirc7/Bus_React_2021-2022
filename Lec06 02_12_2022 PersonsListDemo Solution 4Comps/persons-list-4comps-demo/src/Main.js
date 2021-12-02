import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FCPersonsList from './FunctionalComps/FCPersonsList';
import FCInputName from './FunctionalComps/FCInputName';

const persons = [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }, { id: 3, name: 'charlie' }];

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      persons: persons,
      index: persons.length
    }
  }

  getName = (newName) => {
    let newIndex = this.state.index + 1;
    let newPersons =
      [
        ...this.state.persons,
        { id: newIndex, name: newName }
      ];

    this.setState({
      persons: newPersons,
      index: newIndex
    });
  }

  getId2Del = (id) => {
    let newPersons = this.state.persons.filter(per => per.id !== id);

    this.setState({
      persons: newPersons
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FCInputName sendName={this.getName} />
          <FCPersonsList persons={this.state.persons} sendId2Del={this.getId2Del} />
        </header>
      </div>
    );
  }
}

// export class Main2 extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       persons: [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }, { id: 3, name: 'charlie' }]
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <FCInputName />
//           <FCPersonsList persons={this.state.persons} />
//         </header>
//       </div>
//     );
//   }
// }
