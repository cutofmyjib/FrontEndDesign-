import React, {Component} from 'react';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="center-container hero-wrapper">
          <h1 className="heading">Hero Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a className="button-link-hero">Call to action</a>
        </div>
      </div>
    );
  }
}