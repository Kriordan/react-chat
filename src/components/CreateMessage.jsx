import React from 'react';
import firebase from '../firebase';

import '../styles/css/CreateMessage.css';

class CreateMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const roomMessagesRef = firebase.database().ref('messagesTwo').child(this.props.roomId);
    const message = {
      username: this.props.username,
      content: this.state.message,
      sentAt: Date.now()
    };
    roomMessagesRef.push(message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div className="CreateMessage">
        <form className="CreateMessage-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="CreateMessage-input"
            name="message"
            placeholder="Enter your message..."
            onChange={this.handleChange}
            value={this.state.message}
          />
          <button className="CreateMessage-button CreateMessage-button--submit" type="submit">
            Send
          </button>
        </form>
      </div>
    )
  }
}

export default CreateMessage;