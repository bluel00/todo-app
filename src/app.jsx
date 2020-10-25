import React, { Component } from 'react';
import Navbar from './components/navbar'
import TodoAddForm from './components/todoAddForm'
import TodoList from './components/todoList'

class App extends Component {
  state = {
    todoList: [
      {id:'1', contents: 'Reading'},
      {id:'2', contents: 'Running'}
    ]
  }

  handleAdd = contents => {
    const todoList = [...this.state.todoList, {id: Date.now(), contents}]
    this.setState({ todoList })
  }
  
  handleDelete = todoItem => {
    const todoList  = this.state.todoList.filter(item => item.id !== todoItem.id);
    this.setState({ todoList })
  }

  render() {
    return (
      <>
        <Navbar totalCount={this.state.todoList.length} />
        <TodoAddForm onAdd={this.handleAdd}/>
        <TodoList 
          todoList={this.state.todoList} 
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;