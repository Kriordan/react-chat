import React from 'react';
import firebase from 'firebase';
import '../styles/css/AddRoomModal.css';

class AddRoomModal extends React.Component {
  state = {
    roomName: '',
    roomDesc: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const roomsRef = firebase.database().ref('rooms');
    const room = {
      name: this.state.roomName,
      description: this.state.roomDesc
    };
    roomsRef.push(room);
    this.setState({
      roomName: '',
      roomDesc: ''
    });
    this.props.toggleModal();
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="AddRoomModal-wrapper">
        <div className="AddRoomModal-overlay" />
        <form className="AddRoomModal-form" onSubmit={this.handleSubmit}>
          <h3>Create new room</h3>
          <input
            type="text"
            className="AddRoomModal-input"
            name="roomName"
            placeholder="What's the name of the room?"
            onChange={this.handleChange}
            value={this.state.roomName}
          />
          <input
            type="text"
            className="AddRoomModal-input"
            name="roomDesc"
            placeholder="What is the purpose of the room?"
            onChange={this.handleChange}
            value={this.state.roomDesc}
          />
          <button
            className="AddRoomModal-button AddRoomModal-button--close"
            onClick={this.props.toggleModal}
          >
            Close
          </button>
          <button className="AddRoomModal-button AddRoomModal-button--submit" type="submit">
            Add Room
          </button>
        </form>
      </div>
    );
  }
}

export default AddRoomModal;
