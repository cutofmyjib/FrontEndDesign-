import React, {Component} from 'react';

export default class HomeSection extends Component {
  render() {
    return (
      <div className="home-section-stack">
        <div className="aside">
          <ul className="side-links-ul">
            <li>Sidebar Link</li>
            <li>Another Longer Sidebar Link</li>
            <li>Sidebar Link</li>
          </ul>
        </div>
        <div className="home-section-content">
          <div className="center-container home-section-wrapper">
            <h1>Header</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eatur.
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
  quae ab illo inventore veritatis.</p>
            <a className="button-link-dark">Call to action</a>
          </div>
        </div>
      </div>
    );
  }
}