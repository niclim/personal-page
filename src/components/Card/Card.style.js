import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  margin: 10px 20px;
  width: 300px;
`

export const Content = styled.div`
  padding: 10px;

  h3 {
    margin-top: 0;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 16px;

  svg {
    height: 1.175em;
    width: 1.175em;
  }
`
