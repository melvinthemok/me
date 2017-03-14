import React, { Component } from 'react'
import { Header, Icon, Card } from 'semantic-ui-react'
import codingSkills from './codingSkills.json'
import CodingSkill from './CodingSkill.js'
import otherSkills from './otherSkills.json'
import OtherSkill from './OtherSkill.js'

class Skills extends Component {
  render () {
    return (
      <div>
        <Header as='h1' size='large' textAlign='right' className='title active'>
          <div className='title active'><Icon name='code' />skills</div>
        </Header>
        <Card.Group stackable itemsPerRow={4}>
          {
            codingSkills.map(function (codingSkill) {
              return <CodingSkill key={codingSkill.description.toString()} icon={codingSkill.icon} image={codingSkill.image} description={codingSkill.description} />
            })
          }
        </Card.Group>
        <br />
        <Card.Group stackable doubling itemsPerRow={2}>
          {
            otherSkills.map(function (otherSkill) {
              return <OtherSkill key={otherSkill.description.toString()} link={otherSkill.link} description={otherSkill.description} institution={otherSkill.institution} time={otherSkill.time} />
            })
          }
        </Card.Group>
      </div>
    )
  }
}

export default Skills
