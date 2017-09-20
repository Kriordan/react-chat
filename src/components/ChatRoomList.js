import React from 'react';
import SectionTitle from './SectionTitle';
import AddRoomButton from './AddRoomButton';
import DisplayRooms from './DisplayRooms';

class ChatRoomList extends React.Component {
  render() {
    return (
      <div className="ChatRoomList">
        <SectionTitle>Bloc Chat</SectionTitle>
        <AddRoomButton text="New Room" />
        <DisplayRooms />
      </div>
    );
  }
}

export default ChatRoomList;
