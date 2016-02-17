import React, {Component} from 'react';

export default class Images extends Component {
  render() {
    return (
      <div className="image-list-item">
        <div className="img-div">
          <img src={this.props.source} />
        </div>
        <div className="p-div">
          <p>
            Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>,
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex eatur.
          </p>
        </div>
      </div>
    );
  }
}