import React, { Component } from 'react';
import initialTodos from './TodoList/todos.json';
import TodoList from './TodoList/TodoList';
import './TodoList/TodoList.css';

class AppList extends Component {
  state = {
    todos: initialTodos,
    deletedTodos: [],
    newTodoText: '',
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

  toggleTodoCompletion = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  restoreAllTodos = () => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        ...prevState.deletedTodos.map(todo => ({ ...todo, completed: false }))
      ],
      deletedTodos: [],
    }));
  };

  handleInputChange = (e) => {
    this.setState({ newTodoText: e.target.value });
  };

  handleAddTodo = (e) => {
    e.preventDefault();
    if (this.state.newTodoText.trim()) {
      const newTodo = {
        id: Date.now(), // Use current timestamp as a unique ID
        text: this.state.newTodoText,
        completed: false,
      };
      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodo],
        newTodoText: '',
      }));
    }
  };

  render() {
    const { todos, deletedTodos, newTodoText } = this.state;

    return (
      <>
        <h1>Состояние Компонента</h1>
        <form onSubmit={this.handleAddTodo}>
          <input
            type="text"
            value={newTodoText}
            onChange={this.handleInputChange}
            placeholder="Новая заметка"
          />
          <button type="submit">Добавить</button>
        </form>
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleTodo={this.toggleTodoCompletion}
        />
        <button
          onClick={this.restoreAllTodos}
          disabled={deletedTodos.length === 0}
          className="TodoList__togle"
        >
          Восстановить все удаленные
        </button>
      </>
    );
  }
}

export default AppList;


