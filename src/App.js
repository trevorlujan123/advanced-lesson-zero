import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js'


class App extends Component {
  render() {
      const users = [
          {_id: 1, name: 'Leia', todo: 'being a bad ass!'},
          {_id: 2, name: 'Luke', todo: 'jedi training'},
          {_id: 3, name: 'Han', todo: 'trying to get Leia to love me'}
      ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {users.map( (user) => {
            return (
                <Hello key={user._id} name={user.name} todo={user.todo}/>
            );
        })}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
