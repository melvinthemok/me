import React, { Component } from 'react'
import { Card, Divider, Image, Button } from 'semantic-ui-react'

class Work extends Component {
  render () {
    return (
      <Card centered raised>
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>{this.props.stack}<br />{this.props.time}</Card.Meta>
          <Divider />
          <Image src={this.props.image} />
          <Divider />
          <Card.Description>{this.props.description}<br /></Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='red' href={this.props.github}>GitHub</Button>
            <Button basic color='red' href={this.props.live}>Live app</Button>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default Work
