import React from 'react'
import styled from 'styled-components'

import TerminalInput from './TerminalInput'

const TerminalWindow = styled.div`
  margin: auto;
  max-width: 550px;
  width: 100%;
`

const TerminalHeader = styled.div`
  height: 25px;
  background-color: #bbb;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`

const TerminalInputContainer = styled.div`
  background-color: #272727;
  padding: 10px;
  height: 300px;
`

const FakeAction = styled.div`
  border: 1px;
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.borderColor};
  height: 10px;
  width: 10px;
  margin: 3px;
  border-radius: 50%;
`

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
