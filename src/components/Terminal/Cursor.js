import React, { Component } from 'react'

class Cursor extends Component {
  constructor (props) {
    super(props)
    this.state = { text: '_' }
  }

  componentDidMount () {
    this.interval = window.setInterval(() => {
      this.setState((prevState) => ({
        text: prevState.text === '_' ? ' ' : '_'
      }))
    }, 600)
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }

  render () {
    return (
      <span>{this.state.text}</span>
    )
  }
}

export default Cursor
