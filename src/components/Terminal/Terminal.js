import React from 'react'
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

const Terminal = ({ options }) => {
  return (
    <TerminalWindow>
      <TerminalHeader>
        {colors.map((color, i) => <FakeAction key={i} {...color} />)}
      </TerminalHeader>
      <TerminalInputContainer>
        <TerminalInput options={options} />
      </TerminalInputContainer>
    </TerminalWindow>
  )
}

export default Terminal
