import React, { Component } from 'react'
import './App.css'
import { Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import GithubIcon from 'react-icons/lib/ti/social-github-circular'
import TwitterIcon from 'react-icons/lib/ti/social-twitter-circular'
import LinkedinIcon from 'react-icons/lib/ti/social-linkedin-circular'

const Colors = {
  mainRed: 'rgba(226, 61, 65, 0.91)'
}

// const Title = styled.h1`
//   color: white;
//   margin: 0;
// `

const MainBackground = styled.section`
  background-color: red;
  background-image: url('/torontoBackground.png');
  height: 80vh;
  background-color: rgba(239, 80, 40, 0.91);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MainCopy = styled.h1`
  color: white;
  font-size: 28px;
  font-weight: lighter;
  width: 60%;
`

const SubTitle = styled.section`
  color: #222222;
  font-weight: lighter;
  & > h1 {
    font-size: 30px;
    font-weight: lighter;
    margin-top: 60px;
    margin-bottom: 70px;
  }
`

const GetInTouch = styled.button`
  border: 1px solid white;
  background-color: transparent;
  font-size: 25px; border-radius: 5px; padding: 10px 25px;
  color: #FFF;
  font-weight: lighter;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${Colors.mainRed};
  }
`

const Image = styled.div`
  max-height: 270px;
  overflow: hidden;
  img {
    width: 90%;
  }
`

const ImageText = styled.div`
  font-weight: lighter;
  margin-top: 30px;
`

const Timeline = styled.div`
  display: flex;
  flex-direction: row;

  & > div > div {
    padding: 0 10%;
  }
`

const Social = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  font-size: 40px;
  color: white;
`

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <MainBackground>
          <MainCopy>
            Hello.
            I’m Rodrigo, front-end developer from Chile.
            I’m passionate about learning new things, crafting beautiful user experiences and technology.
            <br/>
            And I really love Toronto.
          </MainCopy>
          <GetInTouch>
            <a href='mailto:rodcisal@gmail.com' className='button'>
              Get In Touch
            </a>
          </GetInTouch>
          <Social>
            <div>
              <a href='http://github.com/rodcisal' target='_blank'>
                <GithubIcon />
              </a>
            </div>
            <div>
              <a href='http://github.com/rodcisal' target='_blank'>
                <LinkedinIcon />
              </a>
            </div>
            <div>
              <a href='http://twitter.com/rodcisal' target='_blank'>
                <TwitterIcon />
              </a>
            </div>
          </Social>
        </MainBackground>
        <SubTitle>
          <h1>Latest Work</h1>
        </SubTitle>
        <Row>
          <Col xs={6} md={6}>
            <Image>
              <img src='/theketocalculator.png' />
            </Image>
            <ImageText>
              <a href='https://play.google.com/store/apps/details?id=com.theketocalculator' target='_blank'>
                The Keto calculator
              </a>
              <br />
              React Native, Android
            </ImageText>
          </Col>
          <Col xs={6} md={6}>
            <Image>
              <img src='/joinventure.jpg' />
            </Image>
            <ImageText>
              <a href='http://joinventure.orionsoft.io' target='_blank'>
                JoinVenture (WIP)
              </a>
              <br />
              React, Meteor, GraphQL, Apollo, css-modules
            </ImageText>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <SubTitle>
              <h1>Work Experience</h1>
              <Timeline>
                <Col xs={3} md={3}>
                  <h1 style={{borderBottom: '6px solid #2196F3', paddingBottom: 20}}>2017</h1>
                  <div>
                    <a href='http://orionsoft.io' target='_blank'>
                      Orionsoft
                    </a>
                    <br />
                    Javascript Developer
                    <br />
                    <span>
                      Meteor, React, React-native, GraphQL, ES6/ES7, Apollo
                    </span>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <h1 style={{borderBottom: '6px solid #FFC107', paddingBottom: 20}}>2016</h1>
                  <div>
                    <a href='http://archdaily.com' target='_blank'>
                      ArchDaily
                    </a>
                    <br />
                    Backend developer
                    <br />
                    <span>
                      Rails 4, Ruby
                    </span>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <h1 style={{borderBottom: '6px solid rgba(239, 80, 40, 0.91)', paddingBottom: 20}}>2015</h1>
                  <div>
                    Meteor Freelancer / <a href='http://getcrate.co' target='_blank'> GetCrate.co </a>
                    <br />
                    Full-stack developer
                    <br />
                    <span>
                      Javascript, Meteor, Mongodb, Blaze
                    </span>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <h1 style={{borderBottom: '6px solid #8BC34A', paddingBottom: 20}}>2014</h1>
                  <div>
                    <a href='http://comparaonline.com' target='_blank'>
                      ComparaOnline.com
                    </a>
                    <br />
                    Front-end developer
                    <br />
                    <span>
                      Rails, SASS, Responsive web design, Ruby
                    </span>
                  </div>
                </Col>
              </Timeline>
            </SubTitle>
          </Col>
        </Row>
      </div>
    )
  }
}
