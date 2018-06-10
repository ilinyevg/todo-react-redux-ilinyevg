import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Card, Dimmer, Header } from 'semantic-ui-react'
import TaskEditForm from '../components/TaskEditForm'

class AddTodo extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state;
    const { onTaskAdd, dispatch } = this.props;
    let activeClass = ''
    if (!active) {activeClass = 'NoBorders AddTask'};

    const onSubmit = e => {
      e.preventDefault()
      if (!e.target.tastText.value.trim()) { return }
      dispatch(onTaskAdd(e.target.tastText.value))
      console.log(e.target.tastText.value);
      e.target.tastText.value = ''
    };
    
    return (
      <Card className={activeClass}>
        <Card.Content>
          <Dimmer.Dimmable
            dimmed={active}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
          >
            <Header as='h2'>+ Add Task</Header>
            <Dimmer active={active} inverted className='White'>
              {TaskEditForm({onSubmit})}
            </Dimmer>
          </Dimmer.Dimmable>
        </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = () => ({
  onTaskAdd: text => addTodo(text)
})

const AddTodoCard = connect(
  mapDispatchToProps
)(AddTodo)

export default AddTodoCard
