import styled from 'styled-components'

export const InputContainer = styled.div`
  font-family: monospace;
  color: #fff;
`

export const OutputLine = styled.p`
  margin: 0;
  font-size: 12px;
`

export const InputLine = styled.p`
  width: 100%;
  display: flex;
  margin: 0;
  font-size: 12px;

  > input {
    background: none;
    border: none;
    font-family: monospace;
    color: #fff;
    flex-grow: 1;
    padding-left: 5px;
    
    &:focus {
      border: none;
      outline: none;
    }
  }
`
