import React, { Component } from 'react';
import './App.css';


class Hello extends Component {
    render(){

        return (
            <div className='box'>
                <h3> Hello {this.props.name}! </h3>
                <p>Today you have planned, {this.props.todo}</p>
            </div>
        );
    }
}

export default Hello;
