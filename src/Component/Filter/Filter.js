import React, { Component } from 'react';
import './Filter.css'

class Filter extends Component {
  render() {
    return (
      <div>
        <label>
          <input name="filter" onChange={this.props.onHandleChange} value={this.props.filter} placeholder="Find contacts by name" />
        </label>
      </div>
    );
  }
}

export default Filter;