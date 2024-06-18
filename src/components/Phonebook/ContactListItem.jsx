import React from 'react';
import PropTypes from 'prop-types';
import './ContactListItem.css';

const ContactListItem = ({ contact, onDeleteContact }) => (
  <li>
    <p>{contact.name}: {contact.number}</p>
    <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
  </li>
);

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactListItem;
