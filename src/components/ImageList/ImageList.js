import React from 'react';
import './ImageList.css';
import ImageItem from './ImageItem'
const ImageList = ({ images, toggleLike, imageClick }) => {
    var items = images.map(image => <ImageItem key={image.id} imageClick={imageClick} toggleLike={toggleLike} image={image}/>);
    return (
      <div className="image-container">
        { items }
      </div>
    )
  }

  export default ImageList;