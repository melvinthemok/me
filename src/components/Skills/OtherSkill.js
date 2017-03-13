import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'

class OtherSkill extends Component {
  render () {
    return (
      <Card centered raised href={this.props.link}>
        <Card.Content>
          <Card.Header>{this.props.description}</Card.Header>
          <Card.Meta>{this.props.institution}<br />{this.props.time}</Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

export default OtherSkill
