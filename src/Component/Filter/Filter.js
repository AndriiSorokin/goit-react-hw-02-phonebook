import React, { Component } from 'react';
import './Filter.css'

class Filter extends Component {
  render() {
    return (
      <div>
        <label>Find contacts by name
          <input name="filter" onChange={this.props.onHandleChange} value={this.props.filter} />
        </label>
      </div>
    );
  }
}

export default Filter;