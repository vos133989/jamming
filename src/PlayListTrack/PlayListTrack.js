import React, { Component } from 'react';
import './PlayListTrack.css';

const track = {
  name: 'Test Songname',
  album: 'Test Album',
  artist: 'Test Artist'
};

export class PlayListTrack extends Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name}</h3>
          <p>{track.artist} | {track.album}</p>
        </div>
        <a className="Track-action">-</a>
      </div>
    );
  }
}
