import React from 'react'
import { ImageSmall, List } from './TextCard.style'

const TextCardList = ({ listItems }) => {
  return (
    <List>
      {
        listItems.map(item => (
          React.createElement(
            item.link ? 'a' : React.Fragment,
            item.link ? { href: item.link, target: '_blank', key: JSON.stringify(item) } : { key: JSON.stringify(item) },
            (
              <li>
                {item.image && (
                  <ImageSmall
                    src={item.image} alt={item.text}
                  />
                )}
                {item.text}
              </li>
            )
          )
        ))
      }
    </List>
  )
}

export default TextCardList
