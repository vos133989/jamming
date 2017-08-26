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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { playListTracks: [ track, track, track ] };
    this.addTrack = this.addTrack.bind(this);
  }

  searchSpotify(term) {
    console.log(`Searching Spotify with ${term}`);
  }

  addTrack(track) {
    this.state.playListTracks.push(track);
    this.setState({ playListTracks: this.state.playListTracks });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar searchSpotify={this.searchSpotify} />
          <div className="App-playlist">
            <SearchResultTracks
              addTrack={this.addTrack}
              searchResultTracks={searchResultTracks} />
            <PlayListTracks playListTracks={this.state.playListTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
