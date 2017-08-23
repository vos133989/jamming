import React, { Component } from 'react';
import './PlayListTracks.css';
import { PlayListTrackList } from './PlayListTrackList';

export class PlayListTracks extends Component {
  render() {
    return (
      <div className="Playlist">
        <input value='New Playlist' />
        <PlayListTrackList />
        <a class="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}
