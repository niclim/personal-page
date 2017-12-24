import React, { Component } from 'react'
import styled from 'styled-components'

import Cursor from './Cursor'

const InputContainer = styled.div`
  font-family: monospace;
  color: #fff;
`

class TerminalInput extends Component {
  constructor (props) {
    super(props)
    this.state = {

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
    // handle arrows, and enter for terminal
    console.log(e.key)
  }

  render () {
    return (
      <InputContainer>
        $<Cursor />
      </InputContainer>
    )
  }
}

export default TerminalInput
