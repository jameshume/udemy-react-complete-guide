import React, { Component } from 'react';

class ValidationComponent extends Component {
  MIN_TEXT_LEN = 5;
  MAX_TEXT_LEN = 15;

  render() {
    let text="";
    let style={};
    if (this.props.textLength <= this.MIN_TEXT_LEN)
    {
      text="Text too short";
      style={background: 'lightcoral'};
    }
    else if (this.props.textLength >= this.MAX_TEXT_LEN)
    {
      text="Text too long";
      style={background: 'lightcoral'};
    }
    else
    {
      text="Text is valid";
      style={background: 'lightgreen'};
    }
    return <p style={style}>{text}</p>;
  }
}

export default ValidationComponent;