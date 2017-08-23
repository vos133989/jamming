import React, { Component } from 'react';
import './PlayListTracks.css';
import { PlayListTrackList } from '../PlayListTrackList/PlayListTrackList';

export class PlayListTracks extends Component {
  render() {
    // TODO add onChange handler to get rid of warning form field with value prop without handler
    return (
      <div className="Playlist">
        <input value="New Playlist" />
        <PlayListTrackList />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}
