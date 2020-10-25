import React, { Component } from 'react';
import TodoItem from './todoItem';

class TodoAddForm extends Component {
  handleDelete = (item) => {
    this.props.onDelete(item);
  };
  
    render() {
        return (
          <ul>
            {
              this.props.todoList.map(item=> (
                <TodoItem 
                  key={item.id}   
                  todoItem={item} 
                  onDelete={this.handleDelete}
                />
              ))
            }
          </ul>
        );
    }
}

export default TodoAddForm;