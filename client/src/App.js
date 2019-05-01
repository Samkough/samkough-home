import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/header/header.js'
import Users from './components/users/users.js'
import HomePage from './views/HomePage/HomePage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {HomePage}
        <Users />
      </div>
    );
  }
}

export default App;
