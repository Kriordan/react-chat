import React from 'react';
import '../styles/css/Sidebar.css';

import SectionTitle from './SectionTitle';
import AddRoomButton from './AddRoomButton';
import RoomList from './RoomList';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="Sidebar">
        <SectionTitle>Bloc Chat</SectionTitle>
        <AddRoomButton text="New Room" />
        <RoomList />
      </div>
    );
  }
}

export default Sidebar;
