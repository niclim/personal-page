import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

class FadeUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      in: false
    }
    this.defaultStyle = {
      transition: `opacity ${this.props.duration}ms ease-in-out, transform ${this.props.duration}ms ease-in-out`,
      opacity: 0,
      transform: `translateY(0)`
    }

    this.transitionStyles = {
      entering: { opacity: 0, transform: `translateY(20px)` },
      entered: { opacity: 1, transform: `translateY(0)` }
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ in: true })
    }, this.props.delay)
  }

  render () {
    const { duration, children } = this.props

    return (
      <Transition in={this.state.in} timeout={duration}>
        {
          state => (
            React.cloneElement(React.Children.only(children), { style: {
              ...this.defaultStyle,
              ...this.transitionStyles[state]
            }})
          )
        }
      </Transition>
    )
  }
}

export default FadeUp

FadeUp.propTypes = {
  delay: PropTypes.number,
  duration: PropTypes.number
}

FadeUp.defaultProps = {
  delay: 0,
  duration: 300
}
