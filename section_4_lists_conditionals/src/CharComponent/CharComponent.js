import React, { Component } from 'react';
import './CharComponent.css'

class CharComponent extends Component {
  render() {
    const myStyle = {
      display: 'inline-block',
      border: '1px solid blue',
      width: '15px',
      padding:'16px',
      margin:'16px', 
    };

    return (
      <div className="CharComponent" onClick={this.props.onClick} style={myStyle}>
        <p>
          {this.props.theChar}
        </p>
      </div>
    );
  }
}

export default CharComponent;