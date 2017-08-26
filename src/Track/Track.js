import React, { Component } from 'react';
import './Track.css';

export class Track extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.action==='+') {
      this.props.addTrack(this.props.track);
    } else {
      // TODO call removeTrack()
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a
          onClick={this.handleClick}
          className="Track-action">{this.props.action}</a>
      </div>
    );
  }
}
