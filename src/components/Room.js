import React from 'react';
import firebase from 'firebase';

class Room extends React.Component {
  deleteRoom(roomId) {
    const roomRef = firebase.database().ref(`/rooms/${roomId}`);
    roomRef.remove();
  }

  render() {
    const room = this.props.room;

    return (
      <li className="DisplayRooms-room" key={room.id}>
        <h4 className="DisplayRooms-name">
          {room.name}
        </h4>
        <p className="DisplayRooms-description">
          {room.description}
        </p>
        <button className="DisplayRooms-deleteButton" onClick={() => this.deleteRoom(room.id)}>
          Remove Room{' '}
          <span role="img" aria-label="Screaming Face Emoji">
            😱
          </span>
        </button>
      </li>
    );
  }
}
export default Room;
