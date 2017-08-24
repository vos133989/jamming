import React, { Component } from 'react';
import './PlayListTrackList.css';
import { PlayListTrack } from '../PlayListTrack/PlayListTrack';

const tracks = ['','' ,'' ,'' ,''];

export class PlayListTrackList extends Component {
  render() {
    const playListTracks = tracks.map(track => <PlayListTrack />);
    return (
      <div className="TrackList">
        {playListTracks}
      </div>
    );
  }
}
