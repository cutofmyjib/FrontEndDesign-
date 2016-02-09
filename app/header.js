import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="nav-heading">
          <span className="slim">IBM</span> Design FED Challenge
        </h1>
        <nav>
          <ul className="header-nav-ul">
            <li><a href="#">Nav Link</a></li>
            <li><a href="#">Nav Link</a></li>
            <li><a href="#">Nav Link</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}