import React from 'react';
import './ImageItem.css';

const ImageItem = ({ image, toggleLike }) => {
    const toggleLikeOnClick = (imageId) => {
        toggleLike(imageId);
    }
    console.log("### updated image item");
    return (
        <div key={image.id} className="flex-item">
            <div className="flex-item-body">
                <img src={image.urls.small} />
            </div>
            <div className="flex-item-footer">
                <div className="actions">
                    <button onClick={e => toggleLikeOnClick(image.id)}>
                        {image.liked_by_user ? 'Dislike' : 'Like'}
                    </button>
                    <span>{image.likes}</span>
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

//to avoid re-rendering on click like button.
export default React.memo(ImageItem, areEqual);