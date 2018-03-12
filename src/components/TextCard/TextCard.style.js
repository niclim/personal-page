import styled from 'styled-components'

export const TextWrapper = styled.div`
  text-align: center;
  background-color: #fff;
  padding: 10px 20px;
  margin: auto;
  max-width: 550px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  min-height: 100px;
  height: 300px;
  
  @media screen and (min-width: 768px) {
    min-width: 300px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    height: 325px;
  }
`

export const Image = styled.img`
  max-width: 300px;
  max-height: 100px;
`

export const ImageSmall = styled.img`
  max-width: 50px;
  max-height: 50px;
`
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  
  a {
    
  }

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
