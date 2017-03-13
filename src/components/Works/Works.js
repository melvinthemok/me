import React, { Component } from 'react'
import { Header, Icon, Card } from 'semantic-ui-react'
import works from './works.json'
import Work from './Work.js'

class Works extends Component {
  render () {
    return (
      <div>
        <Header as='h1' size='large' textAlign='right'>
          <div className='title active'><Icon name='folder outline' />works</div>
        </Header>
        <Card.Group stackable doubling itemsPerRow={2}>
          {
            works.map(function (work) {
              return <Work key={work.name.toString()} name={work.name} stack={work.stack} time={work.time} image={work.image} description={work.description} github={work.github} live={work.live} />
            })
          }
        </Card.Group>
      </div>
    )
  }
}

export default Works
