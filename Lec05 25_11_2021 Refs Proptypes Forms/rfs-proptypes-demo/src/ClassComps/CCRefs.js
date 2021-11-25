import React, { Component } from 'react'

export default class CCRefs extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.txtInput1 = null;
    this.textInput2 = React.createRef();
  }


  TextChanged1 = (e) => {
    this.setState({ txt1: e.target.value })
  }

  TextChanged2 = (e) => {
    this.setState({ txt2: e.target.value })
  }

  TextChanged = () => {
    debugger;
    let num=7;
    num++;
    console.log(num);
    this.setState({
      txt1: this.txtInput1.value,
      txt2: this.textInput2.current.value
    })
  }


  render() {
    return (
      <div>
        <div style={{ border: 'solid 2px green', margin: 15, padding: 10 }}>
          <input type="text"
            ref={(input) => { this.txtInput1 = input }}
            onChange={this.TextChanged} />
          <span style={{ marginRight: 50 }} />
          {this.state.txt1}
          <hr />
          <input type="text"
            ref={this.textInput2}
            onChange={this.TextChanged} />
          <span style={{ marginRight: 50 }} />
          {this.state.txt2}
        </div>


        <input type="text" onChange={this.TextChanged1} />
        <span style={{ marginRight: 50 }} />
        {this.state.txt1}
        <hr />
        <input type="text" onChange={this.TextChanged2} />
        <span style={{ marginRight: 50 }} />
        {this.state.txt2}
      </div>
    )
  }
}
