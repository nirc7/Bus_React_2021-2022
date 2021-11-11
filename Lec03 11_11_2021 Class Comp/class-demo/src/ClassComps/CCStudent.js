import React, { Component } from "react";

export default class CCStudent extends Component {
  constructor(props) {
    super(props);

    //let num = 8;      //local variable
    this.number = 19; //field 
    this.state = {
      id: 7,
      name: 'avi'
    };
  }

  btnAdd2Id = () => {
    //this.state.id= this.state.id+1; //ERROR!!!
    this.setState({
      id: 100,
      age: 30
    });

    this.setState((prev) => ({ id: prev.id + 1 }));
    //code....
    // this.setState({
    //   id: this.state.id + 5,
    //   age:31
    // });
  }


  render() {
    return (
      <div style={{
        border: 'solid red 2px',
        margin: 15,
        padding: 10,
        borderRadius: 10,
        fontSize: 30
      }}>
        <div>CCStudent</div>
        <div>grade = {this.props.grade}</div>
        <div>id= {this.state.id}</div>
        <div>name= {this.state.name}</div>
        <div>age= {this.state.age}</div>
        <button onClick={this.btnAdd2Id}>AddOnr2ID</button>
      </div>
    );
  }

}