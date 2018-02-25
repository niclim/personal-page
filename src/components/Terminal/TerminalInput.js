import React, { Component } from 'react'
import {
  InputContainer,
  OutputLine,
  InputLine
} from './TerminalInput.style'

import {
  listOptions,
  validateCommand,
  changeDirectory,
  getItem
} from './terminalFunctions'

class TerminalInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      previousInput: this.props.initialMessage,
      input: '',
      persistentInput: '~',
      options: this.props.options,
      currentLocation: this.props.options
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.onEnter = this.onEnter.bind(this)
    this.onTab = this.onTab.bind(this)
  }

  // This will handle any input change
  handleChange (e) {
    this.setState({ input: e.target.value })
  }

  // This will handle any "special cases" - e.g. enter and tab
  handleKeyDown (e) {
    const { key } = e

    // Probably add an up arrow as well
    // eslint-disable-next-line
    switch (key) {
      case 'Enter':
        this.onEnter()
        this.props.scrollToBottom()
        break
      case 'Tab':
        e.preventDefault()
        this.onTab()
        this.props.scrollToBottom()
        break
    }
  }

  onEnter () {
    if (this.state.input === '') { return }
    // also scroll to the bottom
    const commands = this.state.input.toLowerCase().split(/\s+/g)
    const newPrevInput = [...this.state.previousInput]
    switch (commands[0]) {
      case 'ls':
        newPrevInput.push(`${this.state.persistentInput} $ ${this.state.input}`)
        newPrevInput.push(listOptions(this.state.currentLocation))
        break
      case 'run':
      case 'cd':
        newPrevInput.push(`${this.state.persistentInput} $ ${this.state.input}`)
        if (validateCommand(this.state.currentLocation, commands, this.state.options)) {
          if (commands[0] === 'cd') {
            // update current location
            // update persisitent input
            const { newLocation, path } = changeDirectory(this.state.currentLocation, commands, this.state.options)
            this.setState({
              currentLocation: newLocation,
              persistentInput: path
            })
          } else {
            const item = getItem(this.state.currentLocation, commands[1], 'file')
            this.props.updateSelected(item.action)
          }
        } else {
          newPrevInput.push(`${this.state.input} is not a valid command`)
        }
        break
      default:
        newPrevInput.push(`-bash: ${commands[0]}: command not found`)
    }

    this.setState((prev) => ({
      previousInput: newPrevInput,
      input: ''
    }))
  }

  onTab () {
    console.log('show suggestions - this needs to check whether tab was hit twice ')
  }

  render () {
    const { previousInput, input, persistentInput } = this.state

    return (
      <InputContainer>
        {previousInput.map((text, i) => <OutputLine key={i}>{text}</OutputLine>)}
        <InputLine>
          <span>{persistentInput} $</span>
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
