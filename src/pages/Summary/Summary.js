import React, { Component } from 'react'
import { Link, FadeUp, Image, Card } from '../../components'
import {
  PageContainer,
  ItemContainer,
  Item,
  ProjectContainer
} from './Summary.style'

import { textCardInfo } from '../../data'
const { showGraphite, showTowerDefense } = textCardInfo
const projects = [showGraphite, showTowerDefense]
class Summary extends Component {
  render () {
    return (
      <PageContainer>
        <FadeUp delay={50} duration={250}>
          <div>
            <h1>Nicholas Lim</h1>
            <h2>JavaScript / React / Redux Developer</h2>
          </div>
        </FadeUp>
        <FadeUp delay={50} duration={250}>
          <div>
            <h2>Skills</h2>
            <ItemContainer>
              {textCardInfo.showSkills.listItems.map(item => (
                <Item key={JSON.stringify(item)}>
                  <a href={item.link} target='_blank'>
                    <div>
                      <Image
                        src={item.image}
                        alt={item.text}
                        maxHeight={50}
                      />
                    </div>
                    <div>
                      {item.text}
                    </div>
                  </a>
                </Item>
              ))}
            </ItemContainer>
          </div>
        </FadeUp>
        <FadeUp delay={150} duration={250}>
          <div>
            <h2>Projects</h2>
            <ProjectContainer>
              {
                projects.map(project => (
                  <Card
                    key={JSON.stringify(project)}
                    img={project.image}
                    title={project.title}
                    description={project.description}
                    links={project.links}
                  />
                ))
              }
            </ProjectContainer>
          </div>
        </FadeUp>
        <FadeUp delay={250} duration={250}>
          <div>
            <h2>Social Media</h2>
            <ItemContainer>
              {textCardInfo.showSocialMedia.listItems.map(item => (
                <Item key={JSON.stringify(item)}>
                  <a href={item.link} target='_blank'>
                    <div>
                      <Image
                        src={item.image}
                        alt={item.text}
                        maxHeight={50}
                      />
                    </div>
                    <div>
                      {item.text}
                    </div>
                  </a>
                </Item>
              ))}
            </ItemContainer>
          </div>
        </FadeUp>
        <FadeUp delay={350} duration={250}>
          <div>
            <p><Link to='/'>Back to terminal view</Link></p>
          </div>
        </FadeUp>
      </PageContainer>
    )
  }
}

export default Summary
