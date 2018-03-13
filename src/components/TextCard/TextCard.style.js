import styled from 'styled-components'

export const TextWrapper = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 10px 20px;
  margin: auto;
  width: 510px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  height: 250px;
  
  @media screen and (min-width: 1370px) {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 20px 20px 65px;
  }
`

export const List = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      padding: 0 20px;
    }
  }
`

export const LinksContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;

  p {
    color: inherit;
  }
`
