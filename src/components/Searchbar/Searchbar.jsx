// src/components/Searchbar/Searchbar.js
import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    // Прив'язка обробників подій до екземпляру компонента
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  }

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Пошук</span>
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Шукати зображення"
            value={this.state.query}
            onChange={this.handleChange}
            className="input"
          />
        </form>
      </header>
    );
  }
}


export default Searchbar;

