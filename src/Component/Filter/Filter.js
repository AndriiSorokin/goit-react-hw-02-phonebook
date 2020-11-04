import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <label>Search
          <input name="filter" onChange={this.props.onHandleChange} value={this.props.filter} />
        </label>
      </div>
    );
  }
}

export default Filter;