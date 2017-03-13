import React, { Component } from 'react'
import Scroll from 'react-scroll'
import { Grid, Header, Icon, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import About from '../About/About.js'
import Works from '../Works/Works.js'
import Skills from '../Skills/Skills.js'
import Contact from '../Contact/Contact.js'

class App extends Component {
  componentDidMount () {
    Scroll.scrollSpy.update()
  }
  render () {
    return (
      <div>
        <Scroll.Element name='splash'>
          <Grid columns={1}>
            <Grid.Column width={16} only='computer'>
              <div id='big-triangle-computer' />
              <div id='melvin-computer'>melvin</div>
              <div id='mok-computer'>mok</div>
              <div id='rectangle-computer' />
              <div id='web-dev-computer'>full stack web developer</div>
              <div id='ex-lawyer-computer'>former IP / tech lawyer</div>
              <div id='small-triangle-computer' />
            </Grid.Column>
            <Grid.Column width={16} only='mobile'>
              <div id='dark-rectangle-mobile' />
              <div id='melvin-mobile'>melvin</div>
              <div id='mok-mobile'>mok</div>
              <div id='red-rectangle-mobile' />
              <div id='box-rectangle-mobile' />
              <div id='boxlet-rectangle-mobile' />
              <div id='dark-bar-mobile' />
              <div id='web-dev-mobile'>full stack web developer</div>
              <div id='ex-lawyer-mobile'>former IP / tech lawyer</div>
            </Grid.Column>
          </Grid>
        </Scroll.Element>
        <Header as='h1' id='top'>
          <Scroll.Link className='scroll-link' to='splash' smooth offset={-150} duration={500} >
            <span className='M blue'>m</span>
            <span className='M shiftM red'>m</span>
            <span className='M shiftM yellow'>m</span>
          </Scroll.Link>
        </Header>
        <Grid stackable relaxed='very' columns={3}>
          <Grid.Column width={3} id='left' />
          <Grid.Column width={10} id='main'>
            <Scroll.Element name='about'>
              <About />
            </Scroll.Element>
            <Scroll.Element name='works'>
              <Works />
            </Scroll.Element>
            <Scroll.Element name='skills'>
              <Skills />
            </Scroll.Element>
            <Scroll.Element name='contact'>
              <Contact />
            </Scroll.Element>
            <Divider section />
            <p id='foot'><Icon name='copyright' />Melvin Mok 2017</p>
          </Grid.Column>
          <Grid.Column width={3} only='computer'>
            <div id='sidebar'>
              <Header as='h3'><Scroll.Link activeClass='active' className='scroll-link' to='about' spy smooth offset={-150} duration={500} ><Icon name='help' />about</Scroll.Link></Header>
              <Header as='h3'><Scroll.Link activeClass='active' className='scroll-link' to='works' spy smooth offset={-150} duration={500}><Icon name='folder outline' />works</Scroll.Link></Header>
              <Header as='h3'><Scroll.Link activeClass='active' className='scroll-link' to='skills' spy smooth offset={-150} duration={500}><Icon name='code' />skills</Scroll.Link></Header>
              <Header as='h3'><Scroll.Link activeClass='active' className='scroll-link' to='contact' spy smooth offset={-150} duration={500}><Icon name='mail outline' />contact</Scroll.Link></Header>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default App
