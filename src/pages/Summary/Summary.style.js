import styled from 'styled-components'

export const PageContainer = styled.div`
  width: calc(100% - 40px);
  min-height: calc(100% - 40px);
  padding: 20px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 800px) {
    width: 800px;
    padding: 20px 0;
  }
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-flow: wrap;
`

export const SocialMediaItem = styled.div`
  padding: 10px 20px;
`
