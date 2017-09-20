import React, { Component } from 'react';
import './styles/css/App.css';
import ChatRoomList from './components/ChatRoomList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatRoomList />
      </div>
    );
  }
}

export default App;
