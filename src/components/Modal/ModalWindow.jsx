// src/components/Modal/ModalComponent.js
import React, { useState } from 'react';
import Modal from './Modal';
import Clock from './Clock';
import './ModalComponent.css';

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className={isModalOpen ? 'button-red' : 'button-green'}
      >
        {isModalOpen ? 'Hide' : 'Show'} Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        <Clock /> {/* Додаємо годинник */}
      </Modal>
    </div>
  );
};

export default ModalComponent;

