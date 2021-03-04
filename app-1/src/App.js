import React, { Component } from 'react'
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      userInput: '',
    }

  }

    handleChange (value) {
      this.setState({ userInput: value })
      console.log(this.state.userInput)
    }

    updateText (userInput) {

    }

  

  render() {
    return (
      <div>
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        <span> { JSON.stringify(this.state.userInput, null, 10) } </span>
      </div>
    )
  }
}

export default App;


//need to get text that user puts into field

//need to get that text and display it on the screen
