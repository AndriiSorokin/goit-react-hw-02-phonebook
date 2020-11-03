import React, { Component } from 'react';
import ContactList from '../ContactList/ContactList'
import Form from '../Form/Form'
import {v4 as uuidv4} from 'uuid'
import Filter from '../Filter/Filter';

class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
    filter: ''
  }

  addContact = contact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { ...contact,id: uuidv4() }]
    }))
  }

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }

  filterContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase()).includes(this.state.filter().toLowerCase())
  }
    onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]:value})
  }

  render() {
    return (
      <>
        {/* <button onClick={() => this.addContact({ name: 'Alex', number: '12345' })}>addContact</button>
        <button onClick={() => this.deleteContact(this.state.contacts[0].id)}>deleteContact</button> */}
        <h1>PhoneBook</h1>
        <Form addContact={this.addContact} />
        <Filter filter={this.state.filter} onHandleChange={this.onHandleChange} />
        <h2>Contacts</h2>
        <ContactList deleteContact={this.deleteContact} contacts={this.state.filter ? this.filterContact() : this.state.contacts} />
        </>
    );
  }
}

export default PhoneBook;