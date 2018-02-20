import React, { Component } from 'react'
import {
  InputContainer,
  OutputLine,
  InputLine
} from './TerminalInput.styled'
/*
Update this to:
  - Use an input box and update the css styling to work and look
    - Need to handle tab, enter
    - Need to update the cursor styling
  - Use it more as a selector rather than a real terminal
    - i.e. this means it takes in options that will do different things and produce different actions
*/

class TerminalInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      previousInput: this.props.initialMessage,
      input: '',
      persistentInput: '~ $ '
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  // This will handle any input change
  handleChange (e) {
    this.setState({ input: e.target.value })
  }

  // This will handle any "special cases" - e.g. enter and tab
  handleKeyDown (e) {
    const { key } = e
    // eslint-disable-next-line
    switch (key) {
      case 'Enter':
        // also scroll to the bottom
        const commands = this.state.input.toLowerCase().split(/\s+/g)
        // eslint-disable-next-line
        switch (commands[0]) {
          case 'ls':
            break
          case 'run':
            break
          case 'cd':
            break
        }

        this.setState((prev) => ({
          previousInput: [...prev.previousInput, prev.input],
          input: ''
        }))
        break
      case 'Tab':
        // show suggestions
        e.preventDefault()
        console.log('show suggestions')
        break
    }
  }

  render () {
    const { previousInput, input, persistentInput } = this.state

    return (
      <InputContainer>
        {previousInput.map((text, i) => <OutputLine key={i}>{text}</OutputLine>)}
        <InputLine>
          <span>{persistentInput}</span>
          <input value={input} onKeyDown={this.handleKeyDown} onChange={this.handleChange} ref={this.props.getRef} />
        </InputLine>
      </InputContainer>
    )
  }
}

export default TerminalInput

TerminalInput.defaultProps = {
  initialMessage: ['hi', 'hello']
}
