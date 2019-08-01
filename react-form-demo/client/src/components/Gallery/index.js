import React from 'react';

function Gallery(props) {
  var image = props.image;
  return (
    <div>
      <h1>My Gallery</h1>
      <img src={image} alt="images" />
    </div>
  );
}

export default Gallery;
