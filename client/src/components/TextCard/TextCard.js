import React from 'react'
import styled from 'styled-components'

const TextWrapper = styled.div`
  background-color: #fff;
  padding: 10px 20px;
  margin: auto;
  max-width: 550px;
  width: 100%;
  
  @media screen and (min-width: 768px) {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    height: 325px;
  }
`
const TextCard = () => {
  return (
    <TextWrapper>
      Hello
    </TextWrapper>
  )
}

export default TextCard
