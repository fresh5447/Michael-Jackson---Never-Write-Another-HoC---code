import React, {Component} from 'react'
// import PropTypes from 'prop-types'

// Problem with mixin:
// Not always obvious where the state is coming from.
// Which one of these mixins is even providing my state?
// Mixins that manipulate state are bad etc.
// 2 What if you had a second mixin that tried to manipulate the
// same state?

// Mixin Issues Recap:
// Dont want to support createClass
// Don't know where state is coming from
// Name clashing

const MouseMixin = {
  getInitialState () {
    return ({
      x: 0,
      y: 0
    })
  },
  handleMouseMove: (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
}

const MouseMixin = {
  getInitialState () {
    return ({
      x: 'ahahahahaaha'
    })
  }
}

class App extends Component {
  mixins = [MouseMixin, MouseMixin]
  render () {
    const {x, y} = this.state
    return (
      <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
        <div>
          <h1> The Mouse Position is ({x} , {y})</h1>
        </div>
      </div>
    )
  }
}

export default App
