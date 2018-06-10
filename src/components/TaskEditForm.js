import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Input } from 'semantic-ui-react'

const TaskEditForm = ({ text = '', onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
        <Input 
            id='tastText'
            floated='left' 
            className='CardInput FontSize' 
            placeholder="Enter task name..."
            defaultValue={text}
        />
        <Button className='Button BlueText FontSize' floated='right'>
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