import React, { Component } from 'react';
import './SearchResultTracks.css';
import { SearchResultTrackList } from '../SearchResultTrackList/SearchResultTrackList';

export class SearchResultTracks extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <SearchResultTrackList />
      </div>
    );
  }
}
