import React, { Component } from 'react'
import './Dropdown.css'

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  // show = () => {
  //   this.setState({ visible: true });
  // };

  // hide = () => {
  //   this.setState({ visible: false });
  // };

  render() {
    const buttonClass = this.state.visible
      ? 'Dropdown__toggle Dropdown__toggle--red'
      : 'Dropdown__toggle Dropdown__toggle--green';

    return (
      <div className="Dropdown">

        <button
          type='button'
          // className="Dropdown__toggle"
          className={buttonClass}
          onClick={this.toggle}
          >
          {this.state.visible ? 'HIDE' : 'SHOW'}
          {/* Show / Hide */}
        </button>

        {/* <button
          type='button'
          className="Dropdown__toggle"
          onClick={this.hide}>

          Скрить
        </button> */}

        {this.state.visible && (
          <div className="Dropdown__menu">Випадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
