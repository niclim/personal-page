import styled from 'styled-components'

export const InputContainer = styled.div`
  p {
    font-family: monospace;
    color: #fff;
  }
`

export const OutputLine = styled.p`
  margin: 0 0 1px 0;
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
    padding: 0;
    padding-left: 7px;
    font-size: 12px;

    &:focus {
      border: none;
      outline: none;
    }
  }
`
