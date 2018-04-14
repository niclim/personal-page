import React from 'react'
import { LinksContainer } from './TextCard.style'
import { FaChain, FaGithubSquare } from 'react-icons/lib/fa'
import Image from '../Image'

// Create a lookup to map data to an icon
const icons = { FaChain, FaGithubSquare }

const TextCardStandard = ({ title, image, description, link, links }) => {
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
                maxWidth={300}
                maxHeight={100}
              />
            )
          }
          <p>{description}</p>
          {
            links && (
              <LinksContainer>
                {links.map(link => (
                  <div key={JSON.stringify(link)}>
                    <a href={link.link} target='_blank'>
                      {React.createElement(icons[link.icon])}
                      <p>{link.name}</p>
                    </a>
                  </div>
                ))}
              </LinksContainer>
            )
          }
        </React.Fragment>
      )
    )
  )
}

export default TextCardStandard
