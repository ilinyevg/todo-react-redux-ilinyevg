import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo' 
import { Grid, Responsive } from 'semantic-ui-react' 
import AddTodo from '../containers/AddTodo'

const list = (todos, onTodoClick, onTaskEdit) => {
  return ( 
  <div>
    {todos.map(todo => 
      <Todo
        key={todo.id}
        {...todo}
        onClickComplete={() => onTodoClick(todo.id)}
        onTaskEdit={(text) => onTaskEdit(todo.id, text)}
      />
    )}
    <AddTodo />
  </div>
  )
}

const gridList = (todos, onTodoClick, onTaskEdit) => {
  return (
    <Grid columns='3'>
    {todos.map((todo,i) => 
      <Grid.Column key={i}>
      <Todo
        key={todo.id}
        {...todo}
        onClickComplete={() => onTodoClick(todo.id)}
        onTaskEdit={(text) => onTaskEdit(todo.id, text)}
      />
      </Grid.Column>
    )}
    <Grid.Column>
    <AddTodo /> 
    </Grid.Column>
      </Grid>
  )
}

const TodoList = ({ todos, onTodoClick, onTaskEdit }) => (
  <div>
    <Responsive {...Responsive.onlyMobile}>
      {list(todos, onTodoClick, onTaskEdit)}
    </Responsive>
    <Responsive {...Responsive.onlyTablet}>
      {list(todos, onTodoClick, onTaskEdit)}
    </Responsive>
    <Responsive {...Responsive.onlyComputer}>
      {gridList(todos, onTodoClick, onTaskEdit)}
    </Responsive>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func
}

export default TodoList
