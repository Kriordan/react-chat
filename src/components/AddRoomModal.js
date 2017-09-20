import React from 'react';
import firebase from 'firebase';

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
      <form className="AddRoom-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="AddRoom-input"
          name="roomName"
          placeholder="What's the name of the room?"
          onChange={this.handleChange}
          value={this.state.roomName}
        />
        <input
          type="text"
          className="AddRoom-input"
          name="roomDesc"
          placeholder="What is the purpose of the room?"
          onChange={this.handleChange}
          value={this.state.roomDesc}
        />
        <button onClick={this.props.toggleModal}>Close</button>
        <button type="submit">Add Room</button>
      </form>
    );
  }
}

export default AddRoomModal;
