import React, { Component } from 'react';
import './PlayListTrackList.css';
import { PlayListTrack } from '../PlayListTrack/PlayListTrack';

export class PlayListTrackList extends Component {
  render() {
    return (
      <div className="TrackList">
        <PlayListTrack />
        <PlayListTrack />
        <PlayListTrack />
      </div>
    );
  }
}
