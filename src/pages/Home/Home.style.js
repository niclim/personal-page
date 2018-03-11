import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  padding-bottom: 20%;
  margin: auto;

  @media screen and (max-width: 768px) {
    height: initial;
  }
`

export const HeadingContainer = styled.div`
  text-align: center;

  h2 {
    font-weight: normal;
  }
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

export const ItemContainer = styled.div`
  display: flex;
  margin: 10px;
`
