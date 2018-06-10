import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Input } from 'semantic-ui-react'

const TaskEditForm = ({ text = '', onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
        <Input 
            id='tastText'
            floated='left' 
            style={{maxWidth:'70%', fontSize:'14px', width:'70%' }}  
            placeholder="Enter task name..."
            defaultValue={text}
        />
        <Button className='Button' floated='right'>
            Save
        </Button>
      </Form>
  )
}

TaskEditForm.propTypes = {
    text: PropTypes.text,
    onSubmit: PropTypes.func.isRequired
}

export default TaskEditForm