// src/components/Button/Button.js
import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
