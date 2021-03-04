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
        <h2> what </h2>
        <h2> the </h2>
        <h2> heck </h2>
        <h2> is </h2>
        <h2> this </h2>

      </div>
    )
  }
}

export default App;
