import React from 'react';
import firebase from '../firebase';

import AddRoomButton from './AddRoomButton';
import RoomList from './RoomList';

class Homepage extends React.Component {
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
      <div className="Homepage">
        <AddRoomButton />
        <RoomList rooms={this.state.rooms} />
      </div>
    )
  }
}

export default Homepage;