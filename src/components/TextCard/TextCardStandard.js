import React from 'react'
import { Image } from './TextCard.style'

const TextCardStandard = ({ title, image, description, link }) => {
  const linkProps = { href: link, target: '_blank' }

  return (
    React.createElement(
      link ? 'a' : React.Fragment,
      link ? linkProps : {},
      (
        <React.Fragment>
          {
            image && (
              <Image
                src={image}
                alt={title}
              />
            )
          }
          <p>{description}</p>
        </React.Fragment>
      )
    )
  )
}

export default TextCardStandard
