import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  height: 100%;

  @media screen and (max-width: 768px) {
    height: initial;
  }
`

export const HeadingContainer = styled.div`
  text-align: center;
`

export const Content = styled.section`
  padding: 10px 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 380px;

  @media screen and (max-width: 768px) {
    height: initial;
    flex-direction: column;
    align-items: stretch;
    align-content: center;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  margin: 10px 50px;

  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`
export const AboutContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`
