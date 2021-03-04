import React, { Component } from 'react'
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      userInput: '',
      theList: [
        'what',
        'chicken',
        'ramen',
        'mississippi'
      ],
      filtered: []
    }

  }

    

    handleChange (value) {
      this.setState({ userInput: value })
    }

    updateText (userInput) {

    }

  

  render() {

    let stuffToDisplay = this.state.theList
      .filter((e, i) => {
        return e.includes(this.state.userInput)
      })
      .map((e, i) => {
        return <h2 key={i}> {e} </h2>
      })

    return (
      <div>
        <input onChange={ (e) => this.handleChange(e.target.value) }></input>
        {stuffToDisplay}
      </div>
    )
  }
}

export default App;
