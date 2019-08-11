import React, { Component } from 'react';
import './ImageModal.css';

export default class ImageModal extends Component {

    closeModal = () => {
        // console.log("close modal clicked");
        this.props.closeModal();
    }

    zoomIn = () => {
        // console.log("zoom in clicked");
    }

    render() {
        const { src } = this.props;
        if (!src) {
            return null;
        }
        return (
            <div>
                <div className="modal-overlay"></div>
                <div className="modal">
                    <div className='modal-body'>
                        
                        <div className='button-container'>
                            <button className='modal-button'
                                onClick={e => {
                                    this.closeModal();
                                    e.stopPropagation();
                                    
                                }}>
                                X
                            </button>

                            {/* <button className='modal-button'
                                onClick={e => {
                                    this.zoomIn();
                                    e.stopPropagation();
                                    
                                }}>
                                ZoomIn
                            </button> */}
                        </div>
                        <img src={src} />
                    </div>

                </div>
            </div>
        )
    }

}