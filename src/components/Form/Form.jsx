import React, { Component } from 'react';
import FormList from './FormList';

const initialTodos = []; // Додайте визначення initialTodos

class Form extends Component {
  state = {
    todos: initialTodos,
    deletedTodos: [],
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => {
      const todoToDelete = prevState.todos.find((todo) => todo.id === todoId);
      return {
        todos: prevState.todos.filter((todo) => todo.id !== todoId),
        deletedTodos: [...prevState.deletedTodos, todoToDelete],
      };
    });
  };

  formSubmitHandler = (data) => {
    // Обробка даних форми
    console.log(data);
  };

  render() {
    return (
      <div className="container">
        <FormList onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}

export default Form;



