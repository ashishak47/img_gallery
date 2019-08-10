import React from 'react';
import './ImageItem.css';

const ImageItem = ({ image, toggleLike, imageClick }) => {
    const toggleLikeOnClick = (imageId) => {
        toggleLike(imageId);
    }

    const onImageClick = (imageId, imageUrl) =>{
        imageClick(imageId, imageUrl);
    }
    
    return (
        <div key={image.id} className="flex-item">
            <div className="flex-item-body" onClick={e => {
                    e.stopPropagation();
                    onImageClick(image.id, image.urls.small)}
            }>
                <img src={image.urls.small} />
            </div>
            <div className="flex-item-footer">
                <div className="actions">
                    <button onClick={e => {
                        e.stopPropagation();
                        toggleLikeOnClick(image.id)}
                    }>
                        {image.liked_by_user ? 'Dislike' : 'Like'}
                    </button>
                    <div>{image.likes}</div>
                </div>
            </div>
        </div>
    )
}

const areEqual = (prevProps, nextProps) => {
    if(prevProps.image.liked_by_user === nextProps.image.liked_by_user){
        return true;
    }
    else
        return false;
}

//to avoid re-rendering of other images on click like button.
export default React.memo(ImageItem, areEqual);