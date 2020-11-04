import React from 'react';
import './ContactList.css'

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(contact =>
          <li key={contact.id}> {contact.name} {contact.number}
            <button onClick={()=>deleteContact(contact.id)} type="button">delete</button>
          </li>
          )}
      </ul>
      </>
  );
};

export default ContactList;