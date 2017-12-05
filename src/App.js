import React, {Component} from 'react'
// import PropTypes from 'prop-types'

// Render Props
// I'm going to do some work, and then im going to give to you some state (data)
// and you're going to tell me what I render.
// Give me a function that tells me what to render

// A prop that I use to know what to render

// We now don't receive any magical props, or state.
// We just use components.

// All of our code is encapsulated in a regular compoent.
// You want to  track the mouse, just render the Mouse compoent.
// the mouse is explicitly being passed in.. no mystery state or props.
// naming collisions, issues are just not there.
class Mouse extends Component {
    state = {
      x: 0,
      y: 0
    }
    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }
    render () {
      return (
        <div onMouseMove={this.handleMouseMove}>
          {this.props.children(this.state)}
        </div>
      )
    }
}

class Cat extends Component {
  state = {
    x: 0,
    y: 0
  }
  handleMouseMove = (event) => {
    console.log('MOUSE:', this.props.mouse)
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  render () {
    return (
      <div onMouseMove={this.handleMouseMove}>
        {this.props.children(this.state)}
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <Mouse>
        {
          mouse =>
            <Cat mouse={mouse}>
              {
                cat =>
                  <div style={{height: '100vh'}}>
                    <div>
                      <h1> The Mouse Position is ({mouse.x} , {mouse.y})</h1>
                      <p> The message is {this.props.message}</p>
                    </div>
                  </div>
              }
            </Cat>
        }
      </Mouse>
    )
  }
}

// Cat component doesn't really do anything,
// it's just to show that we can compose components dynamically
// Using a regular component, and composing inside our render method.

export default App

// What proves this pattern is more powerful than HOC?
// You can write any HOC pattern with a render prop.
// The inverse is not true
// You can not write a HOC with a component with a render prop
