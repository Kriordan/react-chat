import React, { Component } from 'react';
import './styles/css/App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentRoom: '',
      rooms: []
    };
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
