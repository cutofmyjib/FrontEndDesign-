import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
          <ul className="footer-nav-ul">
            <li><a href="#">footer link</a></li>
            <li><a href="#">footer link</a></li>
            <li><a href="#">footer link</a></li>
          </ul>
        </nav>
        <nav className="social-media">
          <ul className="footer-nav-ul">
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
        </nav>
      </footer>
    );
  }
}