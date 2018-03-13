import styled from 'styled-components'

export const _Image = styled.img`
  ${props => props.maxWidth ? `max-width: ${props.maxWidth}px;` : ''}
  ${props => props.maxHeight ? `max-height: ${props.maxHeight}px;` : ''}
`
