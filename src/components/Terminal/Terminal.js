import React, { Component } from 'react'
import {
  TerminalWindow,
  TerminalHeader,
  TerminalInputContainer,
  FakeAction
} from './Terminal.styled'
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
  }

  handleClick () {
    this.textInput.focus()
  }

  render () {
    const { options } = this.props

    return (
      <TerminalWindow>
        <TerminalHeader>
          {colors.map((color, i) => <FakeAction key={i} {...color} />)}
        </TerminalHeader>
        <TerminalInputContainer onClick={this.handleClick}>
          <TerminalInput options={options} getRef={(input) => { this.textInput = input }} />
        </TerminalInputContainer>
      </TerminalWindow>
    )
  }
}

export default Terminal
