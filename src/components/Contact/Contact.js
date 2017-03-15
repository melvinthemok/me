import React, { Component } from 'react'
import { Header, Icon, Form, Button } from 'semantic-ui-react'

class Contact extends Component {
  render () {
    return (
      <div>
        <Header as='h1' size='large' textAlign='right' className='title active'>
          <div className='title active'><Icon name='mail outline' />contact</div>
          <Form action='https://formspree.io/email@melvinmok.com' method='POST'>
            <Form.Group widths='equal'>
              <Form.Input label='name' type='text' name='name' placeholder='your name' />
              <Form.Input label='email' type='email' name='email' placeholder='your email' />
            </Form.Group>
            <Form.TextArea label='message' type='text' name='message' placeholder='say hello' />
            <Button color='red' type='submit' value='Send'><Icon name='send' /></Button>
          </Form>
        </Header>
      </div>
    )
  }
}

export default Contact
