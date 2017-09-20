import React from 'react';

class SectionTitle extends React.Component {
  render() {
    return (
      <h1 className="SectionTitle">
        {this.props.children}
      </h1>
    );
  }
}

export default SectionTitle;
