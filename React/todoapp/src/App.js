import React from 'react';
import List from './Components/List'
import AddTodo from './Components/AddTodo'

class App extends React.Component {
  state = {
    todos : ["Complete todo", "Make CRUD opertaions app", "redux"]
  }
  deleteTodo = (id) => {
    let {todos} = this.state
    todos.splice(id,1)
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  render() {
    return (
      <div className="App container">
      <h1 className="center">Todos</h1>
      <List todos = {this.state.todos} deleteTodo={this.deleteTodo}/>
      <AddTodo addTodo={this.addTodo}/>
    </div>
    )
  }
}

export default App;
