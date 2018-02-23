import styled from 'styled-components'

export const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const HeadingContainer = styled.div`
  text-align: center;
`

export const Content = styled.section`
  padding: 10px 30px;
  flex-grow: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    align-content: center;
  }
`

export const TextContainer = styled.div`
  display: flex;
`

export const TerminalContainer = styled.div`
  flex-grow: 1;
  display: flex;
`

export const Footer = styled.footer`
  background-color: #333;
  padding: 10px;
`
