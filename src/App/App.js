import React, { Component } from 'react';
import './App.css';
import { SearchBar } from './SearchBar';
import { SearchResultTracks } from './SearchResultTracks';
import { PlayListTracks } from './PlayListTracks';

class App extends Component {
  render() {
    return (
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResultTracks />
          <PlayListTracks />
        </div>
      </div>
    );
  }
}

export default App;
