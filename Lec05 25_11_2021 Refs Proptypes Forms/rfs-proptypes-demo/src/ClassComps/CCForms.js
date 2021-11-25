import React, { Component } from 'react'

export default class CCForms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "insert your name"
    };
  }
  onTextChanged = (event) => {
    this.setState({ userName: event.target.value.toUpperCase().replace('6', '') });
  }

  btnHelloUser = () => {
    alert('hello ' + this.state.userName);
    alert('hello ' + this.stam);//undefined
  }

  render() {
    return (
      <form >
        not connected to state input <input type="text" name="stam" /><br />
        connected to state input WO onchange   <input type="text" name="userName" value={this.state.userName} /><br />
        connected to state input With onchange <input type="text" name="userName" value={this.state.userName}
          onChange={this.onTextChanged} />
          <button onClick={this.btnHelloUser}>push me</button>
      </form>
    );
  }
}
