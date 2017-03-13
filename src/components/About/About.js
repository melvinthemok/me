import React, { Component } from 'react'
import { Grid, Header, Icon, Segment, Image } from 'semantic-ui-react'
import headshot from './headshot.png'

class About extends Component {
  render () {
    return (
      <div>
        <Header as='h1' size='large' textAlign='right'>
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
      </div>
    )
  }
}

export default About
