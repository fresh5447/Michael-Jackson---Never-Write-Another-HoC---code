import React, {Component} from 'react'
// import PropTypes from 'prop-types'

// HOC pattern: What if this is a way to share code, instead of Mixins?
// Your HOC is itself a funciton, that is used to enhance another conponent.
// It could keep some state, or data, and then pass that data to your component as a prop.
// We could take info that is shared, put it in the HOC, then just
// wrap all of our components in the HOC.

// HOF
const add = (x, y) => x + y
add(9, 8)

const createAdder = (a) => (b) => add(a, b) // HOF
// ITS crate adders job to create a new function.
const addTwo = createAdder(2)

addTwo(8) // 10

const withMouse = (Component) => {
  return class extends Component {
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
          <Component mouse={this.state} />
        </div>
      )
    }
  }
}

class App extends Component {
  render () {
    const {x, y} = this.props.mouse
    return (
      <div style={{height: '100vh'}}>
        <div>
          <h1> The Mouse Position is ({x} , {y})</h1>
        </div>
      </div>
    )
  }
}

export default withMouse(App)
