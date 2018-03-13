import React, { Component } from 'react'
import { Link, FadeUp, Image } from '../../components'
import {
  PageContainer,
  SocialMediaContainer,
  SocialMediaItem
} from './Summary.style'

import { textCardInfo } from '../../data'

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
        <FadeUp delay={150} duration={250}>
          <div>
            <h2>Projects</h2>
          </div>
        </FadeUp>
        <FadeUp delay={250} duration={250}>
          <div>
            <h2>Social Media</h2>
            <SocialMediaContainer>
              {textCardInfo.showSocialMedia.listItems.map(item => (
                <SocialMediaItem key={JSON.stringify(item)}>
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
                </SocialMediaItem>
              ))}
            </SocialMediaContainer>
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
