import React, {Component} from 'react'
// import PropTypes from 'prop-types'

// HOC pattern: What if this is a way to share code, instead of Mixins?
// Your HOC is itself a funciton, that is used to enhance another conponent.
// It could keep some state, or data, and then pass that data to your component as a prop.
// We could take info that is shared, put it in the HOC, then just
// wrap all of our components in the HOC.

// 1) We can share behavior - anyone can use the withMouseComp

// Problems with HOC implementation

// We have a lot of the same problems we've had with Mixins,
// weve just changed forms.
// we can use ES6 classes, woohoo 👎

// "Composition is better than inheritance"

// HOF
const add = (x, y) => x + y
add(9, 8)

const createAdder = (a) => (b) => add(a, b) // HOF
// ITS crate adders job to create a new function.
const addTwo = createAdder(2)

addTwo(8) // 10

const withCat = (Component) => {
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
          <Component {...this.props} mouse={this.state} />
        </div>
      )
    }
  }
}

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
          <Component {...this.props} mouse={this.state} />
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
          <p>The message is {this.props.message} </p>
        </div>
      </div>
    )
  }
}

// Composition is happening statically (doesn't change),
// at class creation time.
// The whole React flow is very dynamic
// we have to be very careful up front when
// doing things statically
// we have to be sure that's what we want.
// HOCS do not compose dynamically (not a failure of mixins)
export default withMouse(withCat(App))

// When App is imported, they aren't really
// aware of the withMouse thing..
// Have to pass through props to get message.

// Still have name collision problems. See withCat example
// multiple HOCS on the same component. Sometimes you wrap it multiple times.
// 8 or 9 components wrapping one component.
// every problem is the nail, and every HOC is the hammer
