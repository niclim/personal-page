import React, { Component } from 'react'
import {
  InputContainer,
  OutputLine,
  InputLine
} from './TerminalInput.styled'

class TerminalInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      previousInput: ['hi', 'hello'],
      input: ''
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // This will handle any input change
  handleChange (e) {
    this.setState({ input: e.target.value })
  }

  // This will handle any "special cases" - e.g. enter and tab
  handleKeyDown (e) {
    const { key } = e
    switch (key) {
      case 'Enter':
        // Execute
        break
      case 'Tab':
        // show suggestions
        break
    }
  }

  render () {
    const { previousInput, input } = this.state

    return (
      <InputContainer>
        {previousInput.map((text, i) => <OutputLine key={i}>{text}</OutputLine>)}
        <InputLine value={input} onKeyDown={this.handleKeyDown} onChange={this.handleChange} />
      </InputContainer>
    )
  }
}

export default TerminalInput
