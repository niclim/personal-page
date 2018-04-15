import styled from 'styled-components'

// Extra flex rules required for images inside a flexbox
export const _Image = styled.img`
  ${props => props.maxWidth ? `max-width: ${props.maxWidth}px;` : ''}
  ${props => props.maxHeight ? `max-height: ${props.maxHeight}px;` : ''}
  align-self: center;
  flex: 0 0 auto;
`
