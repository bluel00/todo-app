import React, { Component } from 'react';

class TodoAddForm extends Component {
  formRef = React.createRef()
  inputRef = React.createRef()

  onSubmit = event => {
    event.preventDefault();
    const item = this.inputRef.current.value;
    item && this.props.onAdd(item);
    this.formRef.current.reset();
    
  }
    render() {
        return (
            <>
              <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input 
                  ref={this.inputRef}
                  type="text" 
                  className="add-item"
                  placeholder="insert.."
                />
                <button className="add-button">Add</button>
              </form>
            </>
        );
    }
}

export default TodoAddForm;