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
      terminalMessages: this.props.initialMessage,
      previousInputCommands: [],
      currentIndex: 0,
      input: '',
      persistentInput: '~',
      options: this.props.options,
      currentLocation: this.props.options
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.onEnter = this.onEnter.bind(this)
    this.onTab = this.onTab.bind(this)
    this.onArrow = this.onArrow.bind(this)
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
        this.onEnter()
        this.props.scrollToBottom()
        break
      case 'Tab':
        e.preventDefault()
        this.onTab()
        this.props.scrollToBottom()
        break
      case 'ArrowUp':
      case 'ArrowDown':
        e.preventDefault()
        this.onArrow(key)
        this.props.scrollToBottom()
        break
      case 'c':
        if (e.ctrlKey) {
          this.setState(prev => {
            const newMessage = `${prev.persistentInput} $ ${prev.input}`
            return {
              terminalMessages: [...prev.terminalMessages, newMessage],
              input: ''
            }
          })
          this.props.scrollToBottom()
        }
    }
  }

  onEnter () {
    if (this.state.input === '') { return }
    // also scroll to the bottom
    const commands = this.state.input.toLowerCase().split(/\s+/g)
    const terminalMessages = [...this.state.terminalMessages]
    terminalMessages.push(`${this.state.persistentInput} $ ${this.state.input}`)
    switch (commands[0]) {
      case 'ls':
        terminalMessages.push(listOptions(this.state.currentLocation))
        break
      case 'run':
      case 'cd':
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
          terminalMessages.push(`${this.state.input} is not a valid command`)
        }
        break
      default:
        terminalMessages.push(`-bash: ${commands[0]}: command not found`)
    }

    this.setState((prev) => ({
      terminalMessages,
      input: '',
      previousInputCommands: [...prev.previousInputCommands, prev.input],
      currentIndex: prev.previousInputCommands.length + 1 // We want this to start "out of range" of the array
    }))
  }

  onTab () {
    console.log('show suggestions - this needs to check whether tab was hit twice ')
  }

  onArrow (direction) {
    // previous input to check
    const modifier = direction === 'ArrowUp' ? -1 : 1
    const { previousInputCommands, currentIndex } = this.state
    const index = currentIndex + modifier
    if (previousInputCommands[index] !== undefined) {
      this.setState({
        input: previousInputCommands[index],
        currentIndex: index
      })
    }
  }

  render () {
    const { terminalMessages, input, persistentInput } = this.state

    return (
      <InputContainer>
        {terminalMessages.map((text, i) => <OutputLine key={i}>{text}</OutputLine>)}
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
