import React from 'react';

function Gallery(props) {
  return (
    <div>
      <img src={props.imageUrl} alt="this is a whatever image" />
    </div>
  );
}

export default Gallery;
