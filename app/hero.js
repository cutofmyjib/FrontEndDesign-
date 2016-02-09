import React, {Component} from 'react';

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <h1>Hero Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a className="button-link-dark">Call to action</a>
      </section>
    );
  }
}