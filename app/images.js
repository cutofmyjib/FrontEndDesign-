import React, {Component} from 'react';
import Image from './image.js'
import reqwest from 'reqwest';

export default class Images extends Component {
  constructor(props) {
    super(props)
    this.state = {images : []}
  }

  buildPhotoLargeUrl(photo) {
    return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
    '/' + photo.id + '_' + photo.secret + '_b.jpg';
  }

  componentDidMount() {
    var flickrAPI = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&tags=ibm&safe_search=1&is_getty=true&format=json&api_key=01057f6d62f9a608163136ac9f97820f";
    reqwest({
      url: flickrAPI,
      type: 'jsonp',
      jsonpCallbackName: 'jsonFlickrApi'
    })
    .then(response => {
        var imageUrls = response.photos.photo.map(photo => this.buildPhotoLargeUrl(photo))
        this.setState({images: imageUrls, status: 'success'});
    })
    .catch((function(response){
      this.setState({status: 'fail'})
    }).bind(this))
  }

  render() {
    var images = [];

    if (this.state.status === 'success') {
      images = this.state.images.map(function(data){
        console.log(data)
        return <Image source={data} />
      })
    } else {
      console.log(this.state.status);
    }
    return (
      <div className="images-div">
        {images}
      </div>
    )
  }
}