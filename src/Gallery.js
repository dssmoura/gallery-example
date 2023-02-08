import React from 'react'

const Gallery = ({ images }) => (
  <div style={{ backgroundColor: '#DDD' }}>
    <h1>Gallery</h1>
    {images.map(image => (
      <div>Image: {image}</div>
    ))}
  </div>
)

export default Gallery
