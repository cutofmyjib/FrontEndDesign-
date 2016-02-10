import React, {Component} from 'react';

export default class Images extends Component {
  render() {
    return (
      <div className="image-list-item">
        <div className="img-div">
          <img src="http://placehold.it/350x150" />
        </div>
        <div className="p-div">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex eatur.
          </p>
        </div>
      </div>
    );
  }
}