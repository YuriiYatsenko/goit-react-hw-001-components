// src/components/Modal/Modal.js
import React from 'react';

const Modal = ({ largeImageURL, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
