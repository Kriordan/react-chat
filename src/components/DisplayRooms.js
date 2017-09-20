import React from 'react';
import firebase from '../firebase';
import Room from './Room';

class DisplayRooms extends React.Component {
  state = {
    rooms: []
  };

  componentDidMount() {
    const roomsRef = firebase.database().ref('rooms');
    roomsRef.on('value', snapshot => {
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
  }

  render() {
    return (
      <section className="DisplayRooms">
        <ul className="DisplayRooms-list">
          {this.state.rooms.map(room => {
            return <Room key={room.id} room={room} />;
          })}
        </ul>
      </section>
    );
  }
}

export default DisplayRooms;
