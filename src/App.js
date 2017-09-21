import React, { Component } from 'react';
import './styles/css/App.css';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
