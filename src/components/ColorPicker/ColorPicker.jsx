import React, { Component } from 'react';
import './ColorPicker.css'

// const ColorPicker = ({ options }) => (
//   <div className="ColorPicker">
//     <h2 className="ColorPicker__title">Color Picker</h2>
//     <div>
//       {options.map(({ label, color }) => (
//         <span
//           key={label}
//           className="ColorPicker__option"
//           style={{ backgroundColor: color }}
//         ></span>
//       ))}
//     </div>
//   </div>
// );

class ColorPicker extends Component {
  state = {
    activeOptionIdx: -1,
  };

  // handleOptionClick = (index) => {
  //   this.setState({ activeOptionIdx: index });
  // };

  handleOptionClick = (index) => {
    this.setState((prevState) => ({
      activeOptionIdx: prevState.activeOptionIdx === index ? -1 : index,
    }));
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;
    const activeColor = activeOptionIdx !== -1 ? options[activeOptionIdx].label : 'Not selected';

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p> Color: {activeColor}</p>

        <div>
          {options.map(({ label, color }, index) => {
            const optionClasses = ['ColorPicker__option'];

            if (index === activeOptionIdx) {
              optionClasses.push('ColorPicker__option--active');
            }

            return (
              <button
                key={label}
                className={optionClasses.join(' ')}
                style={{ backgroundColor: color }}
                onClick={() => this.handleOptionClick(index)}
              >
                {/* {label} */}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
