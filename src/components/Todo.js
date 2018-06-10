import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import { Card, Dimmer, Button, Item } from 'semantic-ui-react' 
import TaskEditForm from './TaskEditForm'

class Todo extends Component {
  // Why I use State? 
  // Dan Abramov is right - reference:https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
  state = {
    edit:false,
    active:false
  }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })
  
  render() {
    const { active, edit } = this.state;
    const { onClickComplete, completed, text, onTaskEdit } = this.props;

    const onSubmit = (e) => {
      e.preventDefault()
      const value = e.target.tastText.value;
      if (!value.trim()) { return }
      onTaskEdit(value)
      this.setState({active: true, edit: false});
    };

    const onClickEdit = (e) => {
      this.setState({active: false, edit: true});
    };

    return <Card style={active?{backgroundColor:'#26465b', color: 'white'}:{}}>
    <Card.Content>
      <Dimmer.Dimmable
        dimmed={active}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
      >
        <Card.Header as='h4' style={{ color: 'grey' }}>{text}</Card.Header>
        <Card.Meta>
          {completed ? <p style={{ color: 'green' }}>Completed</p> : 'Active'}
        </Card.Meta>
          <Dimmer className='CardButtons' active={active} inverted style={{backgroundColor:'#26465b', color: 'white'}}>
            <Item style={{width: '50%'}}>
              <Item.Content>
            {
              completed ?
              <Button style={{color: '#d5614b', background: 'transparent'}} onClick={onClickComplete}>
                Undo
              </Button>
              :
              <Button style={{color: '#2aaf6e', background: 'transparent'}} onClick={onClickComplete}>
                Complete
              </Button>
            }
              </Item.Content>
            </Item>
            |
            <Item style={{width: '50%'}}>
              <Item.Content>
            <Button style={{color: 'white', background: 'transparent'}} onClick={onClickEdit}>
              Edit
            </Button>
            </Item.Content>
            </Item>
          </Dimmer>
          <Dimmer active={edit} inverted style={{backgroundColor:'white'}}>
            {TaskEditForm({text, onSubmit})}
          </Dimmer>
        </Dimmer.Dimmable>
    </Card.Content>
  </Card>
  }
}

Todo.propTypes = {
  onClickComplete: PropTypes.func.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
