import React from 'react';
import '../styles/css/AddRoomButton.css';

import AddRoomModal from './AddRoomModal';

class AddRoomButton extends React.Component {
  state = {
    isOpen: false
  };
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div className="AddRoom-wrapper">
        <button onClick={this.toggleModal} className="AddRoom-submit">
          {this.props.text}
        </button>
        <AddRoomModal show={this.state.isOpen} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default AddRoomButton;
