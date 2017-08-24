import React, { Component } from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResultTracks } from '../SearchResultTracks/SearchResultTracks';
import { PlayListTracks } from '../PlayListTracks/PlayListTracks';

const track = {
  name: 'Test Songname',
  album: 'Test Album',
  artist: 'Test Artist'
};

const searchResultTracks = [
  track,
  track,
  track,
  track,
  track
];

const playListTracks = [
  track,
  track,
  track
];

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResultTracks searchResultTracks={searchResultTracks} />
            <PlayListTracks playListTracks={playListTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
