import React from 'react'
import { List } from './TextCard.style'
import Image from '../Image'

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
                  <Image
                    src={item.image}
                    alt={item.text}
                    maxWidth={50}
                    maxHeight={50}
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
