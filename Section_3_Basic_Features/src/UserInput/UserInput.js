import React, { Component } from 'react';

class UserInput extends Component {
  render() {
    return (
      <div className="UserInput">
        <input type="text" onChange={this.props.changeHandler} value={this.props.userName}></input>
      </div>
    );
  }
}

export default UserInput;