import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

class CodingSkill extends Component {
  render () {
    return (
      <Card centered raised>
        <Card.Content>
          <Card.Header>
            { this.props.icon && <i className={this.props.icon} /> }
            { this.props.image && <Image src={this.props.image} height='22px' /> }
          </Card.Header>
          <Card.Meta>{this.props.description}</Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}

export default CodingSkill
