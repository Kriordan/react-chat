import React from 'react';
import firebase from '../firebase';
import { getCookie } from '../helpers';
import format from 'date-fns/format';

import '../styles/css/Room.css';

import MessageList from './MessageList';
import SetUsernameModal from './SetUsernameModal';
import CreateMessage from './CreateMessage';
import RoomList from './RoomList';
import AddRoomButton from './AddRoomButton';

class Room extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      username: null,
      usernameModalIsOpen: false,
      rooms: []
    };
  }

  componentDidMount() {
    const messagesRef = firebase.database().ref('messagesTwo');
    const roomId = this.props.match.params.roomId;
    messagesRef.child(roomId).on("value", snapshot => {
      let messages = snapshot.val();
      let newState = [];
      for (let message in messages) {
        newState.push({
          id: message,
          username: messages[message].username,
          content: messages[message].content,
          sentAt: format(messages[message].sentAt, 'h:mm a')
        });
      }
      this.setState({
        messages: newState
      });
    });

    const roomsRef = firebase.database().ref('rooms');
    roomsRef.on("value", snapshot => {
      let rooms = snapshot.val();
      let newState = [];
      for (let room in rooms) {
        newState.push({
          id: room,
          name: rooms[room].name,
          description: rooms[room].description
        });
      }
      this.setState({
        rooms: newState
      });
    });

    if (getCookie("blocChatUsername")) {
      const cookie = getCookie("blocChatUsername");
      console.log(cookie);
      this.setState({
        username: cookie
      });
    } else {
      this.setState({
        usernameModalIsOpen: !this.state.usernameModalIsOpen
      });
    }
  }

  toggleModal = () => {
    this.setState({
      usernameModalIsOpen: !this.state.usernameModalIsOpen
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    document.cookie = `blocChatUsername=${this.state.username}`;
    this.toggleModal();
  };

  render() {
    return (
      <div className="Room">
        <div className="Room-sidebar">
          <AddRoomButton />
          <RoomList rooms={this.state.rooms} />
        </div>
        <div className="Room-messages">
          <MessageList messages={this.state.messages} />
          <CreateMessage roomId={this.props.match.params.roomId} username={this.state.username} />
        </div>
        <SetUsernameModal
          show={this.state.usernameModalIsOpen}
          toggleModal={this.toggleModal}
          username={this.state.username}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default Room;