import React from 'react';
import './ImageList.css';
import ImageItem from './ImageItem'
const ImageList = ({ images }) => {
    var items = images.map(image => <ImageItem key={image.id} image={image}/>);
    return (
      <div className="image-container">
        { items }
      </div>
    )
  }

  export default ImageList;