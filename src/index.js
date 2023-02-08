import React from 'react';
import { render } from 'react-dom';

import HTMLContent from './HTMLContent'
import Gallery from './Gallery'

let serverResponse = `
  <h3>Some title</h3>
  <p>Some text</p>
  <p>
    <img src="http://via.placeholder.com/250x100?text=1">
    <img src="http://via.placeholder.com/250x100?text=2">
    <img src="http://via.placeholder.com/250x100?text=3">
  </p>
`

const App = () => (
  <div>
    <HTMLContent
      content={serverResponse}
      injectGallery={(images) => (
        <Gallery images={images} />
      )}
    />
  </div>
);

render(<App />, document.getElementById('root'));
