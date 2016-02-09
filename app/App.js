import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './header.js'
import Hero from './hero.js'
import Images from './images.js'
import Footer from './footer.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Images />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
