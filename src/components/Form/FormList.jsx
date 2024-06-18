import React, { Component } from 'react';
import shortid from 'shortid';
import './FormList.css';

class FormList extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    license: 'false',
  };

  nameInputId = shortid.generate();
  tageInputId = shortid.generate();

  // handleNameChange = event => {
  //   this.setState({ name: event.target.value });
  // };

  // handleNameChange = event => {
  //   this.setState({ tage: event.target.value });
  // };

  handleChange = e => {
    const {name, value} = e.currentTarget
    this.setState({
      // вичисляемие свойства обекта
      // const a = qwe,
      // [a]: 5
      // {
      //   qwe: 5
      // }

      // [e.currentTarget.name]: e.currentTarget.value

      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  handleLicenseChange = e => {
    console.log(e.currentTarget.checked);
  }

  reset = () => {
    this.setState({
      name: '',
      tag: '',
    })
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            className="input"
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            className="input"
            id={this.tageInputId}
          />
        </label>

        <p>Ваш уровень</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'} />junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'} />middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'} />senior
        </label>
        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          />
          Согласен с условиями
        </label>
        
        <button type="submit">SEND</button>
      </form>
    );
  }
}

export default FormList;
