import React, { Component } from 'react';
import './PlayListTrackList.css';
import { PlayListTrack } from './PlayListTrack';

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
