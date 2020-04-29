import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js'
import CharComponent from './CharComponent/CharComponent.js'

class App extends Component {

  state = {
    inputText : "",
    inputLength: 0,
  };

  inputChangeHandler = (evt) => {
    this.setState({
      inputText : evt.target.value,
      inputLength : evt.target.value.length,
    });
  };

  charComponentClickHandler = (index) => {
    const newString = this.state.inputText.slice(0,index) + this.state.inputText.slice(index + 1);
    this.setState({
      inputText: newString,
      inputLength: newString.length,
    });
  };

  render() {

    const inputDivStyle = {padding: '10px', margin: '10px', border: '1px solid gray', display: 'inline-block'};

    const charComponents = [...this.state.inputText].map((c, i) => <CharComponent key={i} onClick={this.charComponentClickHandler.bind(this, i)} theChar={c}/>);

    return (
      <div className="App">
        <div style={inputDivStyle}>
          <input onChange={this.inputChangeHandler} value={this.state.inputText}></input>
          <p>
            The input length is &quot;{this.state.inputLength}&quot;
          </p>
          <ValidationComponent textLength={this.state.inputLength}/>
        </div>
        <div>
          {charComponents}
        </div>
      </div>
    );
  }
}

export default App;
