import React, { Component } from 'react'
import { connect } from 'react-redux'
import VisibleTodoList from '../containers/VisibleTodoList'
import './App.css'
import {
  Container, 
  Header, 
  List,
  Menu,
  Segment,
  Card
} from 'semantic-ui-react'

class AppComponent extends Component {
  
  render() {
    const { count } = this.props; 
    return (
      <div>
        <Menu fixed='top'>
          <Container>
            <Menu.Item as='h3' header className='WebsiteTitle'>
              SimpleTask
            </Menu.Item>
            <Menu.Item position='right'>Hello, User!</Menu.Item>
          </Container>
        </Menu>

        <Container className='MainContainer'>
            <Header as='h1'>Your tasks</Header>
            {(count === 0)?
            <Card className="GreenHeader"> 
              <Card.Content>
                <Header as='h3'>All tasks completed</Header>
                <p>Well done!</p>
              </Card.Content>
            </Card>
            :
            <Card className="BlueHeader"> 
              <Card.Content>
                <Header as='h3'>Complete all tasks</Header>
                <p>You have: {count} active tasks</p>
              </Card.Content>
            </Card>}
            <VisibleTodoList />
        </Container>

        <Segment vertical className='footer' >
          <Container textAlign='center'> 
            <List horizontal divided link>
              <List.Item>
                Powered by SimpleTask
              </List.Item>
            </List>
          </Container>
        </Segment>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({ 
  count: state.todos?state.todos.present.filter(i => !i.completed).length:0
})

const App = connect(
  mapStateToProps
)(AppComponent)

export default App
