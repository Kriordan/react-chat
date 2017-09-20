import React from 'react';
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
      <div>
        <button onClick={this.toggleModal} className="AddRoom-submit">
          {this.props.text}
        </button>
        <AddRoomModal show={this.state.isOpen} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

export default AddRoomButton;
