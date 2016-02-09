import React, {Component} from 'react';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="center-container">
          <h1>Hero Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a className="button-link-dark">Call to action</a>
        </div>
      </div>
    );
  }
}