import React from 'react';

import '../styles/css/MessageListItem.css';

class MessageListItem extends React.Component {
  render() {
    const message = this.props.message;

    return (
      <li className="MessageListItem">
        <p className="MessageListItem-username">{message.username}</p>
        <p className="MessageListItem-content">{message.content}</p>
        <p className="MessageListItem-time">{message.sentAt}</p>
        <p>{message.roomId}</p>
      </li>
    );
  }
}

export default MessageListItem;
