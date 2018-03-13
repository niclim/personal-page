import React, { Component } from 'react'
import {
  TerminalWindow,
  TerminalHeader,
  TerminalInputContainer,
  FakeAction
} from './Terminal.style'
import TerminalInput from './TerminalInput'

const colors = [
  {
    backgroundColor: '#ff3b47',
    borderColor: '#9d252b'
  },
  {
    backgroundColor: '#ffc100',
    borderColor: '#9d802c'
  },
  {
    backgroundColor: '#00d742',
    borderColor: '#049931'
  }
]

class Terminal extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
  }

  handleClick () {
    this.textInput.focus()
  }

  scrollToBottom () {
    // Ensures this gets run at the end
    setTimeout(() => {
      this.inputContainer.scrollTop = this.inputContainer.scrollHeight - this.inputContainer.clientHeight
    }, 0)
  }

  render () {
    const { options } = this.props

    return (
      <TerminalWindow>
        <TerminalHeader>
          {colors.map((color, i) => <FakeAction key={i} {...color} />)}
        </TerminalHeader>
        <TerminalInputContainer onClick={this.handleClick} innerRef={comp => { this.inputContainer = comp }}>
          <TerminalInput
            options={options}
            getRef={(input) => { this.textInput = input }}
            scrollToBottom={this.scrollToBottom}
            updateSelected={this.props.updateSelected}
            initialMessage={['Press tab twice to get a list of available commands']}
          />
        </TerminalInputContainer>
      </TerminalWindow>
    )
  }
}

export default Terminal
