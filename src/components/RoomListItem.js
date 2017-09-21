import React from 'react';
import '../styles/css/RoomListItem.css';
import firebase from 'firebase';

class RoomListItem extends React.Component {
  deleteRoom(roomId) {
    const roomRef = firebase.database().ref(`/rooms/${roomId}`);
    roomRef.remove();
  }

  render() {
    const room = this.props.room;

    return (
      <li className="RoomListItem" key={room.id}>
        <h4 className="RoomListItem-name">{room.name}</h4>
        <p className="RoomListItem-description">{room.description}</p>
        <button className="RoomListItem-deleteButton" onClick={() => this.deleteRoom(room.id)}>
          X
        </button>
      </li>
    );
  }
}
export default RoomListItem;
