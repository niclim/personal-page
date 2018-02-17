import React, { Component } from 'react'
import styled from 'styled-components'

import Cursor from './Cursor'
import keystrokes from '../../utils/keystrokes'

const InputContainer = styled.div`
  font-family: monospace;
  color: #fff;
`

const InputLine = styled.pre`
  margin: 0;
`

class TerminalInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      previousInput: [],
      input: ''
    }
    this.handleKeydown = this.handleKeydown.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown (e) {
    // prevent default
    //
    /**
     * Keys to handle:
     * arrow keys
     * alt keys + backspace and arrows
     * enter
     * tab (and double tab for functionality)
     */

    let { key } = e
    console.log(key)
    if (key in keystrokes) {
      this.setState((prevState) => ({ input: prevState.input + key }))
    } else if (key === 'Backspace') {
      this.setState((prevState) => ({ input: prevState.input.slice(0, -1)}))
    }
  }

  render () {
    return (
      <InputContainer>
        <InputLine>~ $ {this.state.input}<Cursor /></InputLine>
      </InputContainer>
    )
  }
}

export default TerminalInput
