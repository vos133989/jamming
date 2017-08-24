import React, { Component } from 'react';
import './SearchResultTrackList.css';
import { SearchResultTrack } from '../SearchResultTrack/SearchResultTrack';

const tracks = ['','' ,'' ,'' ,''];

export class SearchResultTrackList extends Component {
  render() {
    const searchResultTracks = tracks.map(track => <SearchResultTrack />);
    return (
      <div className="TrackList">
        {searchResultTracks}
      </div>
    );
  }
}
