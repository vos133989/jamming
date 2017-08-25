import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term : ''};
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(e) {
    const term = e.target.value;
    this.setState({ term: term});
  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter A Song Title" />
        <a>SEARCH</a>
      </div>
    );
  }
}
