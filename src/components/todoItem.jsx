import React, { Component } from 'react';

class TodoItem extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.todoItem)
  }
    render() {
      const { contents } = this.props.todoItem;
        return (
          <li className="habit">
            <span>{contents}</span>
            <button className="todo-delete" onClick={this.handleDelete}>
              X
            </button>
          </li>
        );
    }
}

export default TodoItem;