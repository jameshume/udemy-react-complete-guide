import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    userName: "DefaultUser",
  };

  userInputChangeHandler = (evt) => {
    console.log({userName: evt.target.value});
    this.setState({userName: evt.target.value});
  };

  render() {
    console.log(this.state.userName);
    return (
      <div className="App">
        <header>
          <h1>This is my litte test app</h1>
          <UserInput changeHandler={this.userInputChangeHandler} userName={this.state.userName}></UserInput>
          <UserOutput userName={this.state.userName}>This is the first UserOuput</UserOutput>
          <UserOutput userName={this.state.userName}>This is the second UserOutput</UserOutput>
          <UserOutput userName={this.state.userName}>This is the third UserOuput</UserOutput>
        </header>
      </div>
    );
  }
}

export default App;
