import React, { Component } from 'react';
import ContactList from '../ContactList/ContactList'
import Form from '../Form/Form'
import {v4 as uuidv4} from 'uuid'
import Filter from '../Filter/Filter';
import './PhoneBook.css'

class PhoneBook extends Component {
  state = {
    contacts: [],
    name: '',
    filter: ''
  }

  addContact = contact => {
    const {name} = contact
    if (this.state.contacts.every((contact) => !contact.name.includes(name))) {
       this.setState(prev => ({
      contacts: [...prev.contacts, { ...contact,id: uuidv4() }]
    }))
    } else {
      alert(`${name} is alredy in contact`)
    }
  }

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id)
    })
  }

  filterContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }
    onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]:value})
  }

  render() {
    return (
      <>
        <h1>PhoneBook</h1>
        <Form addContact={this.addContact} />
        <Filter filter={this.state.filter} onHandleChange={this.onHandleChange} />
        <h2>Contacts</h2>
        <ContactList  contacts={this.state.filter ? this.filterContact() : this.state.contacts} deleteContact={this.deleteContact} />
        </>
    );
  }
}

export default PhoneBook;