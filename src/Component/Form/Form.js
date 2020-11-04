import React, { Component } from 'react';
import './Form.css'

const initialState = {
    name: '',
    number:''
}
class Form extends Component {

  state = {
    ...initialState
  }

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]:value})
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...this.state });
    this.props.addContact({ ...this.state })
    this.setState({...initialState})
  }

  render() {
    return (
     <>
      <form className='ContactForm' onSubmit={this.onHandleSubmit}>
        <label>
          <input onChange={this.onHandleChange} name='name' className="inputName" value={this.state.name} placeholder="Name" />
          </label>
           <label>
          <input onChange={this.onHandleChange} name='number' className="inputNumber" value={this.state.number} placeholder="Number" />
        </label>
        <button className="formBtn" type='submit'>Add</button>
      </form>
      </>
    );
  }
}

export default Form;



