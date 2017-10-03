import React from 'react';
import '../styles/css/RoomList.css';
import RoomListItem from './RoomListItem';

class RoomList extends React.Component {

  render() {
    return (
      <section className="RoomList">
        <ul className="RoomList-list">
          {this.props.rooms.map(room => {
            return <RoomListItem key={room.id} room={room} />;
          })}
        </ul>
      </section>
    );
  }
}

export default RoomList;
