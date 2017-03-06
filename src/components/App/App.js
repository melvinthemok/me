import React, { Component } from 'react'
import headshot from './headshot.png'
import Scroll from 'react-scroll'
import { Grid, Header, Icon, Segment, Image, Card, Divider, Button, Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

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
              <div id='big-triangle' />
              <div id='melvin'>melvin</div>
              <div id='mok'>mok</div>
              <div id='rectangle' />
              <div id='web-dev'>full stack web developer</div>
              <div id='ex-lawyer'>former IP lawyer</div>
              <div id='small-triangle' />
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
              <Header as='h1' size='huge' textAlign='right'>
                <div className='title active'><Icon name='help' />about</div>
              </Header>
              <Grid stackable verticalAlign='middle' columns={2}>
                <Grid.Column width={7} textAlign='center'>
                  <Image centered id='headshot' src={headshot} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <Segment.Group raised>
                    <Segment>Hi I'm Melvin, a full-stack web developer</Segment>
                    <Segment>Some things I like:
                      <ul>
                        <li>making things that work well and look good</li>
                        <li>learning new skills</li>
                        <li>solving interesting problems efficiently</li>
                        <li>asking why and what if</li>
                      </ul>
                    </Segment>
                    <Segment>I used to:
                      <ul>
                        <li>be a lawyer handling commercial disputes</li>
                        <li>specialize in intellectual property</li>
                      </ul>
                    </Segment>
                  </Segment.Group>
                </Grid.Column>
              </Grid>
            </Scroll.Element>
            <Scroll.Element name='works'>
              <Header as='h1' size='huge' textAlign='right'>
                <div className='title active'><Icon name='folder outline' />works</div>
              </Header>
              <Card.Group stackable itemsPerRow={2}>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>Dealmaker</Card.Header>
                    <Card.Meta>jQuery, Bootstrap</Card.Meta>
                    <Divider />
                    <Image src='http://i.giphy.com/6q96bEW8ForOE.gif' />
                    <Divider />
                    <Card.Description>A negotiation game in which 2 players exchange info before making/accepting bids<br />Dec 2016</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='red' href='https://github.com/melvinthemok/dealmaker-game'>GitHub</Button>
                      <Button basic color='red' href='https://melvinthemok.github.io/dealmaker-game/'>Live app</Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>Volenti</Card.Header>
                    <Card.Meta>NodeJS, Express, MongoDB</Card.Meta>
                    <Divider />
                    <Image src='http://i.giphy.com/13RQMJjXBF4Yco.gif' />
                    <Divider />
                    <Card.Description>A volunteering platform for program creators, volunteers and guardians<br />Jan 2017</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='red' href='https://github.com/melvinthemok/volenti'>GitHub</Button>
                      <Button basic color='red' href='https://volenti.herokuapp.com/'>Live app</Button>
                    </div>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>WhereWork</Card.Header>
                    <Card.Meta>Rails, PostgreSQL</Card.Meta>
                    <Divider />
                    <Image src='http://i.giphy.com/xYtS7VnpMuEpy.gif' />
                    <Divider />
                    <Card.Description>An app to show the nearest places to work around a current or searched location<br />Feb 2017</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='ui two buttons'>
                      <Button basic color='red' href='https://github.com/melvinthemok/wherework'>GitHub</Button>
                      <Button basic color='red' href='https://wherework.herokuapp.com/'>Live app</Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Scroll.Element>
            <Scroll.Element name='skills'>
              <Header as='h1' size='huge' textAlign='right' className='title active'>
                <div className='title active'><Icon name='code' />skills</div>
              </Header>
              <Card.Group stackable doubling itemsPerRow={4}>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-bootstrap-plain colored' />
                    </Card.Header>
                    <Card.Meta>Bootstrap</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-css3-plain colored' />
                    </Card.Header>
                    <Card.Meta>CSS3</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-github-plain colored' />
                    </Card.Header>
                    <Card.Meta>GitHub</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-heroku-plain colored' />
                    </Card.Header>
                    <Card.Meta>Heroku</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-html5-plain colored' />
                    </Card.Header>
                    <Card.Meta>HTML5</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-javascript-plain colored' />
                    </Card.Header>
                    <Card.Meta>JavaScript</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-jquery-plain colored' />
                    </Card.Header>
                    <Card.Meta>jQuery</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-mongodb-plain colored' />
                    </Card.Header>
                    <Card.Meta>MongoDB</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-nodejs-plain colored' />
                    </Card.Header>
                    <Card.Meta>Node.js</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-postgresql-plain colored' />
                    </Card.Header>
                    <Card.Meta>PostgreSQL</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-python-plain colored' />
                    </Card.Header>
                    <Card.Meta>Python</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-rails-plain colored' />
                    </Card.Header>
                    <Card.Meta>Rails</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-react-original colored' />
                    </Card.Header>
                    <Card.Meta>React</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-ruby-plain colored' />
                    </Card.Header>
                    <Card.Meta>Ruby</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>
                      <i className='devicon-trello-plain colored' />
                    </Card.Header>
                    <Card.Meta>Trello</Card.Meta>
                  </Card.Content>
                </Card>
              </Card.Group>
              <Card.Group stackable doubling itemsPerRow={2}>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header href='https://courses.edx.org/certificates/757c2ce9e6a94a74a4daf8fc8fd4b1d7'>Intro to Computer Science and Programming Using Python</Card.Header>
                    <Card.Meta>edX, MITx<br />Mar 2016</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header href='https://courses.edx.org/certificates/d577275543db4db3a1eb9f60bbd591d2'>Intro to Computational Thinking and Data Science</Card.Header>
                    <Card.Meta>edX, MITx<br />May 2016</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header href='https://www.coursera.org/account/accomplishments/certificate/ZXVF7X5HWQ9K'>Learning How To Learn</Card.Header>
                    <Card.Meta>Coursera, UC San Diego<br />Sept 2016</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header href='https://www.coursera.org/account/accomplishments/specialization/certificate/GPBL9HAAUZCY'>Graphic Design</Card.Header>
                    <Card.Meta>Coursera, CalArts<br />Feb 2017</Card.Meta>
                  </Card.Content>
                </Card>
                <Card centered raised>
                  <Card.Content>
                    <Card.Header>Web Development Immersive</Card.Header>
                    <Card.Meta>General Assembly<br />Mar 2017</Card.Meta>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Scroll.Element>
            <Scroll.Element name='contact'>
              <Header as='h1' size='huge' textAlign='right' className='title active'>
                <div className='title active'><Icon name='mail outline' />contact</div>
                <Form action='https://formspree.io/melvinmok.cy@gmail.com' method='POST'>
                  <Form.Group widths='equal'>
                    <Form.Input label='name' type='text' name='name' placeholder='your name' />
                    <Form.Input label='email' type='email' name='email' placeholder='your email' />
                  </Form.Group>
                  <Form.TextArea label='message' type='text' name='message' placeholder='your message' />
                  <Button color='red' type='submit' value='Send'><Icon name='send' /></Button>
                </Form>
              </Header>
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
