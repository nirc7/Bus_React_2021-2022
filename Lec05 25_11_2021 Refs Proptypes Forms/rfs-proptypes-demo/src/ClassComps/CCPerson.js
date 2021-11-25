import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CCPerson extends Component {
    render() {
        return (
            <div>
                <div>id={this.props.id}</div>
                <div>name={this.props.name}</div>
            </div>
        )
    }
}

CCPerson.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

