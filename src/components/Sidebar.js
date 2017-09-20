import React from 'react';

class Sidebar extends React.Component() {
  render() {
    return (
      <div className="Sidebar">
        <h1 className="Header-title">Welcome to Bloc Chat</h1>
        <section className="AddRoom">
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
            <button className="AddRoom-submit">Add Room</button>
          </form>
        </section>
        <section className="DisplayRooms">
          <ul className="DisplayRooms-list">
            {this.state.rooms.map(room => {
              return (
                <li className="DisplayRooms-room" key={room.id}>
                  <h4 className="DisplayRooms-name">
                    {room.name}
                  </h4>
                  <p className="DisplayRooms-description">
                    {room.description}
                  </p>
                  <span className="DisplayRooms-deleteButton">X</span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default Sidebar;
