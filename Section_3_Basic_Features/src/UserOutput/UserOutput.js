import React, { Component } from 'react';
import './UserOutput.css';

class UserOutput extends Component {
  render() {
    return (
      <div className="UserOutput">
        <p> {this.props.children} </p>
        <p> Username is &quot;{this.props.userName}&quot; </p>
      </div>
    );
  }
}

export default UserOutput;