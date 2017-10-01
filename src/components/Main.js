import React from 'react';
import '../styles/css/Main.css';
import SectionTitle from './SectionTitle';
import MessageList from './MessageList';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <SectionTitle>Core</SectionTitle>
        <MessageList />
      </div>
    );
  }
}

export default Main;
