import React, { Component } from "react";


export default class CCCalc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: 0,
            num2: 0,
            result: 0
        };
    }

    chgTxt1 = (e) => {
        this.setState({ num1: parseInt( e.target.value) });
    }

    chgTxt2 = (e) => {
        this.setState({ num2: parseInt( e.target.value ) });
    }

    btnAdd = () => {
        this.setState({ result: this.state.num1 + this.state.num2 });
    }

    render() {
        return (
            <div>
                NUM1:<input type="text" onChange={this.chgTxt1} /> <br />
                NUM2:<input type="text" onChange={this.chgTxt2} /> <br />
                <button onClick={this.btnAdd}>SUM</button>
                <div>Result={this.state.result}</div>
            </div>
        );
    }
}