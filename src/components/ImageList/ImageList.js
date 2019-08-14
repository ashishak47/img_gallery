import React from 'react';
import './ImageList.css';
import ImageItem from './ImageItem';
import PropTypes from 'prop-types';


const ImageList = ({ images, toggleLike, imageClick }) => {
  var items = images.map(image => <ImageItem key={image.id} imageClick={imageClick} toggleLike={toggleLike} image={image} />);
  return (
    <div className="image-container">
      {items}
    </div>
  )
}

ImageList.propTypes = {
  imageClick: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired
}

export default ImageList;