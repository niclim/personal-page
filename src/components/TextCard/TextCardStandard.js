import React from 'react'
import { LinksContainer, TextInformation } from './TextCard.style'
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
        <TextInformation>
          {
            image && (
              <Image
                src={image}
                alt={title}
                maxWidth={250}
              />
            )
          }
          <div>
            <p>{description}</p>
            {
              links && (
                <LinksContainer>
                  {links.map(link => (
                    <div key={JSON.stringify(link)}>
                      <p><a href={link.link} target='_blank'>
                        {React.createElement(icons[link.icon])}
                        &nbsp;{link.name}
                      </a></p>
                    </div>
                  ))}
                </LinksContainer>
              )
            }
          </div>
        </TextInformation>
      )
    )
  )
}

export default TextCardStandard
