import React from 'react';
import ImageGallery from 'react-image-gallery';

const Gallery = (props) => {
  return (
    <div className="gallery">
      <ImageGallery items={props.images} />
    </div>
  )
}

export default Gallery;
