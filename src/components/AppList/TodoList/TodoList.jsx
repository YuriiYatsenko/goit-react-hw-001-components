import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => (
  <ul className='TodoList'>
    {todos.map(({ id, text, completed }) => (
      <li key={id} className='TodoList__item'>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleTodo(id)}
        />
        <p className={`TodoList__text ${completed ? 'completed' : ''}`}>
          {text}
        </p>
        <button onClick={() => onDeleteTodo(id)} className='TodoList__togle'>
          DELETE
        </button>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool,
    })
  ).isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};


export default TodoList;


