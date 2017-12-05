import React, {Component} from 'react'
// import PropTypes from 'prop-types'

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

class App extends Component {
  mixins = [MouseMixin]
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
