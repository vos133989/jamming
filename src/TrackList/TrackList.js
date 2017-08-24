import React, { Component } from 'react';
import './TrackList.css';
import { Track } from '../Track/Track';

const _tracks = ['','' ,'' ,'' ,''];

export class TrackList extends Component {
  render() {
    const tracks = _tracks.map(track => <Track action={this.props.action}/>);
    return (
      <div className="TrackList">
        {tracks}
      </div>
    );
  }
}
