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
  getItem,
  getSuggestions,
  getCommands
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
      currentLocation: this.props.options,
      tabPressedRecently: false
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
    const commands = getCommands(this.state.input)
    let terminalMessages = [...this.state.terminalMessages]
    terminalMessages = [...terminalMessages, `${this.state.persistentInput} $ ${this.state.input}`]
    switch (commands[0]) {
      case 'ls':
        terminalMessages = [...terminalMessages, listOptions(this.state.currentLocation)]
        break
      case 'help':
        this.props.updateSelected('default')
        break
      case 'clear':
        terminalMessages = []
        break
      case 'node':
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
          terminalMessages = [...terminalMessages, `${this.state.input} is not a valid command`]
        }
        break
      default:
        terminalMessages = [...terminalMessages, `-bash: ${commands[0]}: command not found`]
    }

    this.setState((prev) => ({
      terminalMessages,
      input: '',
      previousInputCommands: [...prev.previousInputCommands, prev.input],
      currentIndex: prev.previousInputCommands.length + 1 // We want this to start "out of range" of the array
    }))
  }

  onTab () {
    const commands = getCommands(this.state.input)
    // console.log(this.state.currentLocation, commands, this.state.options)
    const suggestions = getSuggestions(this.state.currentLocation, commands, this.state.options)

    if (suggestions.length === 1) {
      this.setState((prev) => ({
        input: prev.input.split(/\s+/g).length > 1
          ? `${prev.input.replace(/(^.*\s).+?$/, '$1')}${suggestions[0]}`
          : suggestions[0]
      }))
    } else if (suggestions.length !== 0 && this.state.tabPressedRecently) {
      const terminalMessages = [...this.state.terminalMessages]
      terminalMessages.push(`${this.state.persistentInput} $ ${this.state.input}`)
      terminalMessages.push(...suggestions)
      this.setState((prev) => ({
        terminalMessages,
        previousInputCommands: [...prev.previousInputCommands, prev.input],
        tabPressedRecently: false,
        currentIndex: prev.previousInputCommands.length + 1 // We want this to start "out of range" of the array
      }))
    } else {
      this.setState({ tabPressedRecently: true })
      setTimeout(() => {
        this.setState({ tabPressedRecently: false })
      }, 1000)
    }
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
          <input
            value={input}
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
            ref={this.props.getRef}
            autoComplete='off'
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false'
          />
        </InputLine>
      </InputContainer>
    )
  }
}

export default TerminalInput

TerminalInput.defaultProps = {
  initialMessage: []
}
