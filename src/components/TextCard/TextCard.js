import React from 'react'
import styled from 'styled-components'

const TextWrapper = styled.div`
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
const TextCard = (props) => {
  return (
    <TextWrapper>
      {props.children}
    </TextWrapper>
  )
}

export default TextCard
