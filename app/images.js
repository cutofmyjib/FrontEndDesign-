import React, {Component} from 'react';
import Image from './image.js'

export default class Images extends Component {
  render() {
    return (
      <div className="images-div">
        <Image />
        <Image />
        <Image />
      </div>
    )
  }
}