import React, { Component } from 'react'

export default class CCChild extends Component {

  btnTellPapa = () => {
    this.props.tellPapa(77);
  }

  render() {
    return (
      <div style={{ margin: 15, fontSize:25 }}>
        <h3>CHILD</h3>
        <div>id={this.props.id}</div>
        <button
          style={{ margin: 10 }}
          className="btn btn-success"
          onClick={this.btnTellPapa}>tell papa</button>
      </div>
    )
  }
}
