import React from 'react';
import firebase from '../firebase';
import MessageListItem from './MessageListItem';

class MessageList extends React.Component {
  state = {
    messages: []
  };
  componentDidMount() {
    const messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', snapshot => {
      let messages = snapshot.val();
      let newState = [];
      for (let message in messages) {
        newState.push({
          id: message,
          username: messages[message].username,
          content: messages[message].content,
          sentAt: messages[message].sentAt,
          roomId: messages[message].roomId
        });
      }
      this.setState({
        messages: newState
      });
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.messages.map(message => {
            return <MessageListItem key={message.id} message={message} />;
          })}
        </ul>
      </div>
    );
  }
}

export default MessageList;
