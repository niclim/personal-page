import styled from 'styled-components'

export const TerminalWindow = styled.div`
  margin: auto;
  max-width: 550px;
  width: 100%;
`

export const TerminalHeader = styled.div`
  height: 25px;
  background-color: #bbb;
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`

export const TerminalInputContainer = styled.div`
  background-color: #272727;
  padding: 10px;
  height: 300px;
  overflow-y: scroll;
`

export const FakeAction = styled.div`
  border: 1px;
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.borderColor};
  height: 10px;
  width: 10px;
  margin: 3px;
  border-radius: 50%;
`
