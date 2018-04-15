import React from 'react'
import { CardContainer, Content, LinksContainer } from './Card.style'
import Image from '../Image'
import { FaChain, FaGithubSquare } from 'react-icons/lib/fa'

const icons = { FaChain, FaGithubSquare }

const Card = ({ img, title, description, links }) => {
  return (
    <CardContainer>
      <div>
        <Image
          src={img}
          maxWidth={250}
        />
      </div>
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
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
      </Content>
    </CardContainer>
  )
}

export default Card
