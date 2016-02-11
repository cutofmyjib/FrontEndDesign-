import React, {Component} from 'react';
import Image from './image.js'
import reqwest from 'reqwest';

export default class Images extends Component {
  constructor(props) {
    super(props)
    this.state = {images : []}
  }

  componentDidMount() {
    var flickrAPI = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&tags=ibm&safe_search=1&is_getty=true&format=json&api_key=01057f6d62f9a608163136ac9f97820f&jsonpcallback=?";
    reqwest({
      url: flickrAPI,
      type: 'jsonp'
    })
    .then((function(response, status){

      console.log('success')
      this.setState({images: response, status: 'success'});
    }).bind(this))

    .catch((function(response){
      this.setState({status: 'fail'})
    }).bind(this))
  }

  render() {
    var images = [];
    if (this.state.status === 'success') {
      console.log(this.state.images)
    } else {
      console.log(this.state.status);
    }
    return (
      <div className="images-div">
        <Image />
        <Image />
        <Image />
      </div>
    )
  }
}