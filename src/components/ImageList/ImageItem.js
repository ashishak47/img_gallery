import React from 'react';
import './ImageItem.css';

const ImageItem = ({ image }) => {
    return (
        <div key={image.id} className="flex-item">
            <div className="flex-item-body">
                <img src={image.urls.small} alt="" />
            </div>
            <div className="flex-item-footer">
                <div className="actions">
                    <a href={image.user.portfolio_url} target="_blank">{image.user.name}</a>
                </div>
            </div>
        </div>
    )
}
export default ImageItem;