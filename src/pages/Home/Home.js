import React, { Component } from 'react'

import Terminal from '../../components/Terminal'
import TextCard from '../../components/TextCard'
import FadeUp from '../../components/FadeUp'
import {
  PageContainer,
  HeadingContainer,
  Content,
  ItemContainer,
  AboutContainer
} from './Home.style'

import { options, textCardInfo } from '../../data'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSelected: null
    }
    this.updateSelected = this.updateSelected.bind(this)
  }

  updateSelected (name) {
    this.setState({ currentSelected: name })
  }

  render () {
    return (
      <PageContainer>
        <FadeUp delay={50} duration={250}>
          <HeadingContainer>
            <h1>Nicholas Lim</h1>
            <h2>JavaScript / React / Redux Developer</h2>
          </HeadingContainer>
        </FadeUp>
        <FadeUp delay={150} duration={250}>
          <Content>
            <ItemContainer>
              <TextCard
                {...textCardInfo[this.state.currentSelected || 'default']}
              />
            </ItemContainer>
            <ItemContainer>
              <Terminal options={options} updateSelected={this.updateSelected} />
            </ItemContainer>
          </Content>
        </FadeUp>
        <FadeUp delay={150} duration={350}>
          <AboutContainer>
            <h2>Don't want to use the terminal?</h2>
            <p>Click here to see a different view</p>
          </AboutContainer>
        </FadeUp>
      </PageContainer>
    )
  }
}

export default Home
