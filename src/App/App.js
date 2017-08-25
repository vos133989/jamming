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

  searchSpotify(term) {
    console.log(`Searching Spotify with ${term}`);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar searchSpotify={this.searchSpotify} />
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
