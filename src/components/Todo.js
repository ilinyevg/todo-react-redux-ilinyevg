import React, { Component } from 'react' 
import PropTypes from 'prop-types'
import { Card, Dimmer, Button, Item } from 'semantic-ui-react' 
import TaskEditForm from './TaskEditForm'

class Todo extends Component {
  // I decided to use State here intead Redux
  // explanation:https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367
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
        className='slide'
        dimmed={active}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
      >
        <Card.Header as='h4' style={{ color: 'grey' }}>{text.length>40?text.substr(0,40)+"...":text}</Card.Header>
        <Card.Meta>
          {completed ? <p style={{ color: 'green' }}>Completed</p> : 'Active'}
        </Card.Meta>
          <Dimmer className='CardBox' active={active} inverted style={{backgroundColor:'#26465b', color: 'white'}}>
            <Item className='HalfWidth'>
              <Item.Content>
            {
              completed ?
              <Button className='Button RedText FontSize' onClick={onClickComplete}>
                Undo
              </Button>
              :
              <Button className='Button GreenText FontSize' onClick={onClickComplete}>
                Complete
              </Button>
            }
              </Item.Content>
            </Item>
            |
            <Item className='HalfWidth'>
              <Item.Content>
            <Button className='Button WhiteText' onClick={onClickEdit}>
              Edit
            </Button>
            </Item.Content>
            </Item>
          </Dimmer>
          <Dimmer active={edit} inverted className='White'>
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
