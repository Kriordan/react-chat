import React from 'react';
import '../styles/css/MessageList.css';
import MessageListItem from './MessageListItem';

class MessageList extends React.Component {
  render() {
    return (
      <div className="MessageList">
        <ul className="MessageList-list">
          {this.props.messages.map(message => {
            return <MessageListItem key={message.id} message={message} />;
          })}
        </ul>
      </div>
    );
  }
}

export default MessageList;
