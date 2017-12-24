import React, { Component } from 'react'
import styled from 'styled-components'

import Terminal from '../../components/Terminal'
import TextCard from '../../components/TextCard'

const options = {
  selectMessage: '',
  message: 'Welcome',
  children: [
    {
      selectMessage: 'Select this message',
      message: 'Extra information in this thing',
      children: null
    },
    {
      selectMessage: 'Select this other message',
      message: 'test test',
      children: null
    },
    {
      selectMessage: 'things of things',
      message: 'Message is a test for children in children',
      children: [
        {
          selectMessage: 'Select this message',
          message: 'Extra information in this thing',
          children: null
        }
      ]
    }
  ]
}

const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const HeadingContainer = styled.div`
  text-align: center;
`

const Content = styled.div`
  padding: 10px 30px;
  flex-grow: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    align-content: center;
  }
`

const TextContainer = styled.div`
  flex-grow: 1;
  display: flex;
`

const TerminalContainer = styled.div`
  flex-grow: 1;
  display: flex;
`

const Footer = styled.div`
  background-color: #333;
  padding: 10px;
`

class Home extends Component {
  render () {
    return (
      <PageContainer>
        <HeadingContainer>
          <h1>Nicholas Lim</h1>
          <h2>Full Stack Web Developer</h2>
        </HeadingContainer>
        <Content>
          <TextContainer>
            <TextCard />
          </TextContainer>
          <TerminalContainer>
            <Terminal options={options} />
          </TerminalContainer>
        </Content>
        <Footer>
          This is the footer
        </Footer>
      </PageContainer>
    )
  }
}

export default Home
