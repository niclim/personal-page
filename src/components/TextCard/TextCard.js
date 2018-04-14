import React from 'react'
import TextCardStandard from './TextCardStandard'
import TextCardList from './TextCardList'
import TextCardHelp from './TextCardHelp'
import { TextWrapper } from './TextCard.style'

const TextCard = props => {
  const { title, type } = props
  let element

  switch (type) {
    case 'standard':
      element = TextCardStandard
      break
    case 'list':
      element = TextCardList
      break
    case 'help':
      element = TextCardHelp
      break
    default:
      console.warn(`No such type \`${type}\` defined in TextCard `)
  }

  return (
    <TextWrapper>
      <h1>{title}</h1>
      {
        React.createElement(
          element,
          props
        )
      }
    </TextWrapper>
  )
}

export default TextCard
