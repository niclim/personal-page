import React from 'react'
import { TextWrapper, Image } from './TextCard.style'

const TextCard = ({ title, image, description, link }) => {
  const linkProps = { href: link, target: '_blank' }

  return (
    <TextWrapper>
      <h1>{title}</h1>
      {
        React.createElement(
          link ? 'a' : React.Fragment,
          link ? linkProps : {},
          (
            <React.Fragment>
              <Image
                src={image}
                alt={title}
              />
              <p>{description}</p>
            </React.Fragment>
          )
        )
      }
    </TextWrapper>
  )
}

export default TextCard
