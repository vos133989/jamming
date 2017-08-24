import React, { Component } from 'react';
import './SearchResultTrackList.css';
import { Track } from '../Track/Track';

const tracks = ['','' ,'' ,'' ,''];

export class SearchResultTrackList extends Component {
  render() {
    const searchResultTracks = tracks.map(track => <Track action='+'/>);
    return (
      <div className="TrackList">
        {searchResultTracks}
      </div>
    );
  }
}
