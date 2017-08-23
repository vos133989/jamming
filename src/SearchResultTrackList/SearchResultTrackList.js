import React, { Component } from 'react';
import './SearchResultTrackList.css';
import { SearchResultTrack } from '../SearchResultTrack/SearchResultTrack';

export class SearchResultTrackList extends Component {
  render() {
    return (
      <div className="TrackList">
        <SearchResultTrack />
        <SearchResultTrack />
        <SearchResultTrack />
        <SearchResultTrack />
        <SearchResultTrack />
      </div>
    );
  }
}
