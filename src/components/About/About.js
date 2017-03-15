import React, { Component } from 'react'
import { Grid, Header, Button, Icon, Segment, Image } from 'semantic-ui-react'
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
              <Segment>Hi I'm Melvin, a full stack web developer. I like:
                <ul>
                  <li>making things that work well and look good</li>
                  <li>learning new skills</li>
                  <li>efficiency</li>
                  <li>working with effective people to solve interesting problems</li>
                  <li>asking why and what if</li>
                </ul>
              </Segment>
              <Segment>Some other things:
                <ul>
                  <li>I speak a bit of French</li>
                  <li>up for football most of the time</li>
                  <li>I take my Best Man duties seriously</li>
                </ul>
              </Segment>
              <Segment>I used to:
                <ul>
                  <li>be a lawyer handling commercial disputes</li>
                  <li>specialize in intellectual property</li>
                </ul>
              </Segment>
              <Segment>
                <Grid columns={2}>
                  <Grid.Column width={6} textAlign='left' verticalAlign='middle'>
                    <a href={process.env.PUBLIC_URL + '/melvin-mok-cv.pdf'} download={process.env.PUBLIC_URL + '/melvin-mok-cv.pdf'}>Résumé</a>
                  </Grid.Column>
                  <Grid.Column width={10} textAlign='right'>
                    <Button circular icon='mail outline' href='mailto:email@melvinmok.com' />
                    <Button circular icon='github' href='https://github.com/melvinthemok' />
                    <Button circular icon='linkedin' href='https://www.linkedin.com/in/melvinmok' />
                  </Grid.Column>
                </Grid>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default About
