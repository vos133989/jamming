import React, { Component } from 'react';
import './PlayListTrackList.css';
import { Track } from '../Track/Track';

const tracks = ['','' ,''];

export class PlayListTrackList extends Component {
  render() {
    const playListTracks = tracks.map(track => <Track action='-'/>);
    return (
      <div className="TrackList">
        {playListTracks}
      </div>
    );
  }
}
