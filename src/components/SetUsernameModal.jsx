import React from 'react';
import '../styles/css/SetUsernameModal.css';

class SetUsernameModal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="SetUsernameModal-wrapper">
        <div className="SetUsernameModal-overlay" />
        <form className="SetUsernameModal-form" onSubmit={this.props.handleSubmit}>
          <h3>Set a username</h3>
          <p>This name will appear when you send messages</p>
          <input
            type="text"
            className="SetUsernameModal-input"
            name="username"
            placeholder="Enter your username"
            onChange={this.props.handleChange}
            value={this.props.username}
          />
          <button className="SetUsernameModal-button SetUsernameModal-button--submit" type="submit">
            Set Username
          </button>
        </form>
      </div>
    );
  }
}

export default SetUsernameModal;
