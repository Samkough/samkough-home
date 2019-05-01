import React, {Component} from 'react';
import './App.css';
import Users from './components/users/users.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Samkough Home</h1>
        <Users />
      </div>
    );
  }
}

export default App;
